import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getDictionary } from "@/lib/i18n";

type LegalSection = {
  title: string;
  paragraphs: string[];
  list?: string[];
};

type LegalPageProps = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPageLayout({
  title,
  lastUpdated,
  intro,
  sections,
}: LegalPageProps) {
  const dict = getDictionary("en");

  return (
    <>
      <Header dict={dict} />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <h1 className="text-3xl font-bold text-primary">{title}</h1>
          <p className="mt-2 text-sm text-muted">Last updated: {lastUpdated}</p>
          <p className="mt-6 leading-7 text-text">{intro}</p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-text">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 leading-7 text-text">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-text">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <p className="mt-10 text-sm text-muted">
            Questions? Email{" "}
            <a href="mailto:hello@pdfamd.com" className="text-primary hover:underline">
              hello@pdfamd.com
            </a>
            . See also{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms
            </Link>
            .
          </p>
        </article>
      </main>
      <Footer dict={dict} />
    </>
  );
}
