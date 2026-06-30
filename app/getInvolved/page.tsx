import React from "react";
import StartingImage from "./components/StartingImage";
import WorkWithUs from "./components/WorkWithUs";
import Donate from "./components/Donate";

const page = () => {
  return (
    <div className="py-5">
      <StartingImage />
      <div className="max-w-[1440px] mx-auto">
        <div>
          <WorkWithUs />
        </div>
        <div>
          <Donate />
        </div>
      </div>
    </div>
  );
};

export default page;
