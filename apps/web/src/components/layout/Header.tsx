import Link from "next/link";

import type { Dictionary } from "@/lib/i18n";

type HeaderProps = {
  dict: Dictionary;
};

export function Header({ dict }: HeaderProps) {
  const howHref =
    dict.locale === "es" ? "/es#como-funciona" : "/#how-it-works";
  const faqHref = dict.locale === "es" ? "/es#faq" : "/#faq";
  const limitsHref = dict.locale === "es" ? "/es#limites" : "/#limits";

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href={dict.metadata.canonicalPath} className="text-lg font-bold text-primary transition-opacity hover:opacity-80">
          PDF a MD
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted sm:flex">
          <a href={howHref} className="motion-link hover:text-primary">
            {dict.header.navHow}
          </a>
          <a href={faqHref} className="motion-link hover:text-primary">
            {dict.header.navFaq}
          </a>
          <a href={limitsHref} className="motion-link hover:text-primary">
            {dict.header.navLimits}
          </a>
        </nav>

        <div className="flex items-center gap-2 text-sm">
          <span className="rounded-md bg-primary/10 px-2 py-1 font-medium text-primary">
            {dict.header.langSwitch}
          </span>
          <Link
            href={dict.header.langOtherHref}
            className="motion-link text-muted hover:text-primary"
          >
            {dict.header.langOther}
          </Link>
        </div>
      </div>
    </header>
  );
}
