import { notFound } from "next/navigation";
import { reports } from "@/lib/reports";

// Optional: prebuild static pages for all ids (good for prod, can skip in dev)
export function generateStaticParams() {
  return reports.map((r) => ({ id: r.id }));
}

// Normalize ids like "23%2F24" → "23-24" (guard against accidental slashes)
function normalizeId(input: string) {
  return decodeURIComponent(input).replace(/\//g, "-").toLowerCase();
}

type Props = {
  params: Promise<{ id: string }>; // 👈 Promise form
};

export default async function ReportDetail({ params }: Props) {
  const { id: rawId } = await params; // 👈 await params
  const id = normalizeId(rawId);

  const report = reports.find((r) => r.id.toLowerCase() === id);
  if (!report) return notFound();

  return (
    <div className="px-4 py-6">
      <div className="flex items-center justify-center gap-2 mb-3 flex-col">
        <h2 className="text-3xl font-semibold text-background/80 text-center">
          {report.title}
        </h2>
        <div className="flex items-center gap-2 text-sm">
          <a
            href={report.pdfPath}
            download
            className="rounded border border-black/10 px-3 py-1.5 hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-black/30 text-background/80"
          >
            Download
          </a>
          <a
            href={report.pdfPath}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-black/10 px-3 py-1.5 hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-black/30 text-background/80"
          >
            Open
          </a>
        </div>
      </div>

      {/* Inline PDF */}
      <div className="border border-black/10 rounded-xl overflow-hidden">
        <object
          data={report.pdfPath}
          type="application/pdf"
          className="w-full h-[80vh] bg-transparent"
          aria-label={`${report.title} (PDF)`}
        >
          <div className="p-3 text-sm">
            Your browser can’t display PDFs inline.{" "}
            <a href={report.pdfPath} className="underline">
              Download the PDF
            </a>
            .
          </div>
        </object>
      </div>
    </div>
  );
}
