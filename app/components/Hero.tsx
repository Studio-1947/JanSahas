import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative h-[500px] md:h-[500px] flex items-center justify-center  lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero/hero_image.webp"
        alt="Jan Sahas - Social Empowerment"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center  flex flex-col lg:flex-row items-center  justify-center gap-8">
        {/* Left Text Section */}
        <div className="flex-1 text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text">
            Jan Sahas
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold mt-2">
            Social Empowerment Society
          </h2>
          <p className="mt-6 text-sm sm:text-base lg:text-lg max-w-xl opacity-90">
            Jan Sahas Social Empowerment Society is a not-for-profit
            organisation working in Malwa and Nimar regions in Central India
            with a focus on increasing access to mental health support for
            marginalised communities.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-6 flex-wrap justify-center ">
            <Link href="/aboutUs">
              <button className="px-8 py-3 rounded-full bg-primary text-white hover:scale-101 transition flex justify-center items-center gap-2 hover:bg-white hover:text-primary cursor-pointer">
                Learn more <FaArrowRightLong size={15} />
              </button>
            </Link>
            <Link href="/getInvolved">
              <button className="px-6 py-2.5 rounded-full text-primary bg-white transition cursor-pointer hover:border-primary hover:border-1 hover:bg-transparent hover:text-white hover:scale-101 border-white border-1">
                Support us
              </button>
            </Link>
          </div>

          <div className="mt-4 text-xs sm:text-sm opacity-80">
            500+ Centers Available all over India
          </div>
        </div>
      </div>
    </section>
  );
}
