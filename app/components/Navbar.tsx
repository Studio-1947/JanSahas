"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/aboutUs" },
  { title: "Our Work", link: "/ourWork" },
  { title: "Get Involved", link: "/getInvolved" },
  { title: "Resources", link: "/media" },
  { title: "Contact Us", link: "/contactUs" },
  { title: "Donate", link: "/getInvolved#donate" },
];

const HIGHLIGHT_SELECTOR = 'mark[data-search-highlight="true"]';
const HIGHLIGHT_CLASS =
  "search-highlight bg-yellow-200 text-black dark:bg-yellow-300 dark:text-black rounded-sm px-1";

const escapeRegExp = (value: string): string =>
  value.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&");

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [matchCount, setMatchCount] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const desktopInputRef = useRef<HTMLInputElement | null>(null);

  const clearHighlights = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    const highlights =
      window.document.querySelectorAll<HTMLElement>(HIGHLIGHT_SELECTOR);

    highlights.forEach((element) => {
      const parent = element.parentNode;
      if (!parent) {
        return;
      }

      const textNode = window.document.createTextNode(
        element.textContent ?? ""
      );

      parent.replaceChild(textNode, element);
      (parent as HTMLElement).normalize?.();
    });
  }, []);

  const highlightAllMatches = useCallback((query: string) => {
    if (typeof window === "undefined") {
      return 0;
    }

    const { document } = window;
    const lowerQuery = query.toLowerCase();
    const textNodes: Text[] = [];

    const filter: NodeFilter = {
      acceptNode(node) {
        if (!(node instanceof Text)) {
          return NodeFilter.FILTER_REJECT;
        }

        const parentElement = node.parentElement;
        if (!parentElement) {
          return NodeFilter.FILTER_REJECT;
        }

        const tagName = parentElement.tagName;
        if (
          tagName === "SCRIPT" ||
          tagName === "STYLE" ||
          tagName === "NOSCRIPT"
        ) {
          return NodeFilter.FILTER_REJECT;
        }

        if (parentElement.closest('[data-search-ignore="true"]')) {
          return NodeFilter.FILTER_REJECT;
        }

        const nodeValue = node.nodeValue;
        if (!nodeValue || !nodeValue.toLowerCase().includes(lowerQuery)) {
          return NodeFilter.FILTER_SKIP;
        }

        return NodeFilter.FILTER_ACCEPT;
      },
    };

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      filter
      // false,
    );

    let currentNode = walker.nextNode();
    while (currentNode) {
      textNodes.push(currentNode as Text);
      currentNode = walker.nextNode();
    }

    const pattern = new RegExp(escapeRegExp(query), "gi");
    let totalMatches = 0;
    let firstHighlight: HTMLElement | null = null;

    textNodes.forEach((textNode) => {
      const textContent = textNode.textContent;
      if (!textContent) {
        return;
      }

      pattern.lastIndex = 0;
      let match: RegExpExecArray | null;
      let lastIndex = 0;
      let nodeMatches = 0;
      const fragment = document.createDocumentFragment();

      while ((match = pattern.exec(textContent)) !== null) {
        const start = match.index;
        const end = start + match[0].length;

        if (start > lastIndex) {
          fragment.appendChild(
            document.createTextNode(textContent.slice(lastIndex, start))
          );
        }

        const mark = document.createElement("mark");
        mark.textContent = textContent.slice(start, end);
        mark.dataset.searchHighlight = "true";
        mark.className = HIGHLIGHT_CLASS;
        fragment.appendChild(mark);

        if (!firstHighlight) {
          firstHighlight = mark;
        }

        lastIndex = end;
        nodeMatches += 1;
        totalMatches += 1;
      }

      if (nodeMatches > 0) {
        if (lastIndex < textContent.length) {
          fragment.appendChild(
            document.createTextNode(textContent.slice(lastIndex))
          );
        }

        textNode.replaceWith(fragment);
      }
    });

    // firstHighlight?.scrollIntoView({ behavior: "smooth", block: "center" });

    return totalMatches;
  }, []);

  useEffect(() => {
    const trimmedQuery = searchQuery.trim();

    if (!trimmedQuery) {
      clearHighlights();
      setMatchCount(null);
      setFeedback(null);
      return;
    }

    clearHighlights();
    const totalMatches = highlightAllMatches(trimmedQuery);

    setMatchCount(totalMatches);
    setFeedback(
      totalMatches === 0
        ? `No matches for "${trimmedQuery}" on this page.`
        : totalMatches === 1
        ? "Found 1 match"
        : `Found ${totalMatches} matches`
    );
  }, [clearHighlights, highlightAllMatches, searchQuery]);

  useEffect(
    () => () => {
      clearHighlights();
    },
    [clearHighlights]
  );

  useEffect(() => {
    if (isSearchOpen) {
      desktopInputRef.current?.focus();
    }
  }, [isSearchOpen]);

  const handleSearchSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!searchQuery.trim()) {
        setFeedback("Enter a term to search");
        return;
      }

      if (matchCount && matchCount > 0 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    },
    [isMenuOpen, matchCount, searchQuery]
  );

  const handleSearchToggle = useCallback(() => {
    setIsSearchOpen((previous) => {
      const next = !previous;

      if (!next) {
        setSearchQuery("");
        setFeedback(null);
        setMatchCount(null);
        clearHighlights();
      }

      return next;
    });
  }, [clearHighlights]);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((previous) => !previous);
    setIsSearchOpen(false);
    setSearchQuery("");
    setFeedback(null);
    setMatchCount(null);
    clearHighlights();
  }, [clearHighlights]);

  return (
    <div className="mx-auto max-w-[1440px]">
      <header
        className={` w-full z-50 flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8 ${
          isMenuOpen
            ? "fixed left-0 top-0 bg-background text-white"
            : "bg-white"
        }`}
      >
        <div className="flex cursor-pointer items-center gap-2 sm:gap-3">
          <Link href="/" aria-label="Home - Jan Sahas" className="shrink-0">
            <Image
              src="/logo/fevicon_js 2.svg"
              width={60}
              height={35}
              alt="Jan Sahas logo"
              className="object-contain transition-all duration-300 hover:scale-105"
              priority
            />
          </Link>

          <div className={isMenuOpen ? "text-white" : "text-background/80"}>
            <span className="block text-base font-semibold leading-tight tracking-[-0.01em] sm:text-lg md:text-xl">
              Jan Sahas
            </span>
            <span className="block -mt-0.5 text-[11px] font-medium leading-snug opacity-80 sm:mt-0 sm:text-sm md:text-base">
              Social Empowerment Society
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex">
          <ul className="flex items-center">
            {navLinks.map((navLink) => (
              <li key={navLink.title}>
                <Link
                  href={navLink.link}
                  className="group relative inline-block text-lg font-medium"
                >
                  <span className="relative z-10 inline-block rounded-[2rem] px-7 py-[0.9375rem] text-background/80 transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                    {navLink.title}
                  </span>
                </Link>
              </li>
            ))}
            <li className="relative ml-2">
              <button
                type="button"
                onClick={handleSearchToggle}
                aria-label="Search this page"
                aria-expanded={isSearchOpen}
                className="flex h-11 w-12 items-center justify-center rounded-full border border-background/20 bg-white text-background/80 transition-colors duration-200 hover:text-primary"
              >
                <FiSearch className="h-5 w-5" />
              </button>
              <div
                className={`absolute right-0 z-50 mt-3 w-80 max-w-xs rounded-2xl bg-white p-5 shadow-xl ring-1 ring-black/10 transition-all duration-200 ${
                  isSearchOpen
                    ? "pointer-events-auto opacity-100 translate-y-0"
                    : "pointer-events-none opacity-0 -translate-y-2"
                }`}
              >
                <form
                  onSubmit={handleSearchSubmit}
                  data-search-ignore="true"
                  className="flex items-center gap-3"
                >
                  <FiSearch
                    className="h-5 w-5 text-background/60"
                    aria-hidden
                  />
                  <input
                    ref={desktopInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(event) => {
                      setSearchQuery(event.target.value);
                    }}
                    placeholder="Search this page"
                    className="flex-1 border-0 bg-transparent text-sm text-background/80 placeholder:text-background/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-white transition hover:bg-primary/90"
                  >
                    Go
                  </button>
                </form>
                {feedback && (
                  <p className="mt-3 text-xs text-background/60">{feedback}</p>
                )}
              </div>
            </li>
          </ul>
        </nav>

        <div className="z-50 pr-2 lg:hidden">
          <button
            type="button"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
            className={`flex cursor-pointer flex-col gap-1 p-3 transition-transform duration-300 ${
              isMenuOpen
                ? "rotate-90 rounded-full bg-black text-white"
                : "text-background/80"
            }`}
          >
            <GiHamburgerMenu size={27} />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed left-0 top-[74px] h-[calc(100vh-74px)] w-full overflow-y-auto bg-background/80 px-5 pb-4 backdrop-blur-md transition-transform duration-300 ease-in-out lg:hidden z-50">
          <ul className="flex flex-col items-center justify-center gap-5 py-5">
            {navLinks.map((navLink, index) => (
              <li key={navLink.title} className="w-full text-center">
                <Link
                  href={navLink.link}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsSearchOpen(false);
                  }}
                  className="block py-2 text-sm font-medium transition-transform duration-200 hover:scale-110 hover:text-yellow-300"
                >
                  <div className="mt-2 text-xl font-semibold text-white sm:text-2xl lg:text-4xl">
                    {navLink.title}
                  </div>
                </Link>
                {index < navLinks.length - 1 && (
                  <div className="mx-auto mt-2 w-1/2 border-b border-white/20" />
                )}
              </li>
            ))}
          </ul>

          <form
            onSubmit={handleSearchSubmit}
            data-search-ignore="true"
            className="mx-auto mt-6 flex w-full max-w-sm items-center justify-center gap-3 rounded-full bg-white/10 px-5 py-3 text-white"
          >
            <FiSearch className="h-5 w-5" aria-hidden />
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => {
                setSearchQuery(event.target.value);
              }}
              placeholder="Search this page"
              className="flex-1 bg-transparent text-base placeholder:text-white/70 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/30"
            >
              Go
            </button>
          </form>

          {feedback && (
            <p className="mt-3 text-center text-sm text-white/80">{feedback}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default NavBar;
