export type Asset = {
title: string
subtitle?: string
cover: string
images: { src: string; alt: string }[]
pdf: { src: string; title?: string }
}


export const ASSETS: Record<string, Asset> = {
  // Pack wired to files under /public/mental_health
  "mental-health-pack": {
    title: "Mental Health Assets",
    subtitle: "Gallery and downloadable manual",
    cover: "/mental_health/PHFEmotionalWheel3240x3240(2).png",
    images: [
      { src: "/mental_health/PHFEmotionalWheel3240x3240(2).png", alt: "Emotional Wheel" },
      { src: "/mental_health/Multilevelinterventionmodel-misc..png", alt: "Multi-level intervention model" },
      { src: "/mental_health/MHperspectivesSpectrum.jpg", alt: "Mental Health Perspectives Spectrum" },
    ],
    pdf: { src: "/mental_health/TrainingManualforFCs(Full-Print).pdf", title: "Training Manual for FCs" },
  },
}
