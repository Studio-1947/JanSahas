// components/BackButton.tsx
"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-6 ml-4 px-4 py-2 bg-background/80 text-white rounded-lg hover:bg-background  *:
      inline-flex cursor-pointer items-center gap-2 md:px-5  md:py-3  transition-all duration-300 hover:brightness-105 active:scale-[0.98] md:text-sm font-medium text-xs
      
      "
    >
      <FaArrowLeftLong
        size={15}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
      <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
        Back
      </span>
    </button>
  );
}
