import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const WhatWeDo = () => {
  return (
    <div className="flex  justify-center items-center  flex-col md:flex-col  lg:flex-row gap-8 px-3 pt-10  bg-no-repeat bg-top bg-fill ">
      {/* first section */}
      <div className="w-full :md-w[90%] lg:w-1/2 flex flex-col gap-8">
        {/* card */}

        {/* text section */}
        <div className="text-background/80 md:pt-10">
          <p className="text-2xl lg:text-4xl text-background/80 font-semibold">
            What we do?
          </p>
          <p className="text-xs md:text-sm opacity-60 pt-6 lg:text-lg">
            In our learnings across the years, we have developed a comprehensive
            model of mental health, that involves multiple stakeholders
            including community members, government and non-governmental
            agencies, educational and healthcare institutions, and other
            frontline workers, and looks at mental health care and support
            beyond individual counselling. Our model incorporates systems
            strengthening, social support and community care, and provides
            services through a mix of barefoot and professional counsellors. We
            aim to address the barriers to mental health brought up by the
            shortage of mental health professionals, financial and geographical
            inaccessibility, and stigma.
          </p>
        </div>
        <div className="flex gap-3  lg:justify-start justify-center">
          <Link href="media">
            <button className="px-8 py-3 rounded-full bg-primary text-white hover:scale-101 transition flex justify-center items-center gap-2 hover:bg-white hover:text-primary cursor-pointer">
              Learn more <FaArrowRightLong size={15} />
            </button>
          </Link>
        </div>
      </div>
      {/* second section */}
      <div className="  md:w-[100%] lg:w-1/2 h-full  ">
        <Image
          src="/img2.webp"
          alt="hero image"
          width={700}
          height={600}
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
