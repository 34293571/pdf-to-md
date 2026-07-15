import type { Metadata } from "next";

import { HomePage } from "@/components/pages/HomePage";
import { SITE_URL } from "@/lib/constants";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.metadata.title,
  description: dict.metadata.description,
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      en: `${SITE_URL}/`,
      es: `${SITE_URL}/es`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: "PDF a MD — Free PDF to Markdown Converter",
    description: dict.metadata.description,
    url: `${SITE_URL}/`,
    siteName: "PDF a MD",
    type: "website",
  },
};

export default function Page() {
  return <HomePage dict={dict} />;
}
