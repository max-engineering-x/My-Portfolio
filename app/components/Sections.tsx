import React from "react";

import Hero from "./Hero/Hero";
import Expertises from "./Expertises/Expertises";
import Projects from "./Projects/Projects";
import Testimonials from "./Testimonials/Testimonials";
import Experiences from "./Experiences/Experiences";

const Sections = () => {
  return (
    <main className="flex flex-col gap-[142px] w-full md:max-w-screen-lg pt-[236px] md:pt-60 mx-auto">
      <Hero />
      <Expertises />
      <Projects />
      <Testimonials />
      <Experiences />
    </main>
  );
};

export default Sections;
