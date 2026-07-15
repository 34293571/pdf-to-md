"use client";

import { useCallback, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";

import { convertPdf, type ConvertMeta, type ErrorCode } from "@/lib/api";
import { MAX_BYTES } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n";

type ConverterState =
  | { status: "empty" }
  | { status: "loading"; fileName: string }
  | {
      status: "success";
      fileName: string;
      fileSize: number;
      markdown: string;
      meta: ConvertMeta;
    }
  | {
      status: "error";
      fileName?: string;
      code: ErrorCode;
      title: string;
      message: string;
    };

type PreviewTab = "preview" | "markdown";

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function baseName(filename: string): string {
  return filename.replace(/\.pdf$/i, "");
}

type ConverterProps = {
  dict: Dictionary;
};

export function Converter({ dict }: ConverterProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<ConverterState>({ status: "empty" });
  const [dragActive, setDragActive] = useState(false);
  const [tab, setTab] = useState<PreviewTab>("preview");

  const reset = useCallback(() => {
    setState({ status: "empty" });
    setTab("preview");
    if (inputRef.current) inputRef.current.value = "";
  }, []);

  const handleFile = useCallback(
    async (file: File) => {
      const isPdf =
        file.type === "application/pdf" ||
        file.name.toLowerCase().endsWith(".pdf");

      if (!isPdf) {
        setState({
          status: "error",
          fileName: file.name,
          code: "INVALID_PDF",
          title: dict.errors.INVALID_PDF.title,
          message: dict.converter.invalidType,
        });
        return;
      }

      if (file.size > MAX_BYTES) {
        setState({
          status: "error",
          fileName: file.name,
          code: "FILE_TOO_LARGE",
          title: dict.errors.FILE_TOO_LARGE.title,
          message: dict.converter.fileTooLargeClient,
        });
        return;
      }

      setState({ status: "loading", fileName: file.name });

      const result = await convertPdf(file);

      if (!result.ok) {
        const fallback = dict.errors[result.code];
        setState({
          status: "error",
          fileName: file.name,
          code: result.code,
          title: fallback.title,
          message: result.message || fallback.message,
        });
        return;
      }

      setState({
        status: "success",
        fileName: file.name,
        fileSize: file.size,
        markdown: result.markdown,
        meta: result.meta,
      });
      setTab("preview");
    },
    [dict],
  );

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) void handleFile(file);
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragActive(false);
    const file = event.dataTransfer.files?.[0];
    if (file) void handleFile(file);
  };

  const onDownload = () => {
    if (state.status !== "success") return;

    const blob = new Blob([state.markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${baseName(state.fileName)}.md`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full">
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf,.pdf"
        className="hidden"
        onChange={onInputChange}
      />

      {(state.status === "empty" || state.status === "loading") && (
        <div
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              inputRef.current?.click();
            }
          }}
          onClick={() => inputRef.current?.click()}
          onDragOver={(event) => {
            event.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={onDrop}
          className={`group motion-card cursor-pointer rounded-2xl border-2 border-dashed p-10 text-center ${
            dragActive
              ? "motion-card-drag border-accent bg-accent/5"
              : "border-border bg-surface/50 hover:border-primary/45 hover:bg-surface"
          }`}
        >
          {state.status === "loading" ? (
            <div className="flex flex-col items-center gap-4">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
              <p className="text-base font-medium text-text">{dict.hero.loading}</p>
              <p className="text-sm text-muted">{state.fileName}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary transition-transform duration-300 ease-out group-hover:scale-110 group-hover:bg-primary/15">
                PDF
              </div>
              <p className="text-lg font-medium text-text">
                {dragActive ? dict.converter.dragActive : dict.hero.uploadPrimary}
              </p>
              <p className="text-sm text-muted">{dict.hero.uploadSecondary}</p>
              <p className="mt-2 text-xs text-muted">{dict.hero.limits}</p>
            </div>
          )}
        </div>
      )}

      {state.status === "error" && (
        <div className="rounded-2xl border border-error/30 bg-error/5 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-error">{state.title}</h3>
              <p className="mt-2 text-sm text-text">{state.message}</p>
              {state.fileName && (
                <p className="mt-2 text-xs text-muted">{state.fileName}</p>
              )}
            </div>
            <button
              type="button"
              onClick={reset}
              className="motion-btn shrink-0 rounded-lg border border-border px-4 py-2 text-sm font-medium text-text hover:border-primary/30 hover:bg-surface"
            >
              {dict.converter.convertAnother}
            </button>
          </div>
        </div>
      )}

      {state.status === "success" && (
        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow duration-300 hover:shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
            <div className="text-sm text-muted">
              <span className="font-medium text-text">{state.fileName}</span>
              <span className="mx-2">·</span>
              {formatBytes(state.fileSize)}
              <span className="mx-2">·</span>
              {state.meta.pages} pages
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={onDownload}
                className="motion-btn rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent/90"
              >
                {dict.converter.download}
              </button>
              <button
                type="button"
                onClick={reset}
                className="motion-btn rounded-lg border border-border px-4 py-2 text-sm font-medium text-text hover:border-primary/30 hover:bg-bg"
              >
                {dict.converter.convertAnother}
              </button>
            </div>
          </div>

          <div className="flex border-b border-border">
            <button
              type="button"
              onClick={() => setTab("preview")}
              className={`motion-btn px-5 py-3 text-sm font-medium ${
                tab === "preview"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted hover:bg-primary/5 hover:text-primary"
              }`}
            >
              {dict.converter.tabPreview}
            </button>
            <button
              type="button"
              onClick={() => setTab("markdown")}
              className={`motion-btn px-5 py-3 text-sm font-medium ${
                tab === "markdown"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted hover:bg-primary/5 hover:text-primary"
              }`}
            >
              {dict.converter.tabMarkdown}
            </button>
          </div>

          <div className="max-h-[480px] overflow-auto p-5">
            {tab === "preview" ? (
              <article className="prose prose-slate max-w-none text-sm">
                <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
                  {state.markdown || "_No content extracted._"}
                </ReactMarkdown>
              </article>
            ) : (
              <pre className="whitespace-pre-wrap break-words font-mono text-xs text-text">
                {state.markdown || ""}
              </pre>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
