import React from "react";

import Hero from "./Hero/Hero";
import Expertises from "./Expertises/Expertises";
import Projects from "./Projects/Projects";


const Sections = () => {
  return (
    <main className="flex flex-col ga[142px] w-full md:max-w-screen-lg pt-[236px] md:pt-60 mx-auto">
       <section className="section">
        <Hero />
      </section>
      <section className="section">
        <Expertises />
      </section>
      <section className="section">
        <Projects />
      </section>

       
    </main>
  );
};

export default Sections;
