import type { ErrorCode } from "@/lib/api";

export type Locale = "en" | "es";

export type FaqItem = {
  question: string;
  answer: string;
};

export type WhyItem = {
  title: string;
  body: string;
};

export type ErrorCopy = {
  title: string;
  message: string;
};

export type Dictionary = {
  locale: Locale;
  htmlLang: string;
  metadata: {
    title: string;
    description: string;
    canonicalPath: string;
  };
  header: {
    navHow: string;
    navFaq: string;
    navLimits: string;
    langSwitch: string;
    langOther: string;
    langOtherHref: string;
  };
  hero: {
    h1: string;
    subtitle: string;
    support: string;
    uploadPrimary: string;
    uploadSecondary: string;
    limits: string;
    loading: string;
  };
  converter: {
    tabPreview: string;
    tabMarkdown: string;
    download: string;
    convertAnother: string;
    dragActive: string;
    invalidType: string;
    fileTooLargeClient: string;
  };
  errors: Record<ErrorCode, ErrorCopy>;
  sections: {
    introTitle: string;
    introBody: string;
    howTitle: string;
    howSteps: string[];
    whyTitle: string;
    whyItems: WhyItem[];
    limitsTitle: string;
    limitsIntro: string;
    limitsSupportedTitle: string;
    limitsSupported: string[];
    limitsNotSupportedTitle: string;
    limitsNotSupported: string[];
    limitsFooter: string;
    faqTitle: string;
    faq: FaqItem[];
  };
  footer: {
    privacy: string;
    terms: string;
    operator: string;
    legalNote?: string;
  };
};
