import Link from "next/link";
import Image from "next/image";
import type { Report } from "@/lib/reports";

export default function ReportCard({ report }: { report: Report }) {
  return (
    <Link
      href={`/media/reports/${report.id}`}
      className="relative block rounded-xl overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
    >
      {/* Background image with next/image */}
      <div className="absolute inset-0">
        <Image
          src={report.coverImage ?? "/getInvolved/img1.webp"}
          alt={report.title}
          fill // makes it cover the container
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw" // full width on small, half width on md+
          priority // you can remove this if not above the fold
        />
        <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors" />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex h-48 sm:h-56 lg:h-64 flex-col justify-end p-4 text-white">
        <div className="text-sm opacity-80">{report.yearLabel}</div>
        <h3 className="text-xl font-semibold">{report.title}</h3>
        <span className="text-sm mt-1 underline underline-offset-4">
          View report
        </span>
      </div>
    </Link>
  );
}
