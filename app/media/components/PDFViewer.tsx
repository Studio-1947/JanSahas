"use client";

import { ComponentProps } from "react";
import clsx from "clsx";

export type PdfViewerProps = {
  src: string;
  className?: string;
} & Omit<ComponentProps<"iframe">, "src" | "className">;

/**
 * Accessible, responsive PDF viewer wrapper.
 * Uses an <iframe> so users can zoom/download with browser controls.
 */
export default function PdfViewer({ src, className, ...rest }: PdfViewerProps) {
  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden rounded-xl ring-1 ring-black/5",
        className
      )}
    >
      <iframe
        title="PDF document"
        src={`${src}#view=FitH`}
        className="h-full w-full"
        loading="lazy"
        {...rest}
      />
      <noscript>
        <p>
          PDF preview requires JavaScript. <a href={src}>Download the PDF</a>.
        </p>
      </noscript>
    </div>
  );
}
