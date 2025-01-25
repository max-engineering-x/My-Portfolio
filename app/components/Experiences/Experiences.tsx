import React from "react";

import experiences from "@/data/experiences.json";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";

import Experience from "./Experience";

const Experiences = () => {
  return (
    <SectionContainer id="experience">
      <div className="section-contents mb-[66px] md:mb-[43px] md:mx[64px]">
        <SectionHeader
          plainText="💼 My prior"
          highlightText="Work Experiences"
        />
        <div className="w-full px-6 md:px-[52px] flex flex-col gap-5">
          {experiences.map((experience, id) => (
            <Experience
              key={id}
              id={id}
              image={experience.image}
              company={experience.company}
              role={experience.role}
              description={experience.description}
              dates={experience.dates}
            />
          ))}
        </div>
      </div>
      <div className="circle-icon absolute h-14 w-14 top-[-20px] right-1.5 md:top-[-40px] md:right-[90px] -z-10 flex items-center justify-center bg-white rounded-full shadow-lg">
        <img
          src="/bracket_icon.svg"
          alt="Bracket Icon"
          width={23}
          height={23}
          className="w-6 h-6"
        />
      </div>
      <div className="circle-icon h-14 w-14 left-1.5 bottom-0 md:left-[90px] -z-10">
        <img
          src="/electricity_icon.svg"
          alt="electricity icon"
          width={23}
          height={23}
        />
      </div>
    </SectionContainer>
  );
};

export default Experiences;
