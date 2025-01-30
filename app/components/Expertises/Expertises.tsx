import React from "react";

import skills from "@/data/skills.json";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";

import Expertise from "./Expertise";

const Expertises = () => {
  return (
    <SectionContainer id="expertises">
      <div className="section-contents mx-[22px] md:mx-[116px] ">
        <SectionHeader plainText="💻This is my" highlightText="Tech Stack" />
        <div className="card w-full px-[33px] py-[27px] flex flex-wrap flex-col md:flex-row justify-center items-center gap-[19px] md:gap-[33px] cursor-pointer">
          {skills.map((skill, id) => (
            <Expertise key={id} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
      <>
        <img
          src="/tech_stack_grid_dark.svg"
          alt="Background Grid Decoration"
          width={569}
          height={373}
          className="hidden dark:md:block -z-10 absolute -left-[135px] -top-[39px]"
        />
           <img
          src="/tech_stack_grid.svg"
          alt="Background Grid Decoration"
          width={569}
          height={373}
          className="hidden dark:hidden md:block -z-10 absolute -left-[125px] -top-[39px]"
        />
      </>
    </SectionContainer>
  );
};

export default Expertises;
