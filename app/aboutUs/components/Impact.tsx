import React from "react";
import { FaHandsHelping, FaBalanceScale } from "react-icons/fa"; // example icons

const cards = [
  {
    id: 1,
    Icon: FaHandsHelping,
    title: "Effective Implementations",
    description:
      "Establishing efficient last-mile delivery systems to ensure the most underserved populations can access existing protections and benefits.",
  },
  {
    id: 2,
    Icon: FaBalanceScale,
    title: "Transforming Systems",
    description:
      "Collaborating with government and other key stakeholders to strengthen institutional infrastructure and promote effective and inclusive systems that serve all.",
  },
];

const Impact = () => {
  return (
    <section className="text-background/80 px-4 py-12 max-w-6xl mx-auto">
      {/* Heading */}
      <h2 className="text-2xl lg:text-4xl font-semibold text-center mb-10 leading-snug">
        We follow a two-fold strategy to ensure lasting impact:
      </h2>

      {/* Grid Layout */}
      <div className="grid gap-8 md:grid-cols-2">
        {cards.map(({ id, Icon, title, description }) => (
          <div
            key={id}
            className="group bg-white/5 rounded-3xl shadow-md hover:shadow-lg transition-all p-8 flex flex-col items-center text-center"
          >
            <div className="bg-[#2D2A6D] text-white rounded-full p-4 mb-5 group-hover:scale-110 transition-transform">
              <Icon className="h-6 w-6 md:h-8 md:w-8" />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">
              {title}
            </h3>
            <p className="text-xs md:text-sm lg:text-base opacity-70 leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
