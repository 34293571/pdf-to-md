import type { Dictionary } from "@/lib/i18n";

type ContentSectionsProps = {
  dict: Dictionary;
};

export function ContentSections({ dict }: ContentSectionsProps) {
  const howId = dict.locale === "es" ? "como-funciona" : "how-it-works";
  const limitsId = dict.locale === "es" ? "limites" : "limits";

  return (
    <div className="space-y-16">
      <section>
        <h2 className="text-2xl font-bold text-primary">{dict.sections.introTitle}</h2>
        <p className="mt-4 leading-7 text-text">{dict.sections.introBody}</p>
      </section>

      <section id={howId}>
        <h2 className="text-2xl font-bold text-primary">{dict.sections.howTitle}</h2>
        <ol className="mt-6 space-y-4">
          {dict.sections.howSteps.map((step, index) => (
            <li key={step} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="pt-1 leading-7 text-text">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-primary">{dict.sections.whyTitle}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {dict.sections.whyItems.map((item) => (
            <div
              key={item.title}
              className="motion-card rounded-xl border border-border bg-surface p-5 hover:border-primary/20"
            >
              <h3 className="font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id={limitsId}>
        <h2 className="text-2xl font-bold text-primary">{dict.sections.limitsTitle}</h2>
        <p className="mt-4 leading-7 text-text">{dict.sections.limitsIntro}</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="motion-card rounded-xl border border-border bg-surface p-5 hover:border-success/30">
            <h3 className="font-semibold text-success">
              {dict.sections.limitsSupportedTitle}
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-text">
              {dict.sections.limitsSupported.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="motion-card rounded-xl border border-border bg-surface p-5 hover:border-error/25">
            <h3 className="font-semibold text-error">
              {dict.sections.limitsNotSupportedTitle}
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-text">
              {dict.sections.limitsNotSupported.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted">{dict.sections.limitsFooter}</p>
      </section>
    </div>
  );
}
