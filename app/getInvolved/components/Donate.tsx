import React from "react";
import Link from "next/link";
import { FiCheckCircle, FiLock } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

const SUPPORTS = [
  "Mental health counselling sessions for rural women and children.",
  "Skill-building workshops for women's livelihood initiatives like Usha Silai.",
  "Development and dissemination of vital educational materials in remote villages.",
  "Advocacy efforts for the rights of migrant workers and other vulnerable groups.",
];

const Donate = () => {
  return (
    <div className="py-10 px-3">
      <div className="py-5 max-w-6xl mx-auto">
        <div className="text-background/80 text-2xl lg:text-4xl font-semibold text-center">
          Donate: Invest in Empowerment
        </div>
        <p className="text-xs md:text-sm opacity-80 pt-6 lg:text-lg text-background/80 text-center px-4 sm:px-10">
          Your financial contribution directly fuels our programs and
          initiatives, enabling us to reach more marginalized individuals and
          strengthen communities. Every donation, no matter the size, makes a
          significant impact on mental health support, women&#39;s livelihoods,
          and the promotion of equal rights.
        </p>
      </div>

      <div className="px-3 sm:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-6">
          {/* Support list */}
          <div className="relative rounded-2xl p-6 bg-white/90 backdrop-blur shadow-md text-background/80">
            <div className="text-xl font-bold pb-4">
              Your Donation Can Support
            </div>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {SUPPORTS.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className='text-background/80'>*</span>
                  <span className="text-sm md:text-base opacity-80 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* How to donate */}
          <div id="donate" className="relative rounded-2xl p-6 bg-white/90 backdrop-blur shadow-md text-background/80 flex items-center">
            <div className="flex flex-col gap-4">
              <div className="text-xl font-bold">How to Donate</div>
              <p className="text-sm md:text-base opacity-70 max-w-md">
                Making a contribution is easy and secure through our online
                payment gateway.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <Link
                  href="/contactUs"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white transition-all duration-300 hover:scale-103 md:text-sm text-xs font-medium"
                >
                  Donate Now <FaArrowRightLong size={14} />
                </Link>
                <div className="inline-flex items-center gap-2 text-xs md:text-sm opacity-70">
                  <FiLock />
                  Secure payment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
