import Image from "next/image";
import React from "react";

// Individual variables so each can be styled differently
const trainingModule = {
  title: "Training Module:",
  text: "The Usha Silai School’s nine-day program includes two days dedicated to teaching women how to build and repair sewing machines. Two days are devoted to life skills development training. For five days, women are taught how to use sewing machines and create clothing such as blouses, petticoats, salwar suits, children’s shirts and shorts, along with skills like embroidery, knitting, and other decorative work. After completing the training, women receive an Usha sewing machine, an Usha Silai School signboard, an Usha training book, and a certificate.",
} as const;

const achievement = {
  title: "Achievements",
  text: "Linked 2,000 women to employment opportunities through the Usha Silai School program, enhancing their livelihoods and financial independence.",
} as const;

const Usha = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      {/* Header */}
      <header className="justify-center items-center flex flex-col px-3 gap-4  py-10 overflow-none max-w-6xl mx-auto">
        <div className="text-background/80 text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
          USHA Silai School Program
        </div>
      </header>

      {/* Intro */}
      <p className="text-xs opacity-60 lg:text-lg text-background/80 md:text-sm text-center py-5">
        The Usha Silai School Program is a nationwide, community-driven rural
        initiative. The aim of this social initiative is to teach women the
        skills of sewing and tailoring, and to help them set up their own
        self-reliant micro-enterprises under the Usha Silai banner, enabling
        them to support themselves and their families.
      </p>

      {/* Hero Image */}
      <div className="mt-6 md:mt-8 relative w-full overflow-hidden rounded-xl border border-black/10 ring-1 ring-black/5">
        {/* Responsive min-h for image on mobile, aspect ratio on md+ */}
        <div className="relative w-full min-h-[320px] md:aspect-[16/9]">
          <Image
            src="/media/gallery/1/UseinUshaProject.webp"
            alt="Women training at the USHA Silai School Program"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
            priority={false}
          />
          {/* Overlays ON image for md+, hidden on mobile */}
          <div className="hidden md:flex absolute inset-x-3 bottom-3 z-10 flex-row items-stretch gap-3">
            <div className="flex-1 rounded-xl border border-black/10 ring-1 ring-black/5 bg-white/90 backdrop-blur-sm p-5">
              <div>
                <div className="text-lg font-semibold text-background/80">{trainingModule.title}</div>
                <p className="mt-1 text-sm text-background/80 leading-relaxed">{trainingModule.text}</p>
              </div>
            </div>
            <div className="w-[42%] rounded-xl border border-black/10 ring-1 ring-black/5 bg-white/90 backdrop-blur-sm p-5">
              <div>
                <div className="text-lg font-semibold text-background/80">{achievement.title}</div>
                <p className="mt-1 text-sm text-background/80 leading-relaxed">{achievement.text}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Overlays BELOW image for mobile (block on mobile, hidden on md+) */}
        <div className="flex flex-col gap-3 mt-3 md:hidden">
          <div className="rounded-xl border border-black/10 ring-1 ring-black/5 bg-white/90 backdrop-blur-sm p-4">
            <div>
              <div className="text-base font-semibold text-background/80">{trainingModule.title}</div>
              <p className="mt-1 text-xs text-background/80 leading-relaxed">{trainingModule.text}</p>
            </div>
          </div>
          <div className="rounded-xl border border-black/10 ring-1 ring-black/5 bg-white/90 backdrop-blur-sm p-4">
            <div>
              <div className="text-base font-semibold text-background/80">{achievement.title}</div>
              <p className="mt-1 text-xs text-background/80 leading-relaxed">{achievement.text}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Program details are now overlayed on the image above for better visual balance */}
    </section>
  );
};

export default Usha;
