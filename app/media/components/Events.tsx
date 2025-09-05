"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

interface eventType {
  cards: { id: number; image: string; title: string }[];
}

const Events = ({ cards }: eventType) => {
  return (
    <div className="w-full h-full overflow-hidden py-10">
      <Swiper
        rewind={true}
        modules={[Pagination, Scrollbar, Autoplay]}
        grabCursor={true}
        spaceBetween={24}
        centeredSlides={true}
        roundLengths={true}
        slidesOffsetBefore={16}
        slidesOffsetAfter={16}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true, hide: true }}
        slidesPerView={"auto"}
        breakpoints={{
          640: {
            spaceBetween: 24,
            centeredSlides: false,
          },
          768: {
            spaceBetween: 28,
            centeredSlides: false,
          },
          1024: {
            spaceBetween: 32,
            centeredSlides: false,
          },
        }}
        className="mySwiper !pb-10"
      >
        <div className="!py-6 !gap-6 !px-4 ">
          {cards.map((card) => (
            <SwiperSlide
              key={card.id}
              className="group rounded-2xl !bg-white/90 backdrop-blur mx-auto shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5 hover:border-black/10 !w-[85%] sm:!w-[46%] md:!w-[31%] lg:!w-[23%] !h-[320px] sm:!h-[360px] overflow-hidden"
            >
              <div className="h-full flex flex-col">
                <div className="relative w-full h-40 sm:h-44 md:h-48 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 260px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="p-4">
                    <h3 className="text-base sm:text-lg text-background/90 font-semibold leading-snug line-clamp-2">
                      {card.title}
                    </h3>
                  </div>
                  {/* <div className="p-4 pt-0">
                    <button
                      aria-label="Read more about event"
                      className="inline-flex cursor-pointer items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-full bg-primary text-white transition-all duration-300 hover:brightness-105 active:scale-[0.98] md:text-sm font-medium text-xs"
                    >
                      <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
                        Read more
                      </span>
                      <FaArrowRightLong
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {/* Custom Pagination Styling */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative !important; /* move it into normal flow */
          bottom: 0 !important; /* remove absolute positioning */
          margin-top: 1rem; /* spacing from the slides */
          text-align: center;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
          background-color: var(
            --primary,
            #0ea5e9
          ) !important; /* fallback color */
          opacity: 0.35;
          transition: transform 200ms ease, opacity 200ms ease,
            background-color 200ms ease;
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
    </div>
  );
};

export default Events;
