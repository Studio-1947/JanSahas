"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "About Us", href: "/aboutUs" },
  { label: "Our Work", href: "/ourWork" },
  { label: "Get Involved", href: "/getInvolved" },
  { label: "Resources", href: "/media" },
];

/** Section config:
 * - If an item has `href`, it's a link.
 * - If `external: true`, it opens in a new tab with proper rel.
 * - If no `href`, it's rendered as plain text.
 */
type SectionItem = {
  label: string;
  href?: string;
  external?: boolean;
  ariaLabel?: string;
};
type Section = { title: string; items: SectionItem[] };

const Sections: Section[] = [
  {
    title: "Explore",
    items: [
      { label: "Our Team", href: "/aboutUs#board-members" },
      { label: "Careers", href: "/getInvolved#vacancies" },
      { label: "Reports", href: "/ourWork#reports" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Projects", href: "/projects" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    title: "Resources",
    items: [{ label: "Contact Us", href: "/contactUs" }],
  },
  {
    title: "Support",
    items: [
      { label: "Donate", href: "/getInvolved#donate" },
      { label: "Volunteer", href: "/getInvolved#vacancies" },
    ],
  },
  {
    title: "Social",
    items: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/yourpage",
        external: true,
        ariaLabel: "Follow us on Facebook",
      },
      {
        label: "X",
        href: "https://x.com/yourhandle",
        external: true,
        ariaLabel: "Follow us on X (Twitter)",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/yourhandle",
        external: true,
        ariaLabel: "Follow us on Instagram",
      },
    ],
  },
];

interface FooterProps {
  navItems?: NavItem[];
}

const Footer: React.FC<FooterProps> = ({ navItems = NAV_ITEMS }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-background/10 border-t border-background/15 px-4"
    >
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Top row: Brand + Address + Contact */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo/fevicon_js 2.svg"
              width={60}
              height={40}
              alt="Jan Sahas logo"
              priority
            />
            <div className="text-lg sm:text-2xl lg:text-4xl font-semibold mt-1 text-background/80">
              Jan Sahas
            </div>
          </div>

          <address className="not-italic text-background/80">
            <div className="flex flex-wrap items-start gap-4 sm:gap-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm opacity-80">
                <IoLocation size={18} aria-hidden />
                <span>
                  408, G-1 Ahinsha Height, Manavta Nagar, Indore 452016
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm opacity-80">
                <IoMdMail size={18} aria-hidden />
                <a
                  href="mailto:jses.indore@gmail.com"
                  className="underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 rounded"
                >
                  jses.indore@gmail.com
                </a>
              </div>
            </div>
          </address>
        </div>

        {/* Divider */}
        <hr className="my-6 sm:my-8 border-background/15" />

        {/* Link grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {/* Nav mapped from navbar */}
          <nav aria-label="Site" className="col-span-2 sm:col-span-1">
            <h3 className="text-background text-xs md:text-sm font-medium tracking-wide opacity-70">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs md:text-sm text-background/80 opacity-80 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections (links only when href is provided) */}
          {Sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-background text-xs md:text-sm font-medium tracking-wide opacity-70">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.items.map((item) => {
                  const commonClasses =
                    "text-xs md:text-sm text-background/80 opacity-80 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 rounded";

                  // External link
                  if (item.href && item.external) {
                    return (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={item.ariaLabel ?? item.label}
                          className={commonClasses}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  }

                  // Internal link
                  if (item.href) {
                    return (
                      <li key={item.label}>
                        <Link href={item.href} className={commonClasses}>
                          {item.label}
                        </Link>
                      </li>
                    );
                  }

                  // Plain text (no href)
                  return (
                    <li key={item.label}>
                      <span className="text-xs md:text-sm text-background/70">
                        {item.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-12 text-xs sm:text-sm text-background/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span>© {year} Jan Sahas. All Rights Reserved.</span>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="hover:opacity-100 opacity-80 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 rounded"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:opacity-100 opacity-80 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 rounded"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
