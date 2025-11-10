import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const WhoWeAre = () => {
  return (
    <div className="justify-center items-center flex flex-col px-3 gap-4 overflow-none">
      <h3 className="text-5xl text-background/80 font-semibold ">
        Who we are?
      </h3>
      <p className="text-xs opacity-60 lg:text-lg text-background/80 md:text-sm">
        We work with individuals facing challenges related to mental well-being,
        survivors of violence, and other socially and economically marginalised
        communities. We recognize that many community members we work with
        experience psychosocial stress and limited access to support systems. To
        address this, we have developed an in-house counselling unit with an aim
        to foster resilience among our communities, promote emotional
        well-being, and connecting individuals to care and support services at
        the grassroots level.
      </p>
      <div className="pt-2">
        <Link href="/ourWork">
          <button className="px-8 py-3 rounded-full bg-primary text-white hover:scale-101 transition flex justify-center items-center gap-2 hover:bg-white hover:text-primary cursor-pointer">
            Learn more <FaArrowRightLong size={15} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WhoWeAre;
