import React from "react";
import Reveal from "../Reveal";

import Image from "next/image";

const Hero = () => {
  return (
    <section className=" relative flex flex-row items-center z-20 mx-auto md:gap-[37px] md:mx-10">
      <div className="flex flex-col gap-[13px] items-center md:gap-[34px] md:my-[58px] md:items-start">
        <Reveal initialX={-25}>
          <h1 className="text-2xl font-semibold text-center md:text-4xl md:text-start transition-transform duration-300 hover:scale-105">
            <span className="-ml-2 md:-ml-0">👋</span> Hello, I'm Mohammed
            Alzahrani, I'm a
            <br className="block md:hidden" />
            <span className="block mt-2 md:mt-4 text-center md:text-start">
              <span className="inline-block px-4 py-2 text-3xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg md:text-5xl">
                Software Engineer
              </span>
            </span>
          </h1>
        </Reveal>
        <Reveal initialX={-30} delay={0.2}>
          <p className="text-center text-sm mx-6 md:text-[22px] md:text-start md:mx-0 transition-transform duration-300 hover:scale-105" >
            I'm passionate about Software Engineering, and creating software
            that makes a positive impact on people's life.
          </p>
        </Reveal>
        <Reveal initialX={-40} delay={0.4}>
          <a
            className="self-center bg-primary text-white p-2.5  rounded flex gap2.5 items-center text-sm md:self-start md:text-xl/6 transition-transform duration-300 hover:scale-105"
            href="mailto:moalsaadi18@gmail.com"
          >
            Let's Connect{" "}
            <Image src="/arrow_right_icon.svg" alt="Arrow Right Icon" />
          </a>
        </Reveal>
      </div>
      <div className="relative group">
        <Reveal>
          <Image
            src="/profile_light_purple.png"
            alt="light purple rectangle"
            width={372}
            height={430}
            className="hidden md:block w-[372px] h-[430px] absolute right-0  -z-10 group-hover:scale-[102%] group-hover:-rotate-2 ease-in-out duration-300"
          />
          <Image
            src="/profile_dark_purple.png"
            alt="Dark purple rectangle"
            width={372}
            height={430}
            className="hidden md:block w-[372px] h-[430px] absolute right-0 -z-10 group-hover:scale-[102%] group-hover:rotate-2 ease-in-out duration-300"
          />
          <Image
            src="/profile_picture.jpeg"
            alt="The profile picture"
            width={380}
            height={384}
            className="hidden md:block min-w-[328px] h-[400px] z-10 mr-[15.7px] my-[14.5px] rounded-3xl group-hover:scale-[102%]  ease-in-out duration-300"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
