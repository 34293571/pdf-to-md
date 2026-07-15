import type { Dictionary } from "@/lib/i18n";
import { SITE_URL } from "@/lib/constants";

type JsonLdProps = {
  dict: Dictionary;
};

export function JsonLd({ dict }: JsonLdProps) {
  const canonical = `${SITE_URL}${dict.metadata.canonicalPath}`;

  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PDF a MD",
    url: canonical,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: dict.metadata.description,
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.sections.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name:
      dict.locale === "es"
        ? "Cómo convertir PDF a Markdown con PDF a MD"
        : "How to Convert PDF to Markdown with PDF a MD",
    step: dict.sections.howSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: step,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
      />
    </>
  );
}
