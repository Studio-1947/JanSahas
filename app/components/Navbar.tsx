"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/aboutUs" },
  { title: "Our Work", link: "/ourWork" },
  { title: "Get Involved", link: "/getInvolved" },
  { title: "Resources", link: "/media" },
  { title: "Contact Us", link: "/contactUs" },
  { title: "Donate", link: "/getInvolved#donate" },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Fixed Header */}
      <header
        className={` w-full z-50 flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 ${
          isMenuOpen
            ? "bg-background text-white fixed top-0 left-0"
            : "bg-white"
        }`}
      >
        {/* Logo */}
        <div className="cursor-pointer flex items-center gap-2 sm:gap-3">
          <Link href="/" aria-label="Home — Jan Sahas" className="shrink-0">
            <Image
              src="/logo/fevicon_js 2.svg"
              width={60}
              height={35}
              alt="Jan Sahas logo"
              className="transition-all duration-300 hover:scale-105 object-contain"
              priority
            />
          </Link>

          {/* Text block */}
          <div className={isMenuOpen ? "text-white" : "text-background/80"}>
            {/* Brand name: larger size, tighter spacing */}
            <span className="block text-base sm:text-lg md:text-xl font-semibold leading-tight tracking-[-0.01em]">
              Jan Sahas
            </span>

            {/* Tagline: chhota size, halka spacing, better wrap on small screens */}
            <span className="block text-[11px] sm:text-sm md:text-base font-medium leading-snug opacity-80 -mt-0.5 sm:mt-0 whitespace-normal">
              Social Empowerment Society
            </span>
          </div>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden lg:flex">
          <ul className="flex">
            {navLinks.map((navLink, i) => (
              <li key={i}>
                <Link
                  href={navLink.link}
                  className="group relative inline-block text-lg font-medium"
                >
                  <span className="relative text-background/80 z-10 inline-block hover:bg-primary hover:text-white px-7 py-[0.9375rem] rounded-[2rem]">
                    {navLink.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger for Mobile */}
        <div className="lg:hidden z-50 pr-2">
          <div
            className={`flex flex-col gap-1 cursor-pointer transition-transform duration-300 p-3 ${
              isMenuOpen
                ? "rotate-90 text-white bg-black rounded-full"
                : "text-background/80"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <GiHamburgerMenu size={27} />
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="fixed top-[74px] left-0 w-full h-[calc(100vh-74px)] 
               bg-background/80 z-40 px-5 pb-4 lg:hidden overflow-y-auto 
               backdrop-blur-md transition-transform duration-300 ease-in-out animate-slideDown"
        >
          <ul className="flex flex-col justify-center items-center gap-5 py-5">
            {navLinks.map((navLink, i) => (
              <li key={i} className="w-full text-center">
                <Link
                  href={navLink.link}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm font-medium py-2 transition-transform duration-200 hover:scale-110 hover:text-yellow-300"
                >
                  <div className="text-xl sm:text-2xl lg:text-4xl font-semibold mt-2 text-white">
                    {navLink.title}
                  </div>
                </Link>
                {i < navLinks.length - 1 && (
                  <div className="w-1/2 mx-auto border-b border-white/20 mt-2"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
