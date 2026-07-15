from dataclasses import dataclass

import fitz

from app.config import MAX_BYTES, MAX_PAGES, MIN_CHARS_PER_PAGE


@dataclass
class ValidationError(Exception):
    code: str
    message: str


def validate_pdf_bytes(pdf_bytes: bytes) -> fitz.Document:
    if len(pdf_bytes) > MAX_BYTES:
        raise ValidationError(
            code="FILE_TOO_LARGE",
            message="Maximum file size is 10MB. Try a smaller PDF or split the document.",
        )

    if not pdf_bytes.startswith(b"%PDF"):
        raise ValidationError(
            code="INVALID_PDF",
            message="The file may be corrupted, password-protected, or not a valid PDF.",
        )

    try:
        doc = fitz.open(stream=pdf_bytes, filetype="pdf")
    except Exception as exc:
        raise ValidationError(
            code="INVALID_PDF",
            message="The file may be corrupted, password-protected, or not a valid PDF.",
        ) from exc

    if doc.is_encrypted or doc.needs_pass:
        doc.close()
        raise ValidationError(
            code="INVALID_PDF",
            message="The file may be corrupted, password-protected, or not a valid PDF.",
        )

    page_count = doc.page_count
    if page_count > MAX_PAGES:
        doc.close()
        raise ValidationError(
            code="PAGE_LIMIT_EXCEEDED",
            message="Maximum is 50 pages for this version. Try splitting your PDF first.",
        )

    total_chars = 0
    for page in doc:
        text = page.get_text("text").strip()
        total_chars += len(text)

    if page_count > 0 and (total_chars / page_count) < MIN_CHARS_PER_PAGE:
        doc.close()
        raise ValidationError(
            code="SCANNED_PDF_DETECTED",
            message="This tool only supports text-based PDFs. OCR is not available yet.",
        )

    return doc
