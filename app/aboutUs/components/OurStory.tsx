import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center">
      <div className="text-background/80 lg:w-1/2">
        <div className="text-2xl lg:text-4xl font-semibold text-center lg:text-left">
          Our Story
        </div>
        <p className="text-xs md:text-sm opacity-60 pt-6 lg:text-lg lg:text-left text-center">
          Jan Sahas Social Empowerment Society (JSSES) was established in 2006 in Madhya Pradesh with a deep commitment to empowering those that need the most support. Our journey began with the recognition of social and societal barriers  that affect people’s mental health and well-being, and hampers social and economic development. Since our inception, JSSES has acted as a vital platform and catalyst for community empowerment, working with underserved communities. Over the years, we have evolved to focus on strengthening community resilience, enabling access to essential services and resources, and promoting self-reliance. Our history is rooted in walking alongside communities, helping them unlock their collective potential and drive lasting change from within, always prioritizing the voices and needs of those we serve.
        </p>
      </div>
      <div className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center">
        <Image
          src="/slider/slider1.webp"
          alt="Our Story"
          width={800}
          height={600}
          className="object-cover w-full max-w-2xl h-auto rounded-xl ring-1 ring-black/10 shadow-md"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};

export default OurStory;
