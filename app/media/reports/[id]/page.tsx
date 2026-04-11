import { notFound } from "next/navigation";
import { reports } from "@/lib/reports";
import ReportViewer from "./ReportViewer";

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
    <div className="px-4 py-8 max-w-[1200px] mx-auto">
      <ReportViewer report={report} />
    </div>
  );
}
