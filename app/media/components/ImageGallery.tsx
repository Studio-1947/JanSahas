"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type ImageGalleryProps = {
  images: Readonly<GalleryImage[]>;
  className?: string;
};

export default function ImageGallery({ images, className }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Close on ESC and lock scroll while modal is open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight" && activeIndex !== null) {
        setActiveIndex((idx) =>
          idx === null ? null : (idx + 1) % images.length
        );
      }
      if (e.key === "ArrowLeft" && activeIndex !== null) {
        setActiveIndex((idx) =>
          idx === null ? null : (idx - 1 + images.length) % images.length
        );
      }
    };

    if (activeIndex !== null) {
      document.documentElement.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
      // Move focus to close button for accessibility
      queueMicrotask(() => closeBtnRef.current?.focus());
    } else {
      document.documentElement.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [activeIndex, images.length]);

  return (
    <div
      className={clsx(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {images.map((img, idx) => (
        <button
          key={img.src}
          type="button"
          className="group relative overflow-hidden rounded-xl ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/40 cursor-pointer shadow-xl"
          onClick={() => setActiveIndex(idx)}
          aria-label={`Open image ${idx + 1} of ${images.length}`}
          aria-haspopup="dialog"
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {img.caption ? (
            <span className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-xs text-white">
              {img.caption}
            </span>
          ) : null}
        </button>
      ))}

      {/* Lightbox modal */}
      {activeIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveIndex(null);
          }}
        >
          <div className="relative w-full max-w-5xl">
            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-0 top-0 inline-flex items-center justify-center rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-black shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40  z-50 pointer-events-auto cursor-pointer"
              aria-label="Close"
            >
              ✕ Close
            </button>

            {/* Prev/Next controls */}
            {/* <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((idx) =>
                  idx === null
                    ? null
                    : (idx - 1 + images.length) % images.length
                );
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-sm font-medium text-black shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
              aria-label="Previous"
            >
              ‹
            </button> */}
            {/* <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((idx) =>
                  idx === null ? null : (idx + 1) % images.length
                );
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-sm font-medium text-black shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
              aria-label="Next"
            >
              ›
            </button> */}

            {/* Animated image */}
            <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                key={images[activeIndex].src}
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                priority
                sizes="(max-width: 640px) 100vw, 80vw"
                className="object-contain will-change-transform animate-[zoomIn_180ms_ease-out]"
              />
            </div>
          </div>

          {/* Simple keyframes for pop/zoom */}
          <style jsx>{`
            @keyframes zoomIn {
              from {
                transform: scale(0.96);
                opacity: 0.6;
              }
              to {
                transform: scale(1);
                opacity: 1;
              }
            }
          `}</style>
        </div>
      ) : null}
    </div>
  );
}
