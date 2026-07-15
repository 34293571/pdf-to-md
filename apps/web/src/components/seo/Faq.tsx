import type { Dictionary } from "@/lib/i18n";

type FaqProps = {
  dict: Dictionary;
};

export function Faq({ dict }: FaqProps) {
  return (
    <section id="faq" className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-primary">{dict.sections.faqTitle}</h2>
      <div className="mt-6 overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
        {dict.sections.faq.map((item) => (
          <details key={item.question} className="faq-item group border-b border-border last:border-b-0">
            <summary className="cursor-pointer list-none px-5 py-4 font-medium text-text marker:content-none transition-colors duration-200 hover:text-primary [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {item.question}
                <span className="faq-chevron flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/8 text-muted group-hover:bg-primary/12 group-hover:text-primary">
                  +
                </span>
              </span>
            </summary>
            <p className="px-5 pb-4 text-sm leading-6 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
