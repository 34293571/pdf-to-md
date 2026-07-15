import { Converter } from "@/components/converter/Converter";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SetHtmlLang } from "@/components/layout/SetHtmlLang";
import { ContentSections } from "@/components/seo/ContentSections";
import { Faq } from "@/components/seo/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Dictionary } from "@/lib/i18n";

type HomePageProps = {
  dict: Dictionary;
};

export function HomePage({ dict }: HomePageProps) {
  return (
    <>
      <SetHtmlLang locale={dict.locale} />
      <JsonLd dict={dict} />
      <Header dict={dict} />
      <main className="flex-1">
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                {dict.hero.h1}
              </h1>
              <p className="mt-4 text-xl text-text">{dict.hero.subtitle}</p>
              <p className="mt-3 text-sm text-muted">{dict.hero.support}</p>
            </div>

            <div className="mx-auto mt-10 max-w-3xl">
              <Converter dict={dict} />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <ContentSections dict={dict} />
          <div className="mt-16">
            <Faq dict={dict} />
          </div>
        </section>
      </main>
      <Footer dict={dict} />
    </>
  );
}
