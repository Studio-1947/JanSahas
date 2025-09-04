import Image from "next/image";
import React from "react";

type ExtraProps = {
  header: string;
  paragraph: string;
  image: string;
  reverse?: string; // e.g., "flex-row-reverse" or "flex-row"
};

const Extra = ({ header, paragraph, image, reverse }: ExtraProps) => {
  const directionClass =
    reverse === "reverse" ? "md:flex-row-reverse" : "md:flex-row";
  const textAlignClass =
    reverse === "reverse" ? "md:text-right" : "md:text-left";

  return (
    <div
      className={`group flex flex-col ${directionClass} justify-center items-center text-background/80 gap-6 md:gap-10 pb-10`}
    >
      {/* Text */}
      <div className={`md:w-1/2 lg:w-7/12 ${textAlignClass} space-y-3`}>
        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
          {header}
        </div>
        {/* <div
          className={`mt-1 h-1.5 w-14 rounded-full bg-gradient-to-r from-primary to-pink-500 ${
            reverse === "reverse" ? "md:ml-auto" : "md:mr-auto"
          } mx-auto md:mx-0`}
        /> */}
        <div className="text-sm md:text-base lg:text-lg opacity-70 leading-relaxed">
          {paragraph}
        </div>
      </div>

      {/* Image */}
      <div className="relative w-full md:w-1/2 lg:w-5/12 h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px] xl:h-[420px] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 bg-white/80 backdrop-blur-sm p-2 sm:p-0 before:content-[''] before:absolute before:-inset-3 before:-z-10 before:rounded-3xl before:bg-primary/20 before:blur-2xl">
        <Image
          src={image}
          alt="extra image"
          fill
          priority={false}
          className="object-contain md:object-cover transition-transform duration-500 ease-out md:group-hover:scale-[1.03] object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 40vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
      </div>
    </div>
  );
};

export default Extra;
