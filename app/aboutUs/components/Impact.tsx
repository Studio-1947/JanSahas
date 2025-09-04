import React from "react";
import { FaHandsHelping, FaBalanceScale } from "react-icons/fa"; // example icons

const Impact = () => {
  return (
    <section className="text-background/80 px-4 py-12 max-w-6xl mx-auto">
      {/* Heading */}
      <h2 className="text-2xl lg:text-4xl font-semibold text-center mb-10 leading-snug">
        We follow a two-fold strategy to ensure lasting impact:
      </h2>

      {/* Grid Layout */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Card 1 */}
        <div className="group bg-white/5 rounded-3xl shadow-md hover:shadow-lg transition-all p-8 flex flex-col items-center text-center">
          <div className="bg-[#2D2A6D] text-white rounded-full p-4 mb-5 group-hover:scale-110 transition-transform">
            <FaHandsHelping className="h-6 w-6 md:h-8 md:w-8" />
          </div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">
            Effective Implementations
          </h3>
          <p className="text-xs md:text-sm lg:text-base opacity-70 leading-relaxed">
            Establishing efficient last-mile delivery systems to ensure the most
            vulnerable populations can access existing protections and benefits.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group bg-white/5 rounded-3xl shadow-md hover:shadow-lg transition-all p-8 flex flex-col items-center text-center">
          <div className="bg-[#2D2A6D] text-white rounded-full p-4 mb-5 group-hover:scale-110 transition-transform">
            <FaBalanceScale className="h-6 w-6 md:h-8 md:w-8" />
          </div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">
            Transforming Systems
          </h3>
          <p className="text-xs md:text-sm lg:text-base opacity-70 leading-relaxed">
            Working towards improving systems for all by assisting the
            government and other stakeholders in strengthening infrastructure,
            enhancing accountability, and creating better incentives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
