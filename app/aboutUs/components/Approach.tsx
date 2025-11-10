import React from "react";

const FiveGrids = [
  {
    header: "Community-Led Model",
    paragraph:
      "A key feature of our work is involving survivors, grassroots leaders, and community representatives directly in our decision-making process. This ensures that those whose voices were traditionally unheard now lead and guide the  shaping of mental health systems and all our initiatives.",
  },
  {
    header: "Strengthening mental health support",
    paragraph:
      "Working towards improving the mental well-being of rural women and children through accessible services.",
  },
  {
    header: "Prioritizing survivors and communities",
    paragraph:
      "Ensuring that the needs and voices of survivors and communities are at the center of our initiatives.",
  },
  {
    header: "Empowering women through livelihood initiatives",
    paragraph:
      "Supporting women's economic empowerment through initiatives like Usha Silai and other livelihood opportunities.",
  },
  {
    header: "Driving long-term systemic impact",
    paragraph:
      "Addressing the root cause of social issues to bring lasting transformation through. Collaborative programs like the Migrant Resilience Collaborative Program.",
  },
  {
    header: "Driving Women’s Growth",
    paragraph:
      "Partnering effectively with government bodies, civil society organizations, and community leaders for collective impact.",
  },
];

const Approach = () => {
  return (
    <div className="">
      <div className="py-5">
        <div className="text-background/80  text-2xl lg:text-4xl font-semibold text-center">
          Our Approach
        </div>
        <p className="text-xs md:text-sm opacity-60 pt-6 lg:text-lg text-background/80  text-center ">
          Our approach is rooted in creating sustainable change and empowering
          marginalized communities by focusing on their strength and fostering
          self-reliance. We believe that true transformation comes from within
          the communities itself. Our methodology is characterised by:
        </p>
      </div>
      <div className="grid gap-3 px-1 md:px-5 md:grid-cols-6 md:auto-rows-auto">
        {FiveGrids.map((grid, i) => {
          return (
            <div
              key={i}
              className={`border-2 border-[#E9E9E9] rounded-3xl p-5 text-background/80 hover:bg-[#2D2A6D] hover:text-white 
               md:col-span-2 shadow-md lg:bg-white`}
            >
              <div className="text-xl font-bold">{grid.header}</div>
              <p className="text-xs md:text-sm opacity-60 pt-4 lg:text-lg">
                {grid.paragraph}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Approach;
