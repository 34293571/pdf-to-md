import fitz

from app.config import CONVERTER_VERSION


def convert_pdf_to_markdown(doc: fitz.Document) -> tuple[str, dict]:
    parts: list[str] = []

    for index, page in enumerate(doc):
        text = page.get_text("text").strip()
        if not text:
            continue

        if doc.page_count > 1:
            parts.append(f"## Page {index + 1}\n\n{text}")
        else:
            parts.append(text)

    markdown = "\n\n---\n\n".join(parts) if parts else ""

    metadata = doc.metadata or {}
    title = (metadata.get("title") or "").strip()

    if title and not markdown.startswith("#"):
        markdown = f"# {title}\n\n{markdown}" if markdown else f"# {title}"

    meta = {
        "pages": doc.page_count,
        "title": title or None,
        "converter": "pymupdf",
        "version": CONVERTER_VERSION,
    }

    return markdown, meta
