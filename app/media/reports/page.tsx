import ReportCard from "@/app/components/ReportCard";
import { reports } from "@/lib/reports";

export default function ReportsPage() {
  return (
    <div className="w-full px-4 py-6">
      {/* Responsive grid: 1 col on small, 2 cols from md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="annualReports">
        {reports.map((r) => (
          <ReportCard key={r.id} report={r} />
        ))}
      </div>
    </div>
  );
}
