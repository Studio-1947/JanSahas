import Image from "next/image";
import React from "react";

const Themes = [
  {
    title: "Dignity",
    text: "We work to ensure that every migrant worker is treated with respect and fairness. This includes access to their basic rights, social security schemes, identity documents, and other government entitlements that help improve their quality of life.",
  },
  {
    title: "Safety and Security",
    text: "Migrant workers are often exposed to unsafe working conditions and financial risks. Our project provides them with legal awareness and protection, safer workplace practices, and access to financial security tools so that they and their families can live without fear.",
  },
  {
    title: "Mobility",
    text: "Migration is a reality for millions of workers who move from one place to another in search of better opportunities. We support their safe and free movement by ensuring they are not exploited and can access jobs, services, and social benefits wherever they go.",
  },
];

const KeyComponents = [
  {
    title: "Social Security",
    subTitle:
      "We help migrant workers and their families access government schemes and benefits easily.",
    text1: "Awareness on social security schemes",
    text2: "Registration through the Jan Saathi mobile app",
    text3: "Support in applications, documents, and grievance redressal",
    text4: "Training local volunteers to guide communities",
  },
  {
    title: "Worker Protection",
    text: "We protect migrants from exploitation and ensure legal and emergency support.",
    text1: "Awareness sessions on safe migration and workers’ rights",
    text2: "A multi-lingual toll-free helpline for disputes and emergencies",
    text3: "Legal aid and redressal with support from police and government",
    text4: "Partnerships with CBOs to expand support",
  },
];

const Achievements = [
  {
    title: "61,571+",
    text: "Households registered with MRC",
  },
  {
    title: "92,224+",
    text: " Social security benefits facilitated",
  },
];

const MRC = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      {/* Header */}
      <header className="justify-center items-center flex flex-col px-3 gap-4  py-10 overflow-none max-w-6xl mx-auto">
        <h2 className="text-background/80 text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
          Migrants Resilience Collaborative
        </h2>
        <p className="text-xs opacity-60 lg:text-lg text-background/80 md:text-sm text-center ">
          This project is designed to support migrant workers and their families
          so that they can live with dignity and security. Migrant workers often
          face many challenges when they move to new places for work — such as
          lack of proper housing, health care, fair wages, and access to
          government schemes. Through this initiative, we aim to build a strong
          and supportive system that helps them feel safe, respected, and
          empowered.
        </p>
      </header>

      {/* Hero Image */}
      <div className="mt-6 md:mt-8 relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-black/10 ring-1 ring-black/5">
        <Image
          src="/media/slide2.webp"
          alt="Migrants Resilience Collaborative"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
          priority={false}
        />
      </div>

      {/* Core Themes */}
      <section className="mt-8 md:mt-10">
        <h3 className="text-2xl font-semibold text-background/80">
          Core Themes
        </h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {Themes.map((theme, i) => (
            <div
              key={i}
              className="rounded-xl border border-black/10 ring-1 ring-black/5 p-5 md:p-6"
            >
              <div className="text-lg md:text-xl font-semibold text-background/80">
                {theme.title}
              </div>
              <p className="mt-1 text-sm md:text-base text-background/80 leading-relaxed">
                {theme.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="mt-8 md:mt-10">
        <h3 className="text-2xl font-semibold text-background/80">Vision</h3>
        <p className="mt-2 text-base text-background/80 leading-relaxed">
          By addressing these three core areas — dignity, safety, and mobility —
          the project aims to create a secure ecosystem where migrant workers
          and their families can not only survive but also thrive.
        </p>
      </section>

      {/* Key Components */}
      <section className="mt-8 md:mt-10">
        <h3 className="text-2xl font-semibold text-background/80">
          Key Components
        </h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {KeyComponents.map((component, i) => (
            <div
              key={i}
              className="rounded-xl border border-black/10 ring-1 ring-black/5 p-5 md:p-6"
            >
              <div className="text-lg md:text-xl font-semibold text-background/80">
                {component.title}
              </div>
              {component.subTitle && (
                <p className="mt-1 text-sm md:text-base text-background/80">
                  {component.subTitle}
                </p>
              )}
              {component.text && (
                <p className="mt-1 text-sm md:text-base text-background/80">
                  {component.text}
                </p>
              )}
              <ul className="mt-3 space-y-2 text-sm md:text-base text-background/80 list-disc pl-5">
                {component.text1 && <li>{component.text1}</li>}
                {component.text2 && <li>{component.text2}</li>}
                {component.text3 && <li>{component.text3}</li>}
                {component.text4 && <li>{component.text4}</li>}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="mt-8 md:mt-10 py-5">
        <h3 className="text-2xl font-semibold text-background/80 text-center">
          Achievements – Indore District
        </h3>
        <div className=" flex justify-center items-center gap-5 py-5 flex-wrap">
          {Achievements.map((a, i) => (
            <div key={i} className="text-center w-[250px] ">
              <div className="bg-[#F5F5F5] flex flex-col gap-3 py-5 rounded-xl   md:h-[180px]">
                <div className="text-background/80 text-3xl sm:text-4xl md:text-6xl font-extrabold">
                  {a.title}
                </div>
                <div className="text-sm md:text-lg font-semibold text-background/80 opacity-60">
                  {a.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default MRC;
