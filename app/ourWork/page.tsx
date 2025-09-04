import React from "react";
import OurWork from "./components/OurWork";
import Community from "./components/Community";
import SuccessStory from "./components/SuccessStory";
import Over from "./components/Over";
import OurProgram from "./components/OurProgram";
import Collab from "./components/Collab";
import Extra from "../components/Extra";
import Enhance from "./components/Enhance";
import Bonds from "./components/Bonds";
import StakeHolder from "./components/StakeHolder";

const page = () => {
  return (
    <div>
      <OurWork />
      <div className=" px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto">
        <Community />
        {/* <SuccessStory /> */}
        <Over />
      </div>
      <div className="">
        <OurProgram />
      </div>
      <div className=" px-4 sm:px-6 lg:px-10 pb-5 max-w-[1440px] mx-auto ">
        <Collab />
      </div>
      <div className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pb-10">
        <Extra
          header={"Direct Referrals"}
          paragraph={`Women's police and juvenile police consistently refer cases requiring mental health counselling, fact-finding for sensitive situations, and legal support.`}
          reverse={"normal"}
          image={"/ourWork/5.webp"}
        />
        <Extra
          header={"Comprehensive Support"}
          paragraph={`For example, in cases of gender-based violence or child welfare concerns, we provide immediate psychological support, facilitate fact-finding to aid legal proceedings, and connect individuals with necessary legal aid, ensuring a holistic approach to justice and well-being.`}
          reverse={"reverse"}
          image={"/ourWork/3.webp"}
        />
        <Extra
          header={"Reduced Trauma"}
          paragraph={`Our intervention helps survivors navigate complex situations with professional psychological support, reducing the long-term impact of trauma.`}
          reverse={"normal"}
          image={"/ourWork/2.webp"}
        />
        <Enhance />
        <Bonds />
        <StakeHolder />
      </div>
    </div>
  );
};

export default page;
