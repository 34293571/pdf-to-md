import type { Metadata } from "next";

import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { SITE_URL } from "@/lib/constants";
import { termsIntro, termsSections } from "@/lib/legal/terms";

export const metadata: Metadata = {
  title: "Terms of Service — PDF a MD | pdfamd.com",
  description:
    "Terms of Service for PDF a MD (pdfamd.com), a free personal PDF to Markdown converter.",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="July 15, 2026"
      intro={termsIntro}
      sections={termsSections}
    />
  );
}
