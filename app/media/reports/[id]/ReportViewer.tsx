"use client";

import { useState } from "react";
import type { Report } from "@/lib/reports";

export default function ReportViewer({ report }: { report: Report }) {
  const [activePdf, setActivePdf] = useState(report.pdfs[0]);

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col items-center justify-center gap-2 mb-3">
        <h2 className="text-3xl font-semibold text-background/80 text-center mb-4">
          {report.title}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm bg-gray-100 p-2 rounded-xl">
          {report.pdfs.map((pdfOption) => (
            <button
              key={pdfOption.label}
              onClick={() => setActivePdf(pdfOption)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activePdf.label === pdfOption.label
                  ? "bg-black text-white shadow-md transform scale-[1.02]"
                  : "bg-transparent text-gray-700 hover:bg-gray-200"
              }`}
            >
              {pdfOption.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4 flex-col">
        <h3 className="text-xl font-medium text-background/80 text-center">
          {activePdf.label}
        </h3>
        <div className="flex items-center gap-2 text-sm mt-2">
          <a
            href={activePdf.pdfPath}
            download
            className="rounded border border-black/10 px-4 py-2 hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-black/30 text-background/80 transition-colors"
          >
            Download {activePdf.label}
          </a>
          <a
            href={activePdf.pdfPath}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-black/10 px-4 py-2 hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-black/30 text-background/80 transition-colors"
          >
            Open in New Tab
          </a>
        </div>
      </div>

      <div className="border border-black/10 rounded-xl overflow-hidden mt-4 shadow-sm">
        <object
          data={activePdf.pdfPath}
          type="application/pdf"
          className="w-full h-[80vh] bg-transparent"
          aria-label={`${activePdf.label} (PDF)`}
        >
          <div className="p-4 text-sm text-center bg-gray-50 flex flex-col items-center justify-center h-full">
            <p className="mb-2 text-gray-600">Your browser doesn&apos;t support viewing PDFs directly.</p>
            <a href={activePdf.pdfPath} className="text-blue-600 hover:underline font-medium px-4 py-2 border rounded border-blue-600 hover:bg-blue-50 transition-colors">
              Download the PDF instead
            </a>
          </div>
        </object>
      </div>
    </div>
  );
}
