import Hero from "./components/Hero";
import ICarousel from "./components/ICarousel";
import KeyInterventions from "./components/KeyInterventions";
import TestimonialsSection from "./components/Testimonials";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre";

const images = ["/slider/slider1.webp", "/slider/slider2.webp"];

export default function Home() {
  return (
    <div className="py-5">
      <div className="">
        <Hero />
      </div>
      <div className=" px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto flex flex-col gap-5">
        <div className="py-4 lg:py-16">
          <WhoWeAre />
        </div>
        <div>
          <ICarousel images={images} />
        </div>
        <div className="py-4 lg:py-16">
          <WhatWeDo />
        </div>
        <div className="py-4 lg:py-16">
          <KeyInterventions />
        </div>
        <div className="py-4 lg:py-16">
          <TestimonialsSection />
        </div>
      </div>
    </div>
  );
}
