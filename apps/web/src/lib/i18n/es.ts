import type { Dictionary } from "./types";

export const es: Dictionary = {
  locale: "es",
  htmlLang: "es",
  metadata: {
    title: "PDF a MD — Convertidor gratuito de PDF a Markdown | pdfamd.com",
    description:
      "Convierte PDF a Markdown (MD) gratis en pdfamd.com. Sube, previsualiza y descarga archivos .md. Solo PDFs con texto — sin registro.",
    canonicalPath: "/es",
  },
  header: {
    navHow: "Cómo funciona",
    navFaq: "Preguntas frecuentes",
    navLimits: "Límites",
    langSwitch: "ES",
    langOther: "English",
    langOtherHref: "/",
  },
  hero: {
    h1: "PDF a MD",
    subtitle: "Convierte PDF a Markdown online — Gratis",
    support:
      "PDFs con texto seleccionable · Vista previa antes de descargar · Sin registro",
    uploadPrimary: "Arrastra tu PDF aquí o haz clic para subir",
    uploadSecondary: "Conversión gratuita de pdf a md en segundos",
    limits:
      "Máx. 10 MB · Hasta 50 páginas · No compatible con PDFs escaneados",
    loading:
      "Convirtiendo tu PDF… La primera solicitud puede tardar hasta 30 segundos.",
  },
  converter: {
    tabPreview: "Vista previa",
    tabMarkdown: "Markdown",
    download: "Descargar .md",
    convertAnother: "Convertir otro archivo",
    dragActive: "Suelta para subir",
    invalidType: "Por favor sube un archivo PDF.",
    fileTooLargeClient: "El tamaño máximo es 10 MB.",
  },
  errors: {
    FILE_TOO_LARGE: {
      title: "Archivo demasiado grande",
      message:
        "El tamaño máximo es 10 MB. Prueba con un PDF más pequeño o divide el documento.",
    },
    PAGE_LIMIT_EXCEEDED: {
      title: "Demasiadas páginas",
      message:
        "El máximo es 50 páginas en esta versión. Intenta dividir el PDF primero.",
    },
    SCANNED_PDF_DETECTED: {
      title: "PDF escaneado detectado",
      message:
        "Esta herramienta solo admite PDFs con texto. OCR aún no está disponible.",
    },
    INVALID_PDF: {
      title: "No se puede leer el PDF",
      message:
        "El archivo puede estar dañado, protegido con contraseña o no ser un PDF válido.",
    },
    CONVERSION_FAILED: {
      title: "Error en la conversión",
      message: "Algo salió mal. Por favor, inténtalo de nuevo en un momento.",
    },
  },
  sections: {
    introTitle: "Convertidor gratuito de PDF a MD",
    introBody:
      "PDF a MD es una herramienta online gratuita para convertir PDF a Markdown. Si buscas pdf a md, pdf a markdown o convertir pdf a md, estás en el lugar correcto: sube tu archivo en pdfamd.com, previsualiza el resultado y descarga tu archivo .md para Obsidian, Notion, GitHub o cualquier editor Markdown.",
    howTitle: "Cómo convertir PDF a Markdown",
    howSteps: [
      "Subir — Elige un PDF con texto (máx. 10 MB, hasta 50 páginas). Arrastra y suelta o haz clic para buscar.",
      "Previsualizar — Convertimos tu PDF a Markdown. Revisa la vista previa o el código Markdown antes de descargar.",
      "Descargar — Haz clic en Descargar .md para guardar tu archivo. ¿Otra conversión? Pulsa Convertir otro archivo.",
    ],
    whyTitle: "¿Por qué usar PDF a MD?",
    whyItems: [
      {
        title: "Flujo rápido de pdf a md",
        body: "Subir, previsualizar, descargar — tres pasos, sin fricción.",
      },
      {
        title: "Vista previa antes de descargar",
        body: "Ve exactamente cómo queda tu Markdown antes de guardarlo.",
      },
      {
        title: "Privacidad primero",
        body: "Tu PDF se procesa en memoria y no se almacena después de la solicitud.",
      },
      {
        title: "Hecho para PDFs con texto",
        body: "Optimizado para documentos con texto seleccionable — informes, exportaciones y documentación técnica.",
      },
    ],
    limitsTitle: "Límites y PDFs compatibles",
    limitsIntro:
      "PDF a MD funciona mejor con PDFs basados en texto — archivos en los que puedes seleccionar y copiar texto en un lector PDF.",
    limitsSupportedTitle: "Compatible",
    limitsSupported: [
      "PDFs con texto seleccionable",
      "Documentos de hasta 10 MB y 50 páginas",
      "Archivos PDF estándar sin cifrado",
    ],
    limitsNotSupportedTitle: "No compatible (MVP)",
    limitsNotSupported: [
      "Documentos escaneados o PDFs solo con imágenes",
      "PDFs protegidos con contraseña o cifrados",
      "OCR (podría considerarse en el futuro)",
    ],
    limitsFooter:
      "Si la subida falla, revisa el mensaje de error — suele indicar que el archivo supera los límites o es un PDF escaneado.",
    faqTitle: "Preguntas frecuentes",
    faq: [
      {
        question: '¿Qué significa "pdf a md"?',
        answer:
          'Significa convertir un archivo PDF a Markdown (.md). "PDF a MD" es nuestra marca; también se busca como pdf a markdown o convertir pdf a md en español.',
      },
      {
        question: "¿PDF a MD es gratis?",
        answer: "Sí. pdfamd.com es gratuito y no requiere registro.",
      },
      {
        question: '¿En qué se diferencia de "pdf to md"?',
        answer:
          'Es lo mismo. "PDF to md" es la forma en inglés; pdf a md es la forma habitual en español e italiano. Ambos describen la conversión de PDF a Markdown.',
      },
      {
        question: "¿Funciona con PDFs escaneados?",
        answer:
          "No. Esta versión solo admite PDFs que ya contienen texto extraíble. Los documentos escaneados necesitan OCR, que aún no ofrecemos.",
      },
      {
        question: "¿Cuál es el tamaño máximo y el número de páginas?",
        answer:
          "10 MB por archivo y hasta 50 páginas. Estos límites mantienen la conversión rápida y estable.",
      },
      {
        question: "¿Guardan mi PDF en el servidor?",
        answer:
          "No. Los archivos se procesan en memoria para la conversión y no se almacenan de forma persistente después de la solicitud.",
      },
      {
        question: "¿Por qué la primera conversión a veces es lenta?",
        answer:
          "Nuestro servicio de conversión puede necesitar unos segundos para activarse tras un período de inactividad. Las solicitudes siguientes suelen ser más rápidas.",
      },
      {
        question: "¿Qué tipo de Markdown generan?",
        answer:
          "Markdown compatible con la mayoría de editores: títulos, párrafos y estructura básica del texto del PDF.",
      },
      {
        question: "¿Puedo usar el resultado en Obsidian, Notion o VS Code?",
        answer:
          "Sí. Descarga el archivo .md y ábrelo en cualquier aplicación compatible con Markdown.",
      },
      {
        question: "¿Necesito crear una cuenta?",
        answer:
          "No. Sube tu PDF, previsualiza y descarga directamente desde el navegador.",
      },
    ],
  },
  footer: {
    privacy: "Privacy",
    terms: "Terms",
    operator: "Operado por un desarrollador individual.",
    legalNote: "Política de privacidad y términos disponibles en inglés.",
  },
};
