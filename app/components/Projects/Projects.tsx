import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";

import projects from "@/data/projects.json";

import Project from "./Project";

const Projects = () => {
  return (
    <SectionContainer id="projects">
      <div className="section-contents mx-6 md:mx[64px]">
        <SectionHeader plainText="😎 Some of my" highlightText="Best Works" />
        <div className="lg:w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, id) => (
            <Project
              key={id}
              thumbnail={project.thumbnail}
              title={project.title}
              link={project.link}
              description={project.description}
              languageIcons={project.languageIcons}
            />
          ))}
        </div>
      </div>
      <img
        src="/projects_highlight.svg"
        alt="Background highlight decoration for the projct section"
        width={558}
        height={558}
        className="absolute hidden md:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 "
      />
        <img
        src="/projects_highlight_mobile.svg"
        alt="Mobile Background highlight decoration for the projct section"
        width={321}
        height={530}
        className="absolute md:hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 "
      />
    </SectionContainer>
  );
};

export default Projects;
