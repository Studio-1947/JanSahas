"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * ComponentSearchButton
 * - Renders a button that opens a small modal to search/select components.
 * - No external deps. Keyboard: ↑/↓ navigate, Enter select, Esc close.
 * - Pass your component index via `items`.
 */
export type ComponentItem = {
  id?: string;
  name: string;            // Visible label (e.g., "Button")
  href?: string;           // Where to navigate on select (optional)
  group?: string;          // Optional group/category label
  keywords?: string[];     // Extra search terms
};

export default function ComponentSearchButton({
  items,
  placeholder = "Search components…",
  buttonLabel = "Search",
  className,
  onSelect, // optional override
}: {
  items: ComponentItem[];
  placeholder?: string;
  buttonLabel?: string;
  className?: string;
  onSelect?: (item: ComponentItem) => void;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  // Focus the input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 10);
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    window.addEventListener("mousedown", handler);
    return () => window.removeEventListener("mousedown", handler);
  }, [open]);

  // Basic scoring: name startsWith > includes; keywords > includes
  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return items.slice(0, 8);
    const score = (it: ComponentItem) => {
      const name = it.name.toLowerCase();
      const keys = (it.keywords || []).join(" ").toLowerCase();
      const grp = (it.group || "").toLowerCase();
      let s = 0;
      if (name.startsWith(query)) s += 3;
      if (name.includes(query)) s += 2;
      if (keys.includes(query)) s += 1;
      if (grp.includes(query)) s += 1;
      return s;
    };
    return items
      .map((it) => ({ it, s: score(it) }))
      .filter(({ s }) => s > 0)
      .sort((a, b) => b.s - a.s || a.it.name.localeCompare(b.it.name))
      .slice(0, 8)
      .map(({ it }) => it);
  }, [items, q]);

  const select = (item: ComponentItem) => {
    if (onSelect) {
      onSelect(item);
    } else if (item.href) {
      router.push(item.href);
    }
    setOpen(false);
    setQ("");
    btnRef.current?.focus();
  };

  return (
    <>
      {/* Trigger */}
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen(true)}
        className={`
          inline-flex items-center gap-2 rounded-xl border border-white/10
          bg-white/5 px-3 py-1.5 text-sm backdrop-blur transition
          hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500
          ${className || ""}
        `}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="component-search-dialog"
      >
        {/* icon */}
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M21 21l-4.2-4.2M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <span className="hidden sm:inline">{buttonLabel}</span>
        <span className="sm:hidden">Search</span>
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/40 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="component-search-title"
          id="component-search-dialog"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              e.preventDefault();
              setOpen(false);
              btnRef.current?.focus();
            } else if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((i) => Math.min(i + 1, Math.max(results.length - 1, 0)));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((i) => Math.max(i - 1, 0));
            } else if (e.key === "Enter" && results[active]) {
              e.preventDefault();
              select(results[active]);
            }
          }}
        >
          <div
            ref={panelRef}
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/90 text-white shadow-2xl backdrop-blur"
          >
            {/* Header / Input */}
            <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
              <svg className="h-4 w-4 opacity-80" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 21l-4.2-4.2M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
                      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setActive(0);
                }}
                placeholder={placeholder}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/60"
                aria-label="Search components"
              />
              <kbd className="hidden sm:inline-flex rounded-md border border-white/15 px-1.5 text-[10px] opacity-70">Esc</kbd>
            </div>

            {/* Results */}
            <ul className="max-h-80 overflow-auto py-1">
              {results.length === 0 ? (
                <li className="px-3 py-3 text-sm text-white/70">No matches.</li>
              ) : (
                results.map((item, i) => (
                  <li key={item.id ?? item.name}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onClick={() => select(item)}
                      className={`group flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm transition
                        ${i === active ? "bg-white/10" : "hover:bg-white/5"}`}
                      aria-selected={i === active}
                      role="option"
                    >
                      <div className="min-w-0">
                        <div className="truncate font-medium">{item.name}</div>
                        {(item.group || item.keywords?.length) && (
                          <div className="truncate text-xs text-white/60">
                            {item.group ? item.group : ""}
                            {item.group && item.keywords?.length ? " • " : ""}
                            {item.keywords?.slice(0, 4).join(", ")}
                          </div>
                        )}
                      </div>
                      {item.href && (
                        <span className="shrink-0 rounded-md border border-white/10 px-2 py-0.5 text-[10px] text-white/80">
                          Open
                        </span>
                      )}
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
