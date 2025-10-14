import Image from "next/image";
import React from "react";

const Community = () => {
  return (
    <div
      id="reports"
      className="justify-center items-center flex flex-col px-3 gap-4  py-10 overflow-none max-w-6xl mx-auto"
    >
      <div className="text-background/80 text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
        Community Awareness on Mental Health
      </div>
      <p className="text-xs opacity-60 lg:text-lg text-background/80 md:text-sm text-center ">
        We work with the highly excluded communities, including survivors or
        those who are at risk of mental health, gender-based violence, unsafe
        migration, forced labour conditions, sexual exploitation and
        trafficking. We recognize that the communities we work with, deal with
        trauma in their day-to-day lives and are largely deprived of adequate
        mental health care that they require in order to be back on their feet.
        To bridge this gap, we have developed an in-house counselling unit with
        an aim to foster resilience among our communities and ensure their
        access to mental health care at grass-roots level.
      </p>
    </div>
  );
};

export default Community;
