"use client";

import React, { useMemo, useState, useEffect } from "react";

/**
 * JSSES – Responsive Testimonials Section
 * Framework: Next.js App Router (React 18+), Tailwind CSS
 *
 * Highlights
 * - Fully responsive: single-card stack on mobile; feature + rail on desktop.
 * - Bilingual toggle (English / हिन्दी) with persistent state.
 * - Accessible controls, keyboard support, focus rings, reduced-motion friendly.
 * - Horizontal scroll with snap + Prev/Next buttons and pagination dots.
 * - "Read more" expander for long quotes (no Tailwind line-clamp plugin required).
 * - Strictly typed data model for safe content handling.
 *
 * Usage
 * 1) Drop this file into /components/TestimonialsSection.tsx
 * 2) Import and render <TestimonialsSection /> anywhere (e.g., your homepage).
 * 3) Tailwind required. No third-party icon libs needed.
 */

// -----------------------------
// Types & Data
// -----------------------------

type Locale = "en" | "hi";

type Testimonial = {
  id: string;
  name: string; // Person's display name. For anonymous, use a descriptive label.
  role: string; // e.g., "Beneficiary — Community Mental Health"
  location: string; // City / District
  consent?: boolean; // true if explicit consent to publish
  content: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "khargone-1",
    name: "Pratigya Pagaar",
    role: "Beneficiary — Community Mental Health",
    location: "Bhikangaon, Khargone",
    consent: true,
    content: `My name is Pratigya Pagaar, and I live in Bhikangaon, in Khargone district. I work to raise awareness among girls and encourage them to move forward in society.
To us, Jan Sahas is a helpful and supportive NGO where we share our diverse problems, and they help in finding appropriate solutions. They work in the field of education and raise awareness among underprivileged children and women. I have known Jan Sahas for a long time, and they have supported me in many ways. I sincerely thank the Jan Sahas for their help. It is an important social organisation.
`,
  },
  {
    id: "indore-anganwadi",
    name: "Anganwadi Worker",
    role: "Community Worker — Women & Children",
    location: "Indore",
    content: `Jan Sahas has been working with children and women and conducts awareness programs in the community. It works to prevent violence against women and girls. It has been helping women access employment opportunities and provides counseling and educational support to within communities, including women, girls, boys, and men dealing with mental health challenges.”
Through the organisation's programs, we have seen many positive changes in the community. Jan Sahas is doing excellent work. We are very happy with their efforts. We have learned a lot about improving our mental well-being and how to care for ourselves.
`,
  },
  {
    id: "indore-beneficiary",
    name: "Beneficiary Voice",
    role: "Beneficiary — Mental Health Project",
    location: "Indore",
    consent: true,
    content: `Jan Sahas works to prevent harassment and domestic violence against women. It also helps adolescent girls overcome mental and physical difficulties they face. It has helped adolescent girls a lot in overcoming their problems. It has helped me a lot too, in emotionally balancing depression, stress, and anger. Thank you! 
This organisation also works to eliminate social superstitions and helps women understand their responsibilities and preserve their self-respect. Without discriminating between people, Jan Sahas listens to the mental and physical problems of girls and women and helps find solutions.
Thank you Jan Sahas!

`,
  },
];

// -----------------------------
// Small internal SVG icons (no external libs required)
// -----------------------------

const MapPin = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle
      cx="12"
      cy="11"
      r="2.5"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

// -----------------------------
// Helpers
// -----------------------------

function clsx(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function TestimonialCard({
  t,
  content,
  featured = false,
}: {
  t: Testimonial;
  content: string;
  featured?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const body = content; // Currently fixed to English only

  // Simple character-based truncation with a clean cut at the nearest space
  const preview = useMemo(() => {
    if (expanded) return body;
    const limit = featured ? 420 : 260; // larger limit for featured card
    if (body.length <= limit) return body;
    const slice = body.slice(0, limit);
    const cutAt = slice.lastIndexOf(" ");
    return slice.slice(0, Math.max(0, cutAt)) + "…";
  }, [body, expanded, featured]);

  return (
    <article
      className="relative rounded-2xl border-2 border-[#E9E9E9] p-6 text-background/80 shadow-md transition hover:bg-[#2D2A6D] hover:text-white"
      aria-label={`Testimonial from ${t.name}`}
    >

      {/* Header: Name + Role */}
      <header className="mb-3">
        <h3 className="text-xl font-bold">{t.name}</h3>
        <p className="mt-1 text-xs md:text-sm opacity-60">{t.role}</p>
        <p className="mt-1 inline-flex items-center gap-1 text-xs opacity-60">
          <MapPin /> {t.location}
        </p>
      </header>

      {/* Body */}
      <p className="text-xs md:text-sm opacity-60 pt-6 lg:text-lg">
        {preview}
      </p>

      {/* Read more / less */}
      {body.length > (featured ? 420 : 260) && (
        <button
          type="button"
          onClick={() => setExpanded((s) => !s)}
          className="mt-3 inline-flex items-center gap-1 rounded-full border border-[#E9E9E9] px-3 py-1.5 text-xs font-medium transition hover:bg-white/10 focus:outline-none"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </article>
  );
}

// -----------------------------
// Main Section
// -----------------------------

export default function TestimonialsSection() {
  //   const [locale, setLocale] = useState<Locale>("en");

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 ">
      {/* Section Header */}
      <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl lg:text-4xl font-semibold text-center tracking-tight text-background/80 ">
            Voices from the Community
          </h2>
          <p className="mt-1 max-w-2xl text-background/70 opacity-70 text-xl font-semibold text-center">
            Real stories from beneficiaries and frontline workers engaged with
            Jan Sahas initiatives.
          </p>
        </div>

        {/* Language Toggle */}
        {/* <div className="flex items-center gap-2">
          <span className="sr-only">Select language</span>
          <div className="inline-flex rounded-lg border border-primary/30 bg-white p-1">
            {(["en", "hi"] as const).map((lng) => (
              <button
                key={lng}
                type="button"
                onClick={() => setLocale(lng)}
                className={clsx(
                  "rounded-md px-3 py-1.5 text-xs font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  locale === lng
                    ? "bg-primary text-white"
                    : "text-background/80 hover:bg-primary/5"
                )}
                aria-pressed={locale === lng}
              >
                {lng === "en" ? "English" : "हिन्दी"}
              </button>
            ))}
          </div>
        </div> */}
      </div>

      {/* Grid of testimonial cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.id} t={t} content={t.content} />
        ))}
      </div>
    </section>
  );
}
