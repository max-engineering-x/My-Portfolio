import React from "react";

import Hero from "./Hero/Hero";
import Expertises from "./Expertises/Expertises";


const Sections = () => {
  return (
    <main className="flex flex-col ga[142px] w-full md:max-w-screen-lg pt-[236px] md:pt-60 mx-auto">
      <Hero />
      <Expertises/>
    </main>
  );
};

export default Sections;
