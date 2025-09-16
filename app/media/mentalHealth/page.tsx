import ImageGallery from "../components/ImageGallery";
import PdfViewer from "../components/PDFViewer";

export const metadata = {
  title: "Mental Health — Media",
  description: "Images and PDF for the Mental Health project",
};

// Source-of-truth content for this page
const IMAGES = [
  {
    src: "/mental_health/MHperspectivesSpectrum.jpg",
    alt: "Community mental health session with participants",
    width: 1600,
    height: 1067,
    caption: "Mental Health Perspectives Spectrum",
  },
  {
    src: "/mental_health/Multilevelinterventionmodel-misc..png",
    alt: "Field worker providing mental health awareness",
    width: 1600,
    height: 1067,
    caption: "Multi-level Intervention Model",
  },
  {
    src: "/mental_health/PHFEmotionalWheel3240x3240(2).png",
    alt: "Support group discussing challenges and solutions",
    width: 1600,
    height: 1067,
    caption: "Emotions Wheel",
  },
] as const;

const PDF_SRC = "/mental_health/TrainingManualforFCs(Full-Print).pdf" as const;

export default function MentalHealthMediaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-background/80">
            Mental Health
          </h1>
          <p className="mt-1 text-base text-muted-foreground text-background/80">
            3 images · 1 PDF
          </p>
        </div>
      </header>

      {/* Image gallery */}
      <section aria-labelledby="gallery-heading" className="mt-8">
        <h2 id="gallery-heading" className="sr-only">
          Image gallery
        </h2>
        <ImageGallery images={IMAGES} />
      </section>

      {/* PDF viewer */}
      <section aria-labelledby="pdf-heading" className="mt-10">
        <div className="mt-4 px-4 py-6">
          <div className="mb-3 flex flex-col items-center justify-center gap-2">
            <h2 className="text-center text-3xl font-semibold text-background/80">
              Training Manual for Field Coordinators
            </h2>

            <div className="flex items-center gap-2 text-sm">
              <a
                href={PDF_SRC}
                download
                className="rounded border border-black/10 px-3 py-1.5 text-background/80 hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-black/30"
              >
                Download
              </a>
              <a
                href={PDF_SRC}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-black/10 px-3 py-1.5 text-background/80 hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-black/30"
              >
                Open
              </a>
            </div>
          </div>

          {/* Inline PDF */}
          <div className="overflow-hidden rounded-xl border border-black/10 ring-1 ring-black/5">
            {/* Prefer your PdfViewer component for consistency & accessibility */}
            {/* <PdfViewer src={PDF_SRC} className="h-[80vh] w-full" /> */}

            <iframe
              title="Training Manual for Field Coordinators (PDF)"
              src={`${PDF_SRC}#view=FitH`}
              className="h-[80vh] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
