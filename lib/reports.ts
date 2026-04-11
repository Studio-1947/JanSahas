export type PDFOption = {
  label: string;
  pdfPath: string;
};

export type Report = {
  id: string;
  title: string;
  yearLabel: string;
  pdfs: PDFOption[];
  coverImage: string;
};

export const reports: Report[] = [
  {
    id: "2023-24",
    title: "Report 2023-2024",
    yearLabel: "FY 2023–24",
    pdfs: [
      { label: "Annual Report", pdfPath: "/reports/Annual Report 2023-24.pdf" },
      { label: "Consolidated Audit Report", pdfPath: "/reports/Consolidated Audit Report 2023-2024.pdf" },
      { label: "FCRA Audit Report", pdfPath: "/reports/FCRA Audit Report 2023-2024.pdf" }
    ],
    coverImage: "/media/gallery/1/IMG_20241112_123217.webp",
  },
  {
    id: "2024-25",
    title: "Report 2024-2025",
    yearLabel: "FY 2024–25",
    pdfs: [
      { label: "Annual Report", pdfPath: "/reports/Annual Report 2024-2025.pdf" },
      { label: "Consolidated Audit Report", pdfPath: "/reports/Consolidated Audit Report 2024-25.PDF" },
      { label: "FCRA Audit Report", pdfPath: "/reports/FCRA Audit Report 2024-2025.PDF" }
    ],
    coverImage: "/getInvolved/img1.webp",
  },
];
