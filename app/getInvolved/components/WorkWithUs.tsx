import React from "react";
import Link from "next/link";
import { FiHelpCircle } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

const Sections = [
  {
    header:
      "Do you wish to contribute your skills and time to a meaningful cause?",
  },
];

const Opportunities = [
  { para: "Assisting with community awareness campaigns and workshops." },
  { para: "Supporting data collection and research for our programs." },
  { para: "Helping with content creation for educational materials." },
  { para: "Providing administrative support at our project offices." },
  {
    para: "Sharing specialized skills (e.g., graphic design, photography, translation, IT support).",
  },
];

const WorkWithUs = () => {
  return (
    <div className="py-10 px-3">
      <div className="mx-auto max-w-6xl rounded-3xl">
        {/* Heading */}
        <div className="pb-5 text-center">
          <div className="text-primary text-xs uppercase tracking-wide font-semibold">
            Join Our Mission
          </div>
          <div className="text-background/80 text-2xl lg:text-4xl font-semibold">
            Work With Us
          </div>
        </div>

        {/* Prompts */}
        <div className="flex flex-col items-center gap-3">
          {Sections.map((grid, i) => (
            <div
              key={i}
              className="inline-flex items-start gap-3 rounded-xl bg-white/80 backdrop-blur border border-white/60 px-4 py-3 shadow-sm text-background/80"
            >
              <FiHelpCircle className="mt-0.5 text-primary" size={18} />
              <span className="text-base md:text-lg font-medium text-center">
                {grid.header}
              </span>
            </div>
          ))}
        </div>

        {/* Intro */}
        <p className="text-xs md:text-sm opacity-80 pt-6 lg:text-lg text-background/80 text-center px-4 sm:px-10 max-w-4xl mx-auto">
          JSSES welcomes dedicated changemakers who are eager to make a tangible
          difference. Working with us offers hands-on experience, the chance to
          contribute to vital community development, and a compassionate team to
          learn with.
        </p>

        {/* Content cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-8">
          {/* Opportunities */}
          <div className="group relative rounded-2xl p-6 bg-white/90 backdrop-blur border border-white/60 shadow-md ring-1 ring-black/5">
            <div className="text-xl font-bold text-left pb-4 text-background/80">
              Opportunities May Include
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Opportunities.map((grid, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 ${
                    grid.para.includes("Sharing specialized skills")
                      ? "sm:col-span-2"
                      : ""
                  }`}
                >
                  <span className="flex justify-center items-center text-background/80">
                    *
                  </span>
                  <span className="text-sm md:text-base opacity-80 leading-relaxed text-background/80">
                    {grid.para}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vacancies / CTA */}
          <div
            id="vacancies"
            className="group relative rounded-2xl p-6 backdrop-blur border shadow-md ring-1 ring-black/5 flex items-center justify-center"
          >
            <div className="flex flex-col items-start gap-4">
              <div className="text-xl font-bold text-background/80">
                Vacancies
              </div>
              <p className="text-sm md:text-base opacity-70 max-w-md text-background/80">
                We post open roles and volunteer opportunities regularly. If you
                don’t see a fit, you can still reach out — we’d love to hear
                from you.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <Link
                  href="/contactUs"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-white transition-all duration-300 hover:scale-103 md:text-sm text-xs font-medium"
                >
                  Apply Now <FaArrowRightLong size={14} />
                </Link>
                <Link
                  href="#openings"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-background/80 border border-[#E9E9E9] transition-all duration-300 hover:scale-103 md:text-sm text-xs font-medium"
                >
                  See Openings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
