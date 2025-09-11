import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Collab = () => {
  return (
    <div
      className="py-10 bg-[url('/ourWork/1.webp')] 
    bg-no-repeat
          bg-fit
          bg-center
          flex items-center justify-center flex-col
          px-4 
          w-full
          overflow-hidden
          relative
          my-5
          rounded-2xl
          text-center"
    >
      {/* 🌒 Slight dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="py-7  lg:flex lg:flex-col justify-center items-center  z-10 max-w-6xl mx-auto">
        <div className="text-white lg:text-white text-2xl lg:text-4xl font-semibold text-center lg:text-left">
          Collaborations With Law Enforcement
        </div>

        <p className="text-xs md:text-sm  pt-6 lg:text-lg text-white text-center opacity-60 lg:text-center">
          A pivotal achievement has been establishing strong working
          relationships with local law enforcement agencies, specifically the
          Women&apos;s Police and Juvenile Police. This collaboration has
          significantly enhanced our ability to provide crucial support to those
          in need. These departments now actively refer cases to JSSES,
          demonstrating their trust in our expertise and services.
        </p>
      </div>
    </div>
  );
};

export default Collab;
