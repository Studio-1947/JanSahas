"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

interface EventCard {
  id: number | string;
  image: string;
  title: string;
  subtitle?: string;
}

export default function EventsSwiper({ cards }: { cards: EventCard[] }) {
  return (
    <section className="w-full px-4 py-6 bg-transparent">
      <Swiper
        modules={[Pagination, Autoplay, A11y, Keyboard]}
        slidesPerView={1}
        spaceBetween={16}
        loop={cards.length > 1}
        centeredSlides
        roundLengths
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        className="!pb-8 !bg-transparent"
        aria-label="Events carousel"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} className="!h-auto !bg-transparent">
            <article className="relative isolate rounded-xl border border-black/10 overflow-hidden bg-white shadow-sm">
              {/* Media (carry the rounding + clipping here) */}
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="100vw"
                  className="object-cover will-change-transform"
                  priority={false}
                />
                {/* Overlay must match the same rounding */}
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 leading-snug line-clamp-2">
                  {card.title}
                </h3>
                {card.subtitle && (
                  <p className="mt-1 text-xs text-gray-600 line-clamp-1">{card.subtitle}</p>
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination styling */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative !important;
          bottom: 0 !important;
          margin-top: 0.75rem;
          text-align: center;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
          background-color: var(--primary, #0ea5e9) !important;
          opacity: 0.35;
          transition: transform 200ms ease, opacity 200ms ease, background-color 200ms ease;
          transform: scale(0.9);
          border: 2px solid rgba(255, 255, 255, 0.7);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.15);
          background-color: var(--primary, #0284c7) !important;
        }
      `}</style>
    </section>
  );
}
