import type { Dictionary } from "./types";

export const en: Dictionary = {
  locale: "en",
  htmlLang: "en",
  metadata: {
    title: "PDF a MD — Free PDF to Markdown Converter | pdfamd.com",
    description:
      "Convert PDF to Markdown (MD) online at pdfamd.com. Upload, preview, and download .md files free. Text-based PDFs only — no signup required.",
    canonicalPath: "/",
  },
  header: {
    navHow: "How it works",
    navFaq: "FAQ",
    navLimits: "Limits",
    langSwitch: "EN",
    langOther: "Español",
    langOtherHref: "/es",
  },
  hero: {
    h1: "PDF a MD",
    subtitle: "Convert PDF to Markdown Online — Free",
    support: "Text-based PDFs · Preview before download · No signup",
    uploadPrimary: "Drop your PDF here or click to upload",
    uploadSecondary: "Free pdf to md conversion in seconds",
    limits: "Max 10MB · Up to 50 pages · Scanned PDFs not supported",
    loading:
      "Converting your PDF… This may take up to 30 seconds on the first request.",
  },
  converter: {
    tabPreview: "Preview",
    tabMarkdown: "Markdown",
    download: "Download .md",
    convertAnother: "Convert another file",
    dragActive: "Drop to upload",
    invalidType: "Please upload a PDF file.",
    fileTooLargeClient: "Maximum file size is 10MB.",
  },
  errors: {
    FILE_TOO_LARGE: {
      title: "File too large",
      message:
        "Maximum file size is 10MB. Try a smaller PDF or split the document.",
    },
    PAGE_LIMIT_EXCEEDED: {
      title: "Too many pages",
      message:
        "Maximum is 50 pages for this version. Try splitting your PDF first.",
    },
    SCANNED_PDF_DETECTED: {
      title: "Scanned PDF detected",
      message:
        "This tool only supports text-based PDFs. OCR is not available yet.",
    },
    INVALID_PDF: {
      title: "Unable to read PDF",
      message:
        "The file may be corrupted, password-protected, or not a valid PDF.",
    },
    CONVERSION_FAILED: {
      title: "Conversion failed",
      message: "Something went wrong. Please try again in a moment.",
    },
  },
  sections: {
    introTitle: "Free PDF to MD Converter",
    introBody:
      "PDF a MD is a free online tool to convert PDF to Markdown. Whether you call it pdf a md or pdf to md, the goal is the same: turn your document into clean, editable .md text you can use in Obsidian, Notion, GitHub, or any Markdown editor. Upload your file at pdfamd.com, preview the result, and download — no account, no installation.",
    howTitle: "How to Convert PDF to Markdown",
    howSteps: [
      "Upload — Choose a text-based PDF (max 10MB, up to 50 pages). Drag and drop or click to browse.",
      "Preview — We convert your PDF to Markdown in the browser. Check the preview or view the raw Markdown source before downloading.",
      "Download — Click Download .md to save your file. Need another conversion? Hit Convert another file and start over.",
    ],
    whyTitle: "Why Use PDF a MD?",
    whyItems: [
      {
        title: "Fast pdf to md workflow",
        body: "Upload, preview, download — three steps, no friction.",
      },
      {
        title: "Preview before you download",
        body: "See exactly what your Markdown looks like, so you don't waste time on bad conversions.",
      },
      {
        title: "Privacy-first",
        body: "Your PDF is processed in memory and not stored on our servers after the request completes.",
      },
      {
        title: "Built for text PDFs",
        body: "Optimized for documents with selectable text — reports, exports, ebooks, and technical docs.",
      },
    ],
    limitsTitle: "Limits & Supported PDFs",
    limitsIntro:
      "PDF a MD works best with text-based PDFs — files where you can select and copy text in a PDF reader.",
    limitsSupportedTitle: "Supported",
    limitsSupported: [
      "PDFs with selectable text",
      "Documents up to 10MB and 50 pages",
      "Standard, unencrypted PDF files",
    ],
    limitsNotSupportedTitle: "Not supported (MVP)",
    limitsNotSupported: [
      "Scanned documents and image-only PDFs",
      "Password-protected or encrypted PDFs",
      "OCR (may be considered later)",
    ],
    limitsFooter:
      "If upload fails, check the error message — it usually means the file exceeds limits or is a scanned PDF.",
    faqTitle: "FAQ",
    faq: [
      {
        question: 'What does "pdf a md" mean?',
        answer:
          'It means converting a PDF file to Markdown (.md). "PDF a MD" is how many users search for this — similar to "pdf to md" or "pdf to markdown" in English.',
      },
      {
        question: "Is PDF a MD free?",
        answer: "Yes. pdfamd.com is free to use with no signup required.",
      },
      {
        question: 'How is this different from "pdf to md"?',
        answer:
          "Same thing. PDF a MD is our brand name; pdf to md describes the conversion. Both refer to turning PDF content into Markdown format.",
      },
      {
        question: "Does it work with scanned PDFs?",
        answer:
          "No. This version only supports PDFs that already contain extractable text. Scanned pages need OCR, which we don't offer yet.",
      },
      {
        question: "What's the maximum file size and page count?",
        answer:
          "10MB per file and up to 50 pages. These limits keep conversions fast and reliable.",
      },
      {
        question: "Is my PDF stored on your server?",
        answer:
          "No. Files are processed in memory for conversion and are not saved to disk or cloud storage afterward.",
      },
      {
        question: "Why is the first conversion sometimes slow?",
        answer:
          "Our conversion service may need a moment to wake up after idle time. Later requests in the same session are usually faster.",
      },
      {
        question: "What Markdown flavor do you output?",
        answer:
          "We aim for common Markdown compatible with most editors — headings, paragraphs, and basic structure from your PDF text.",
      },
      {
        question: "Can I use the output in Obsidian / Notion / VS Code?",
        answer:
          "Yes. Download the .md file and open it in any Markdown-compatible app.",
      },
    ],
  },
  footer: {
    privacy: "Privacy",
    terms: "Terms",
    operator: "Operated by an individual developer.",
  },
};
