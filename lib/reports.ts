export type Report = {
  id: string;
  title: string;
  yearLabel: string;
  pdfPath: string;
  coverImage: string; // NEW
};

export const reports: Report[] = [
  {
    id: "2023-24",
    title: "Annual Report 2023–24",
    yearLabel: "FY 2023–24",
    pdfPath: "/reports/Report2023-24.pdf",
    coverImage: "/media/gallery/1/IMG_20221217_132324.webp", // add to /public/reports/
  },
  {
    id: "2024-25",
    title: "Annual Report 2024–25",
    yearLabel: "FY 2024–25",
    pdfPath: "/reports/Report2024-25.pdf",
    coverImage: "/getInvolved/img1.webp",
  },
];
