"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Case = {
  title: string;
  img: string;
  summary: string;
  body: string;
};

const CASES: Case[] = [
  {
    title: "Livelihood at Home Through Usha Sewing School",
    img: "/media/gallery/1/USS 1.webp",
    summary:
      "After losing her husband, Jasmin Khan trained with Jan Sahas and started an Usha Sewing School from home. She now earns ₹5,000 to ₹6,000 per month and trains other women to become self-reliant.",
    body: "Jasmin Khan is a 32-year-old resident of Dhar district, Madhya Pradesh. She studied up to Class 8 and her family's financial background is not strong. Jasmin is the mother of six daughters and was previously dependent on her husband's income as a daily wage labourer. Her world shattered when her husband developed complications from two surgeries following a serious dental infection and passed away. She was left emotionally devastated and financially vulnerable, with no source of income and six daughters to raise. During this crisis, she found support through the Usha Sewing School. After a seven-day training program at the Jan Sahas Training Centre in Pushpgiri, Dewas district, she returned home with an Usha sewing machine, a comprehensive training manual, and an official signboard to set up her own Usha Sewing School. With renewed hope, she started an Usha Sewing School at her home and helps women become self-reliant. She has trained more than 10 women and is currently training 4-5 more, creating a ripple effect in her community. Jasmin charges a training fee of ₹500, and through her school and independent sewing work, she now earns ₹5,000 to ₹6,000 per month. This income has improved her financial situation considerably. Recognising her dedication and impact, an external donor, Mr Sanjay Vidyarthi, gifted her an Usha Craft Master sewing machine and a steam iron to support her work. Today, Jasmin has one dream: \"I want to work day and night at the Usha Sewing School, so I can educate my daughters and help them stand on their own feet.\" Jasmin's journey highlights the transformative power of skill development and grassroots initiatives, especially for women from marginalised communities.",
  },
  {
    title: "A Migrant Worker's Path to Justice",
    img: "/media/gallery/2/Legal Interventaion - Labour Inspector.webp",
    summary:
      "With Jan Sahas' support, Malti Devi and eight other women recovered ₹40,000 in unpaid wages after a contractor refused payment and used threats to force them back to work.",
    body: "Malti Devi is a migrant worker who came to Pithampur to support her family during a financial crisis. After her younger son met with an accident and all responsibilities fell on her elder son, Malti decided to help out. In her neighbourhood, a vehicle from a company called 'Mekin Lab' would come to pick up women for work. Malti contacted the contractor and began working with the company. When the work ended after two months, the contractor refused to pay wages to Malti and eight other women. They were threatened and pressured to return to work without pay. During this time, someone informed Malti about Jan Sahas and shared a team member's contact. Malti then reached out to the Jan Sahas team and shared her problem. The Jan Sahas team studied the case in detail and, after taking consent letters from all the affected women, presented the case to the Labor Department, Pithampur. The team spoke with Labour Officer Suryawanshi ji, who warned the contractor about legal action and the possibility of his license being cancelled. Following this intervention, the contractor paid the pending wages of ₹40,000 to all the women workers. Malti Devi and the other women thanked the Jan Sahas team for the support which helped them get justice. This not only made them financially stronger but also gave them dignity and confidence. Malti Devi's story emphasises the importance of awareness about the rights of migrant women and workers. If they know about worker helplines and legal support organisations, they can seek help against exploitation or wage theft. Timely action and institutional support can ensure justice for marginalised communities.",
  },
  {
    title: "How Mental Health Counselling Helped Save a Life",
    img: "/media/gallery/3/MH Awareness Campaign - Indore.webp",
    summary:
      "Counselling and family engagement helped Reena manage intense distress and rebuild confidence amid financial strain and conflict at home.",
    body: "Reena is a 30-year-old woman who lives with her husband, two daughters, and a son. Her husband works as a carpenter, often travelling for work. His alcoholism would cause frequent fights between them. He would also not give money to run the house. Determined to improve her family's financial conditions and support her children's future, Reena took up whatever job was available—from tailoring clothes to working as a daily wager at farms. Despite not finishing schooling, Reena is an outspoken and assertive person and often speaks up for what she believes in. However, her husband did not approve of this and worried about other people's opinions of her. He also suspected her of having an extramarital affair. During one such fight, Reena got really upset and had thoughts of suicide. She got further distressed by fears of her husband's death when he met with an accident. After a mental health awareness session in their village by Jan Sahas, Reena's eldest daughter reached out for help for her mother. A field counsellor made an urgent intervention by talking to Reena over the phone as she was feeling very helpless and scared. Since then, Reena has been in a few counselling sessions, which give her a space to express her emotions, concerns, and fears. The Jan Sahas team also engaged with her family to foster a supportive home environment. Today, Reena has started to regain control over her life and feels more confident. Her story underlines the importance of community-based mental health awareness programs and timely, life-saving interventions. With the right support, vulnerable individuals can find hope and healing.",
  },
];

const CaseStudies = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="w-full px-4">
      <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-6 text-background/80">
        Selected Case Studies
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-[1440px] mx-auto">
        {CASES.map((c, idx) => (
          <div
            key={idx}
            className="border-2 border-[#E9E9E9] rounded-3xl shadow-sm bg-white overflow-hidden flex flex-col h-full"
          >
            <Image
              src={c.img}
              alt={c.title}
              width={800}
              height={480}
              className="w-full h-56 object-cover"
              priority={idx === 0}
            />
            <div className="p-5 flex flex-col gap-3 flex-1">
              <h3 className="text-lg font-semibold text-textPrimary whitespace-pre-line">
                {idx === 1 ? (
                  <>
                    A Migrant Worker&apos;s Path to
                    <br />
                    Justice
                  </>
                ) : (
                  c.title
                )}
              </h3>
              <p className="text-sm text-background/80">{c.summary}</p>
              <button
                className="mt-auto self-start text-primary text-sm font-semibold hover:underline"
                onClick={() => setOpenIdx(idx)}
                aria-haspopup="dialog"
                aria-controls={`case-modal-${idx}`}
                aria-expanded={openIdx === idx}
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>

      {openIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenIdx(null);
          }}
        >
          <div
            id={`case-modal-${openIdx}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`case-modal-title-${openIdx}`}
            className="relative bg-white text-foreground rounded-2xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <button
              className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground/80 shadow hover:bg-white hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              onClick={() => setOpenIdx(null)}
              aria-label="Close dialog"
            >
              ×
            </button>
            <div className="p-6">
              <div className="flex items-start gap-4">
                <h3
                  id={`case-modal-title-${openIdx}`}
                  className="text-xl font-semibold text-textPrimary"
                >
                  {openIdx === 1 ? (
                    <>
                      A Migrant Worker&apos;s Path to
                      <br />
                      Justice
                    </>
                  ) : (
                    CASES[openIdx].title
                  )}
                </h3>
              </div>
              <div className="mt-4 text-sm text-background/80 whitespace-pre-line tracking-wide">
                {CASES[openIdx].body}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudies;
