"use client";

import Link from "next/link";
import Image from "next/image";
import { FiImage, FiFileText } from "react-icons/fi";

type Props = {
  className?: string;
  cover?: string;      // /public path for the card cover
  title?: string;
  subtitle?: string;
  yearLabel?: string;
};

export default function MentalHealthCard({
  className = "",
  cover = "/media/mental-health/emotional-wheel.png",
  title = "Mental Health Assets",
  subtitle = "Tap to view gallery followed by the PDF manual",
  yearLabel = "2024–25",
}: Props) {
  return (
    <Link
      href="/media/mental-health"
      aria-label={`${title} — open gallery & PDF`}
      className={[
        "relative block w-full overflow-hidden rounded-2xl group",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40",
        className,
      ].join(" ")}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={cover}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 group-hover:from-black/60 group-hover:via-black/40 transition-colors" />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex h-56 sm:h-64 lg:h-72 xl:h-80 flex-col justify-end p-5 text-white">
        <div className="text-xs sm:text-sm opacity-85">{yearLabel}</div>
        <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
        <p className="mt-1 text-sm sm:text-base text-white/90">{subtitle}</p>

        <div className="mt-3 flex items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
            <FiImage className="h-4 w-4" aria-hidden /> 3 images
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
            <FiFileText className="h-4 w-4" aria-hidden /> Training Manual (PDF)
          </span>
          <span className="ml-auto underline underline-offset-4">Open →</span>
        </div>
      </div>
    </Link>
  );
}
