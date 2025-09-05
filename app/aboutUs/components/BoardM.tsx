"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Members = [
  {
    name: "Aasish Choubey",
    img: "/members/AasishChoubey.webp",
    designation: "Social Outreach Coordinator",
    about: `Aashish is a seasoned legal professional with over 20 years of experience practicing at the High Court of Madhya Pradesh, Indore Bench. Since 2001, he has been committed to advancing the rights of Dalits, backward classes, and other marginalized communities, often representing them pro bono to uphold their dignity and constitutional rights.
    Driven by a strong sense of social justice, his legal work bridges expertise with empathy, making him a vital advocate for inclusive development and human rights in India.`,
  },
  {
    name: "Archana Gosar",
    img: "/members/ArchanaGosar.webp",
    designation: "Social Outreach Coordinator",
    about:
      "Archana Gosar is an advocate with a decade of legal experience, having practiced in both the High Court and District Court in Indore. Deeply committed to women’s rights, she has spent the past 10 years working to support and empower women through legal advocacy and community engagement.",
  },
  {
    name: "Jyoti Choudhary",
    img: "/members/JyotiChoudhary.png",
    designation: "Social Outreach Coordinator",
    about:
      "Jyoti Choudhary has worked in the social sector for over 12 years, focusing on the prevention of violence against women and girls. She has provided critical legal support to affected women, children, and their families, advocating for their rights and safety within both legal and social systems.",
  },
  {
    name: "Kranti Khode",
    img: "/members/KrantiKhode.webp",
    designation: "Social Outreach Coordinator",
    about: `Kranti began her journey with Jan Sahas as a volunteer 22 years ago and now serves as Thematic Lead. With extensive experience in legal advocacy and project management, she has led impactful initiatives across the country. In 2002, she took part in a national campaign to end manual scavenging across 100 districts and later led the Dignity March—a survivor-led movement spanning 200 districts.
    Under her leadership, programs have delivered socio-medical and legal support to nearly 10,000 survivors of violence. She holds a Master’s degree in Law and an MSW from Tata Institute of Social Sciences (TISS), Mumbai, and is a certified trainer in POSH, POCSO, and Safeguarding.`,
  },
  {
    name: "Pramila Rathore",
    img: "/members/PramilaRathore.webp",
    designation: "Social Outreach Coordinator",
    about:
      "With 17 years of experience in social work, Pramila Rathore holds a Master’s in Social Work and a PGDCA. Her work spans education and women’s rights, including eight years of teaching in primary, middle, and high schools. She has been deeply involved in efforts to prevent violence against women and promote reproductive health, focusing on community-level impact.",
  },
  {
    name: "Rajendra Bandhu",
    img: "/members/RajendraBandhu.webp",
    designation: "Social Outreach Coordinator",
    about: `Hailing from the remote village of Khatgaon in Madhya Pradesh and rooted in a marginalized community, Rajendra Bandhu (M.A., M.Phil., LL.B., LL.M.) has spent over 35 years driving grassroots social change. As a lifelong social worker and legal advocate, he has worked extensively with NGOs to promote gender equality and ensure that government schemes benefit underserved communities. A lifetime member of the Indore High Court Bar Association, he specializes in family law and women’s legal rights, and has authored several books aimed at making legal knowledge accessible to all.

Rajendra is nationally recognized for challenging gender norms and opening doors for women in non-traditional professions such as mechanics, electricians, and drivers. He founded the Samaan Society to institutionalize his vision for social inclusion and equality, and established India’s first women-run mechanic garage in Indore—a powerful symbol of empowerment and change.`,
  },
  {
    name: "Sudha Jain",
    img: "/members/image.webp",
    designation: "Social Outreach Coordinator",
    about:
      "An Assistant Professor at Indore School of Social Work for 22 years, Sudha Jain has a rich background as a researcher, labour welfare officer, and child rights advocate. As a member of the Child Welfare Committee, she has helped rehabilitate over 600 vulnerable children. She also serves as a POSH Consultant for multiple organizations, offering training and guidance on workplace sexual harassment laws. With 23 published papers and 15 national seminar presentations, her work bridges academia and frontline social impact. ",
  },
];
const BoardM = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <div>
      <div
        className="text-background/80 text-2xl lg:text-4xl font-semibold text-center pb-5"
        id="board-members"
      >
        Board Members
      </div>

      <div className="flex flex-wrap justify-center items-center max-w-[1200px] mx-auto gap-6">
        {Members.map((member, i) => (
          <div key={i} className="relative w-72 h-[500px] perspective">
            {/* Flip container */}
            <div
              className={`relative w-full h-full duration-700 transform-style preserve-3d ${
                flippedIndex === i ? "rotate-y-180" : ""
              }`}
            >
              {/* FRONT */}
              <div className="absolute w-full h-full backface-hidden bg-background/80 border border-gray-200 rounded-2xl shadow-md overflow-hidden">
                {/* Image */}
                <div className="relative w-full h-60 rounded-t-2xl overflow-hidden bg-white">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 692 665"
                      width="692"
                      height="665"
                      fill="none"
                      className="max-w-none"
                    >
                      <g filter="url(#filter0_f_310_277)">
                        <path
                          d="M603 287.159C603 396.599 487.937 576 346 576C204.063 576 89 396.599 89 287.159C89 177.719 204.063 89 346 89C487.937 89 603 177.719 603 287.159Z"
                          fill="url(#paint0_linear_310_277)"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_f_310_277"
                          x="0"
                          y="0"
                          width="692"
                          height="665"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="44.5"
                            result="effect1_foregroundBlur_310_277"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear_310_277"
                          x1="346"
                          y1="89"
                          x2="346"
                          y2="576"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E6F4FF" />
                          <stop offset="1" stopColor="#2BA2FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <Image
                    fill
                    alt={member.name}
                    src={member.img}
                    className="object-cover object-top"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex  flex-col justify-between items-between gap-4">
                  <h3 className="text-lg lg:text-xl font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-white line-clamp-6">
                    {member.about}
                  </p>
                  <div className="">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setFlippedIndex(i);
                      }}
                      className="w-full text-white flex  justify-center items-center py-2 px-3 rounded-3xl bg-primary hover:text-primary hover:bg-white cursor-pointer border border-primary hover:border-primary gap-2"
                    >
                      Read more <FaArrowRightLong size={13} />
                    </button>
                  </div>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden">
                {/* Blurred background */}
                <div className="absolute inset-0">
                  <Image
                    fill
                    alt={member.name}
                    src={member.img}
                    className="object-cover blur-xs bg-white"
                  />
                  <div className="absolute inset-0 bg-background/80" />
                </div>

                {/* Back content */}
                <div className="relative z-10 p-5 flex flex-col justify-between items-between h-full text-white pt-10">
                  <h3 className="text-xl sm:text-2xl lg:text-4xl font-semibold mt-2 ">
                    {member.name}
                  </h3>
                  <p className="text-sm leading-relaxed max-h-[250px] overflow-y-auto pr-1">
                    {member.about}
                  </p>
                  <div className="">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setFlippedIndex(null);
                      }}
                      className="w-full text-white py-2 px-3 rounded-3xl bg-primary hover:text-primary hover:bg-white cursor-pointer border border-primary hover:border-primary"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardM;
