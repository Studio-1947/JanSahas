import React from "react";

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

const Over = () => {
  return (
    <div className="flex  justify-center items-center flex-col md:flex-row gap-2 md:gap-5 pb-5 max-w-[1000px] mx-auto flex-wrap">
      {OverInfos.map((info, i) => {
        return (
          <div key={i} className="text-center w-[250px] ">
            <div className="text-xs md:text-sm  pt-6 lg:text-lg text-background/80 opacity-60 pb-2 whitespace-pre-line">
              {info.header}
            </div>
            <div className="bg-[#F5F5F5] flex flex-col gap-3 py-5 rounded-xl   md:h-[200px]">
              <div className="text-background/80 text-3xl sm:text-4xl md:text-6xl font-extrabold">
                {info.percent}
              </div>
              <div className="text-sm md:text-lg font-semibold text-background/80 opacity-60">
                {info.text}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Over;
