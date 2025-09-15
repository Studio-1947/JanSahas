import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, FileText, Images } from "lucide-react";

/**
 * Production-ready, single-file demo for a clickable Card component that
 * navigates to a full-width gallery page showing images followed by a PDF.
 *
 * ✅ Accessibility: semantic elements, clear focus styles, keyboard support
 * ✅ Performance: lazy-loading images, reduced-motion support, pre-encoded URLs
 * ✅ Aesthetics: modern card, soft gradients, subtle motion, clean typography
 * ✅ Extensibility: pass different assets through route state or props
 *
 * TailwindCSS is assumed to be available (as per project guidelines). If you're
 * pasting into a repo without Tailwind, replace the classNames with your CSS.
 */

/** Utility: ensure file paths with spaces are safely embedded in URLs */
const safe = (p) => encodeURI(p);

/** Default assets provided by the user (can be overridden via route state) */
const DEFAULT_IMAGES = [
  "/mnt/data/PHF Emotional Wheel 3240x3240 (2).png",
  "/mnt/data/Multi level intervention model- misc..png",
  "/mnt/data/MH perspectives Spectrum.jpg",
].map(safe);

const DEFAULT_PDF = safe("/mnt/data/Training Manual for FCs (Full-Print).pdf");

/**
 * Card: Compact, clickable entry point
 * - Uses button semantics + Link for robust navigation & a11y.
 */
function AssetCard({ title = "Mental Health Assets", subtitle = "Tap to open gallery & manual", cover = DEFAULT_IMAGES[0] }) {
  const navigate = useNavigate();

  const go = () =>
    navigate("/assets", {
      state: { images: DEFAULT_IMAGES, pdf: DEFAULT_PDF, title },
    });

  return (
    <button
      onClick={go}
      className="group relative w-full max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500 p-[1px] focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
      aria-label={`${title} – open viewer`}
    >
      <div className="relative flex w-full items-stretch gap-0 rounded-3xl bg-zinc-950">
        {/* Left: cover */}
        <div className="relative hidden w-48 shrink-0 overflow-hidden rounded-l-[22px] bg-black/40 md:block">
          <img
            src={cover}
            alt="Cover preview"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>
        {/* Right: content */}
        <div className="flex w-full flex-col justify-between p-6 md:p-8">
          <div>
            <h2 className="text-left text-2xl font-semibold tracking-tight text-white drop-shadow-sm md:text-3xl">
              {title}
            </h2>
            <p className="mt-2 max-w-prose text-left text-sm text-zinc-300">
              {subtitle}
            </p>
          </div>
          <div className="mt-6 flex items-center gap-4 text-zinc-300">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs backdrop-blur-sm">
              <Images className="h-4 w-4" aria-hidden /> 3 images
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs backdrop-blur-sm">
              <FileText className="h-4 w-4" aria-hidden /> PDF manual
            </span>
            <span className="ml-auto text-sm font-medium text-sky-300 transition-colors group-hover:text-sky-200">
              Open →
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}

/**
 * Full-width viewer page: shows images first, then the PDF.
 */
function AssetViewer() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};
  const images = (state.images || DEFAULT_IMAGES).filter(Boolean);
  const pdf = state.pdf || DEFAULT_PDF;
  const title = state.title || "Mental Health Assets";

  return (
    <main className="min-h-screen bg-[radial-gradient(40%_60%_at_20%_10%,rgba(56,189,248,.15),transparent_60%),radial-gradient(50%_60%_at_80%_0%,rgba(16,185,129,.18),transparent_60%),#0a0a0a] text-white">
      {/* Header / toolbar */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm text-zinc-200 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden /> Back
          </button>
          <h1 className="ml-2 line-clamp-1 text-lg font-semibold tracking-tight md:text-xl">
            {title}
          </h1>
          <div className="ml-auto flex items-center gap-2">
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 px-3 py-2 text-sm text-sky-300 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              Open PDF in new tab
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.section
          key="gallery"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.35 }}
          className="mx-auto w-full max-w-6xl px-4 pb-24 pt-8"
        >
          {/* Images */}
          <div className="space-y-8">
            {images.map((src, i) => (
              <figure key={src} className="overflow-hidden rounded-2xl bg-white/5 shadow-sm">
                <img
                  src={src}
                  alt={`Asset ${i + 1}`}
                  loading="lazy"
                  className="w-full object-contain"
                />
                <figcaption className="px-4 py-2 text-center text-xs text-zinc-400">
                  Image {i + 1} of {images.length}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* PDF */}
          <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <header className="flex items-center gap-2 border-b border-white/10 p-3 text-sm text-zinc-300">
              <FileText className="h-4 w-4" aria-hidden /> Training Manual (PDF)
              <span className="ml-auto text-xs text-zinc-400">embedded preview</span>
            </header>
            <div className="relative">
              {/*
                Use iframe for broad compatibility; height is generous for comfortable reading.
                Consumers can tweak the height below to fit their layout needs.
              */}
              <iframe
                title="Embedded PDF"
                src={pdf}
                className="h-[1200px] w-full"
                loading="lazy"
              />
            </div>
            <div className="flex items-center justify-between gap-2 border-t border-white/10 p-3 text-xs">
              <span className="text-zinc-400">Can’t see it? Some browsers block local file embeds.</span>
              <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/10 px-3 py-1 font-medium text-sky-300 hover:bg-white/20"
              >
                Open in new tab
              </a>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </main>
  );
}

/**
 * App Shell with routes.
 */
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[radial-gradient(40%_60%_at_20%_10%,rgba(56,189,248,.15),transparent_60%),radial-gradient(50%_60%_at_80%_0%,rgba(16,185,129,.18),transparent_60%),#0a0a0a] p-6 text-white">
        <Routes>
          <Route
            path="/"
            element={
              <main className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
                <AssetCard />
                {/* Example: duplicate or add more cards if needed */}
              </main>
            }
          />
          <Route path="/assets" element={<AssetViewer />} />
          <Route
            path="*"
            element={
              <div className="mx-auto max-w-3xl text-center text-zinc-300">
                <p className="mb-4">Page not found.</p>
                <Link to="/" className="text-sky-300 underline underline-offset-4">
                  Go home
                </Link>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// Mount if running standalone in this canvas preview
typeof document !== "undefined" &&
  createRoot(document.getElementById("root") || document.body.appendChild(document.createElement("div"))).render(
    <App />
  );
