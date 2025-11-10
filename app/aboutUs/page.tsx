import React from "react";
import FirstImage from "./components/FirstImage";
import OurStory from "./components/OurStory";
import KeyObjectives from "./components/KeyObjectives";
import OurMisson from "./components/OurMisson";
import Approach from "./components/Approach";
import Impact from "./components/Impact";
import WhereWW from "./components/WhereWW";
import BoardM from "./components/BoardM";

const pages = () => {
  return (
    <div className="py-5">
      <div className="">
        <FirstImage />
      </div>
      <div className="  px-7  lg:px-10 max-w-[1440px] mx-auto">
        <div className="py-4 lg:py-12 ">
          <OurStory />
        </div>
        <div className="py-4 lg:py-12">
          <OurMisson />
        </div>
        <div className="py-4 lg:py-12">
          <KeyObjectives />
        </div>
        <div className="py-4 lg:py-12">
          <Approach />
        </div>
        <div className="py-4 lg:py-12">
          <Impact />
        </div>
        <div className="py-4 lg:py-12">
          <WhereWW />
        </div>
        <div className="py-4 lg:py-12">
          <BoardM />
        </div>
      </div>
    </div>
  );
};

export default pages;
