import React from "react";

const OurWork = () => {
  return (
    <div className="">
      <div
        className="
          relative
          bg-[url('/ourWork/PAT3.webp')]
          bg-no-repeat
          bg-cover
          bg-center
          flex items-center justify-center
          flex-col
          px-4 text-center
          w-full
          h-[300px] sm:h-[400px] md:h-[500px]
          overflow-hidden
        "
      >
        {/* 🌒 Slight dark overlay */}
        <div className="absolute inset-0 bg-background/80 z-0" />

        {/* 📝 Content */}
        <div className="relative z-10 px-4 text-white">
          <div className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
            Our Work
          </div>
          <p className="text-xs md:text-sm pt-6 lg:text-lg opacity-90 max-w-6xl mx-auto px-4">
            At JSSES, our work is deeply rooted in the communities we serve. We
            implement a range of programs and initiatives designed to address
            the multifaceted challenges faced by marginalized populations in
            Madhya Pradesh. Our approach is holistic, empowering, and focused on
            creating sustainable, systemic change from the ground up.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
