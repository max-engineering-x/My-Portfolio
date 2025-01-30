import React from "react";
import Image from "next/image";

type Props = {
  thumbnail: string;
  title: string;
  link: {
    url: string;
    label: string;
  };
  description: string;
  languageIcons: string[];
};

const Project = ({
  thumbnail,
  title,
  link,
  description,
  languageIcons,
}: Props) => {
  return (
    <div className="card flex flex-col items-stretch w-full max-w-[428.4px] p-5 md:p-[18px] gap-[30px] transition-transform duration-300 hover:scale-105 cursor-pointer">
      <Image
        src={thumbnail}
        alt={`Thumbnail for ${title}`}
        width={392}
        height={230}
        className="w-full h-[230px] object-cover"
      />
      <div className="flex flex-col gap-[11px]">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl md:text-[22px]">{title}</h3>
          <a
            href={link.url}
            className="flex px-5 py-[3px] gap-1 bg-[#b9b9b9] bg-opacity-[24%] rounded text-[14px]"
          >
            <span className="hidden md:block">{link.label}</span>
            <Image
              src="link_arrow.svg"
              alt="Link Arrow"
              className="block dark:hidden"
              width={25}
              height={25}
            />
            <Image
              src="link_arrow_dark.svg"
              alt="Link Arrow"
              className="hidden dark:block"
              width={25}
              height={25}
            />
          </a>
        </div>
        <p className="line-clamp-6 text-sm md:text-base">{description}</p>
        <div className="flex flex-row gap-[11px]">
          {languageIcons.map((icon, iconId) => (
            <Image
              src={icon}
              alt="Language Icon"
              key={iconId}
              className="w-6 h-6"
              width={25}
              height={25}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;