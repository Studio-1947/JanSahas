import React from "react";

const SERVICES = [
  "Counselling services",
  "Awareness camps",
  "Community support group facilitation",
];

const IMPACT_TEXT =
  "Significantly increased mental health awareness in rural areas, leading to a positive shift in perspectives and encouraging help-seeking behaviour. Collaboration with local authorities like women's police and juvenile police has led to direct referrals for counselling and support.";

const OurProgram = () => {
  return (
    <div
      className="py-10 lg:bg-[url('/ourWork/4.webp')] 
      bg-white
    bg-no-repeat
          bg-cover
          bg-center
          flex items-center justify-center
          flex-col
          px-4 text-center
          w-full
          h-fit
          overflow-hidden
          relative
          my-5
          lg:flex-row"
    >
      {/* 🌒 Slight dark overlay */}
      <div className="absolute inset-0 lg:bg-black/80 z-0" />
      <div className="z-10 flex max-w-[1200px] mx-auto flex-col lg:flex-row">
        <div className="py-7 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-start  z-10">
          <div className=" text-2xl lg:text-4xl font-semibold text-center lg:text-left text-background/80 lg:text-white px-4">
            Our Programs and Initiatives
          </div>
          <p className=" px-4 text-white opacity-60 ">
            Strengthening Community Mental Health Support
          </p>
          <p className="text-xs md:text-sm  pt-6 lg:text-lg  text-center opacity-60 lg:text-left text-background/80 px-4 lg:text-white">
            Recognizing the critical need for accessible mental healthcare in
            rural and marginalized communities, JSSES provides vital mental
            health services. We work towards improving the mental well-being of
            vulnerable communities, especially rural women and children, by
            providing access to counselling, conducting awareness programs, and
            establishing community-led support systems. Our efforts are aimed at
            breaking the stigma associated with mental health issues and
            ensuring that individuals receive the care and understanding they
            need to thrive.
          </p>
        </div>
        <div className="px-1 md:px-5 lg:w-1/2 z-10 w-full">
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Services Provided Card with sub-cards */}
            <div className="group relative rounded-2xl p-6 bg-white/90 backdrop-blur border border-white/60 shadow-md ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start justify-between gap-3">
                <div className="text-lg md:text-xl font-semibold text-background/80">
                  Services Provided
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-4">
                {SERVICES.map((service, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 rounded-xl border border-[#E9E9E9] bg-white/95 p-4 shadow-sm transition-all duration-300 hover:shadow-md col-span-1 ${
                      service === "Community support group facilitation"
                        ? "lg:col-span-2"
                        : ""
                    }`}
                  >
                    <span className="mt-1 block h-2.5 w-2.5 rounded-full bg-primary/70 ring-4 ring-primary/10" />
                    <div className="text-sm md:text-base font-medium text-background/80">
                      {service}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Card */}
            <div className="group relative rounded-2xl p-6 bg-white/90 backdrop-blur border border-white/60 shadow-md ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start justify-between gap-3">
                <div className="text-lg md:text-xl font-semibold text-background/80">
                  Impact
                </div>
              </div>
              <p className="text-sm md:text-base leading-relaxed opacity-70 pt-3 text-background/80">
                {IMPACT_TEXT}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProgram;
