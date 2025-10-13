import React from "react";

const FiveGrids = [
  {
    header: "Mental Health Support Services",
    paragraph:
      "To make mental healthcare more accessible and holistic, counselling centres have been set up in multiple districts, to provide individual, family and group counselling sessions. Counselling services are thus provided by either a psychologist, mental health social worker or barefoot counsellor, with an appropriate referral system wherever required.",
  },
  {
    header: "Training & Capacity Building",
    paragraph:
      "The training vertical focuses on creating modules on psychological first aid, mental health literacy and trauma-informed care and conducting training sessions to enhance the capacity of frontline workers in Jan Sahas Empowerment Society and other organisations, government stakeholders and healthcare staff. We recently started the first batch of an online 3-month course on Barefoot Counselling for frontline workers. The first cohort had 25 organisations as participants.",
  },
  {
    header: "Awareness Initiatives",
    paragraph:
      "This initiative looks at enhancing awareness of mental health and self-care at institutional levels in schools, colleges, shelter homes, hostels, jails, etc, as well as at the community level in SHGs, survivor forums, etc through talks, dance and IEC material. We have created a module for training community volunteers, known as mann sathis, to ensure ownership, empowerment and sustainability for awareness work within communities.",
  },
  {
    header: "Community and Employee Wellbeing",
    paragraph:
      "Through its commitment to community and employee wellbeing, Jan Sahas Social Empowerment Society ensures all staff and their family members have access to counseling services. We have also conducted stress-management and self-care workshops in both structured and informal formats, and have created a survey to assess wellbeing.",
  },
  {
    header: "Research & Resource Development",
    paragraph:
      "The team also actively engages in creating content for awareness and training modules, conducting surveys for assessment, creating resources and mapping mental health services.",
  },
];

const KeyInterventions = () => {
  return (
    <div className="px-3 flex flex-col gap-5">
      <div className="py-5">
        <div className="text-background/80 text-2xl lg:text-4xl font-semibold text-center">
          Key Interventions
        </div>
      </div>
      <div className="grid gap-5 px-1 md:px-5 md:grid-cols-6 md:auto-rows-auto">
        {FiveGrids.map((grid, i) => {
          let colSpanClasses = "";

          if (i < 3) {
            // First row — 3 items taking 2 cols each (2 x 3 = 6)
            colSpanClasses = "md:col-span-2";
          } else {
            // Second row — 2 items stretched wider (3 cols each)
            colSpanClasses = "md:col-span-3";
          }

          return (
            <div
              key={i}
              className={`border-2 border-[#E9E9E9] rounded-2xl p-6 text-background/80 hover:bg-[#2D2A6D] hover:text-white ${colSpanClasses} shadow-md`}
            >
              <div className="text-xl font-bold group-hover:!text-white">
                {grid.header}
              </div>
              <p className="text-xs md:text-sm opacity-60 pt-6 lg:text-lg group-hover:text-white">
                {grid.paragraph}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KeyInterventions;
