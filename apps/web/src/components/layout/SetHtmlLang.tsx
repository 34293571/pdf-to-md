"use client";

import { useEffect } from "react";

import type { Locale } from "@/lib/i18n";

export function SetHtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale === "es" ? "es" : "en";
  }, [locale]);

  return null;
}
