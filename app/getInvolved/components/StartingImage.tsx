import React from "react";

const StartingImage = () => {
  return (
    <div className="">
      <div
        className="
          relative
          bg-[url('/getInvolved/img1.webp')]
          bg-no-repeat
          bg-cover
          flex items-center justify-center
          flex-col
          px-4 text-center
          w-full
          h-[300px] sm:h-[400px] md:h-[500px]
          overflow-hidden
          bg-top-20
        "
      >
        {/* 🌒 Slight dark overlay */}
        <div className="absolute inset-0 bg-background/80 z-0" />

        {/* 📝 Content */}
        <div className="relative z-10 px-4 text-white max-w-6xl mx-auto">
          <div className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
            Get Involved
          </div>
          <p className="text-xs md:text-sm pt-6 lg:text-lg opacity-90">
            At Jan Sahas Social Empowerment Society (JSSES), we believe that
            empowering communities and transforming lives is a collective
            journey. Your support, in any form, can significantly amplify our
            impact on the ground. Join us in our mission to create a society
            where every individual is ensured equal rights and opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartingImage;
