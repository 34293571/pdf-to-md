import os

MAX_BYTES = int(os.getenv("MAX_BYTES", "10485760"))
MAX_PAGES = int(os.getenv("MAX_PAGES", "50"))
MIN_CHARS_PER_PAGE = int(os.getenv("MIN_CHARS_PER_PAGE", "50"))
CONVERTER_VERSION = os.getenv("CONVERTER_VERSION", "0.1.0")

ALLOWED_ORIGINS = [
    origin.strip()
    for origin in os.getenv(
        "ALLOWED_ORIGINS",
        "http://localhost:3000,https://pdfamd.com",
    ).split(",")
    if origin.strip()
]
