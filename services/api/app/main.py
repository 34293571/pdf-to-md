import logging
import time

from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.config import ALLOWED_ORIGINS, MAX_BYTES, MAX_PAGES
from app.converter import convert_pdf_to_markdown
from app.validators import ValidationError, validate_pdf_bytes

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="PDF a MD API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_origin_regex=r"https://.*\.vercel\.app",
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


def error_response(code: str, message: str, status_code: int) -> JSONResponse:
    return JSONResponse(
        status_code=status_code,
        content={
            "ok": False,
            "code": code,
            "message": message,
            "limits": {"maxBytes": MAX_BYTES, "maxPages": MAX_PAGES},
        },
    )


@app.get("/health")
def health() -> dict:
    return {"ok": True}


@app.post("/api/v1/convert")
async def convert(file: UploadFile = File(...)) -> JSONResponse:
    started = time.perf_counter()

    if not file.filename:
        return error_response(
            "INVALID_PDF",
            "The file may be corrupted, password-protected, or not a valid PDF.",
            400,
        )

    content_type = (file.content_type or "").lower()
    if content_type and content_type not in ("application/pdf", "application/octet-stream"):
        return error_response(
            "INVALID_PDF",
            "The file may be corrupted, password-protected, or not a valid PDF.",
            400,
        )

    try:
        pdf_bytes = await file.read()
    except Exception:
        return error_response(
            "CONVERSION_FAILED",
            "Something went wrong. Please try again in a moment.",
            500,
        )

    doc = None
    try:
        doc = validate_pdf_bytes(pdf_bytes)
        markdown, meta = convert_pdf_to_markdown(doc)

        elapsed_ms = int((time.perf_counter() - started) * 1000)
        logger.info(
            "convert ok pages=%s chars=%s elapsed_ms=%s",
            meta["pages"],
            len(markdown),
            elapsed_ms,
        )

        return JSONResponse(
            status_code=200,
            content={"ok": True, "markdown": markdown, "meta": meta},
        )
    except ValidationError as exc:
        status = 400
        logger.info("convert rejected code=%s", exc.code)
        return error_response(exc.code, exc.message, status)
    except Exception:
        logger.exception("convert failed")
        return error_response(
            "CONVERSION_FAILED",
            "Something went wrong. Please try again in a moment.",
            500,
        )
    finally:
        if doc is not None:
            doc.close()
