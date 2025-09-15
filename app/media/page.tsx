import React from "react";
import Top from "./components/Top";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import ReportsPage from "./reports/page";
import MentalHealthCard from "./mentalHealth/page";
import MentalHealthListPage from "./mentalHealth/page";
// import MentalHealthCard from "./components/MentalHealthCard";

const cards = [
  {
    id: 1,
    title: "USHA Silai School training",
    image: "/media/event1.webp",
  },
  {
    id: 2,
    title: "Organisational Development Training",
    image: "/media/event2.webp",
  },
  {
    id: 3,
    title: "Khushiyon ka Pitara - Wellbeing centers in the community",
    image: "/media/event3.webp",
  },
];

const page = () => {
  return (
    <div className="lg:pt-2">
      <Top />
      <div className="py-10 max-w-[1440px] mx-auto">
        <div className="text-2xl lg:text-4xl font-semibold text-background/80 text-center ">
          Annual Reports
        </div>
        <div
          className="w-full flex justify-center items-center px-4"
          id="reports"
        >
          <ReportsPage />
        </div>
      </div>

      <div className="py-10 max-w-[1440px] mx-auto px-4">
        <div className="text-2xl lg:text-4xl font-semibold text-background/80 text-center">
          Mental Health Resources{" "}
        </div>
        <div className="mt-6">
          <MentalHealthListPage />
        </div>
      </div>

      <div className="py-10 max-w-[1440px] mx-auto">
        <div
          className="text-2xl lg:text-4xl font-semibold text-background/80 text-center"
          id="events"
        >
          Events
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-6xl ">
            <Events cards={cards} />
          </div>
        </div>
      </div>

      <Gallery />
    </div>
  );
};

export default page;
