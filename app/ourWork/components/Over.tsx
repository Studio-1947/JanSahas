"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const OverInfos = [
  { header: "Over", percent: "12%", text: "Increase in Community Awareness" },
  {
    header: "Reached Approximately",
    percent: "25%",
    text: "Higher Utilization Of Local Health Services",
  },
  {
    header: "Reached Approximately",
    percent: "12%",
    text: "More People Supported Through Mental Health Outreach",
  },
  {
    header: "Reached and sensitized \n over",
    percent: "50,000",
    text: "people on mental health awareness",
  },
  {
    header: "Provided counselling support \n to",
    percent: "500",
    text: "cases, ensuring timely support and care.",
  },
];

// Counter component for animated numbers (TypeScript safe)
type CounterProps = { target: string | number; duration?: number };
const Counter = ({ target, duration = 1200 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleScroll = () => {
      const rect = node.getBoundingClientRect();
      if (
        rect.top < window.innerHeight &&
        rect.bottom > 0 &&
        !hasAnimated.current
      ) {
        hasAnimated.current = true;
        let start = 0;
        const end = parseFloat(target.toString().replace(/[^\d.]/g, ""));
        const step = Math.max(1, Math.ceil(end / (duration / 16)));
        const animate = () => {
          start += step;
          if (start >= end) {
            setCount(end);
          } else {
            setCount(start);
            requestAnimationFrame(animate);
          }
        };
        animate();
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [target, duration]);

  let display: string | number = count;
  if (typeof target === "string" && target.includes("%")) display = `${count}%`;
  else if (typeof target === "string" && target.includes(","))
    display = count.toLocaleString();
  return <span ref={ref}>{display}</span>;
};

const Over = () => {
  return (
    <div>
      <div className="mt-6 md:mt-8 relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-black/10 ring-1 ring-black/5 max-w-6xl mx-auto">
        <Image
          src="/media/gallery/3/MHP.webp"
          alt="Migrants Resilience Collaborative"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
          priority={false}
        />
        {/* Black overlay */}
        <div className="absolute inset-0 lg:bg-black/80 z-0" />{" "}
        {/* Overlapping cards */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 w-full flex flex-wrap justify-center gap-2 md:gap-5 pb-5 max-w-[1000px]">
          {OverInfos.map((info, i) => (
            <div key={i} className="text-center w-[250px] ">
              <div className="text-xs md:text-sm pt-6 lg:text-lg text-white opacity-60 pb-2 whitespace-pre-line">
                {info.header}
              </div>
              <div className="bg-[#F5F5F5] flex flex-col gap-3 py-5 rounded-xl md:h-[200px] shadow-lg ring-1 ring-black/10">
                <div className="text-background/80 text-3xl sm:text-4xl md:text-6xl font-extrabold">
                  <Counter target={info.percent} />
                </div>
                <div className="text-sm md:text-lg font-semibold text-background/80 opacity-60">
                  {info.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Over;
