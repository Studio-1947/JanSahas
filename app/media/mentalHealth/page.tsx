import Image from "next/image";
import { ASSETS } from "./manifest";
import MentalHealthCard from "@/app/components/MentalHealthCard";

export default function MentalHealthPage() {
  const pack = Object.values(ASSETS)[0];
  if (!pack) return null;

  const { title, subtitle, images, pdf } = pack;

  return (
    <div className="w-full px-4 py-6">
   <MentalHealthCard
        // asset={{
        //   slug: "mental-health-pack",
        //   title,
        //   subtitle,
        //   yearLabel: "2024–25",
        //   coverImage: images[0].src,
        //   imageCount: images.length,
        //   pdfLabel: pdf.title || "Manual (PDF)",
        //   href: ``,
        // }}
      />
    </div>
  );
}
