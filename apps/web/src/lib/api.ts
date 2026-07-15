import { CONVERT_TIMEOUT_MS } from "./constants";

export type ErrorCode =
  | "FILE_TOO_LARGE"
  | "PAGE_LIMIT_EXCEEDED"
  | "SCANNED_PDF_DETECTED"
  | "INVALID_PDF"
  | "CONVERSION_FAILED";

export type ConvertMeta = {
  pages: number;
  title: string | null;
  converter: string;
  version: string;
};

export type ConvertSuccess = {
  ok: true;
  markdown: string;
  meta: ConvertMeta;
};

export type ConvertFailure = {
  ok: false;
  code: ErrorCode;
  message: string;
  limits?: { maxBytes: number; maxPages: number };
};

export type ConvertResponse = ConvertSuccess | ConvertFailure;

function getApiBaseUrl(): string | null {
  const url = process.env.NEXT_PUBLIC_CONVERT_API_URL;
  if (!url) return null;
  return url.replace(/\/$/, "");
}

export async function convertPdf(file: File): Promise<ConvertResponse> {
  const apiBase = getApiBaseUrl();
  if (!apiBase) {
    return {
      ok: false,
      code: "CONVERSION_FAILED",
      message: "Conversion API is not configured.",
    };
  }

  const formData = new FormData();
  formData.append("file", file);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), CONVERT_TIMEOUT_MS);

  try {
    const response = await fetch(`${apiBase}/api/v1/convert`, {
      method: "POST",
      body: formData,
      signal: controller.signal,
    });

    const data = (await response.json()) as ConvertResponse;
    return data;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      return {
        ok: false,
        code: "CONVERSION_FAILED",
        message: "Request timed out. Please try again.",
      };
    }

    return {
      ok: false,
      code: "CONVERSION_FAILED",
      message: "Something went wrong. Please try again in a moment.",
    };
  } finally {
    clearTimeout(timeout);
  }
}
