import React from "react";
import Top from "./components/Top";
import ImageSlider from "../components/ICarousel";
import Events from "./components/Events";
import Gallery from "./components/Gallery";

const images = [
  "/media/slide1.webp",
  "/media/slide2.webp",
  "/media/slide3.webp",
];

const cards = [
  {
    id: 1,
    title: "Name of the Event",
    image: "/media/event1.webp",
  },
  {
    id: 2,
    title: "Name of the Event",
    image: "/media/event2.webp",
  },
  {
    id: 3,
    title: "Name of the Event",
    image: "/media/event3.webp",
  },
  {
    id: 4,
    title: "Name of the Event",
    image: "/media/event2.webp",
  },
  {
    id: 5,
    title: "Name of the Event",
    image: "/media/event3.webp",
  },
];

const page = () => {
  return (
    <div className="lg:pt-2">
      <Top />
      <div className="py-10 max-w-[1440px] mx-auto">
        <div className="text-2xl lg:text-4xl font-semibold text-background/80 text-center">
          Annual Reports
        </div>
        <div className="w-full flex justify-center items-center px-4">
          <div className="w-full max-w-5xl">
            <ImageSlider images={images} />
          </div>
        </div>
      </div>

      <div className="py-10 max-w-[1440px] mx-auto">
        <div className="text-2xl lg:text-4xl font-semibold text-background/80 text-center">
          Events
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-6xl py-5 ">
            <Events cards={cards} />
          </div>
        </div>
      </div>

      <Gallery />
    </div>
  );
};

export default page;
