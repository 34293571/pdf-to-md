import Link from "next/link";

import type { Dictionary } from "@/lib/i18n";
import { SITE_URL } from "@/lib/constants";

type FooterProps = {
  dict: Dictionary;
};

export function Footer({ dict }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} PDF a MD ·{" "}
            <a href={SITE_URL} className="hover:text-primary">
              pdfamd.com
            </a>
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-primary">
              {dict.footer.privacy}
            </Link>
            <Link href="/terms" className="hover:text-primary">
              {dict.footer.terms}
            </Link>
            <Link
              href={dict.header.langOtherHref}
              className="hover:text-primary"
            >
              {dict.header.langOther}
            </Link>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted">{dict.footer.operator}</p>
        {dict.footer.legalNote && (
          <p className="mt-1 text-xs text-muted">{dict.footer.legalNote}</p>
        )}
      </div>
    </footer>
  );
}
