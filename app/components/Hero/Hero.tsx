import React from "react";

const Hero = () => {
  return (
    <section className=" relative flex flex-row items-center z-20 mx-auto md:gap-[37px] md:mx-10">
      <div className="flex flex-col gap-[13px] items-center md:gap-[34px] md:my-[58px] md:items-start">
        <h1 className="text-2xl/1 text-center font-semibold block md:text-[40px] md:text-start md:inline">
          <span className="-ml-3">👋</span>Hello I'm Mohammed Alzahrani, I'm a{" "}
          <span className="block text-[27px] highlight mt-2 md:text-[45px] md:inline md:mt-0">
            Software Engineer
          </span>
        </h1>
        <p className="text-center text-sm mx-6 md:text-[22px] md:text-start md:mx-0">
          I'm passionate about Software Engineering, and creating software that
          makes a positive impact on people's life.
        </p>
        <a
          className="self-center bg-primary text-white p-2.5  rounded flex gap2.5 items-center text-sm md:self-start md:text-xl/6"
          href="mailto:moalsaadi18@gmail.com"
        >
          Let's Connect{" "}
          <img src="/arrow_right_icon.svg" alt="Arrow Right Icon" />
        </a>
      </div>
      <div>
        <img
          src="/profile_light_purple.png"
          alt="light purple rectangle"
          width={372}
          height={430}
          className="hidden md:block w-[372px] h-[430px] absolute right-0 -z-10 "
        />
               <img
          src="/profile_dark_purple.png"
          alt="Dark purple rectangle"
          width={372}
          height={430}
          className="hidden md:block w-[372px] h-[430px] absolute right-0 -z-10 "
        />
                 <img
          src="/profile_picture.png"
          alt="The profile picture"
          width={357}
          height={417}
          className="hidden md:block min-w-[357px] h-[417px]  z-10 mr-[7.7px] my-[6.5px] radius-50 rounded-md"
        />

      </div>
    </section>
  );
};

export default Hero;
