import type { Metadata } from "next";

import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { SITE_URL } from "@/lib/constants";
import { privacyIntro, privacySections } from "@/lib/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy — PDF a MD | pdfamd.com",
  description:
    "Privacy Policy for PDF a MD (pdfamd.com). PDFs are processed in memory and not stored after conversion.",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="July 15, 2026"
      intro={privacyIntro}
      sections={privacySections}
    />
  );
}
