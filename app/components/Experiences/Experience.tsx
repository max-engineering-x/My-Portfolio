import React from "react";

type Props = {
  id: number;
  image: string;
  company: string;
  role: string;
  description: string;
  dates: string;
};

function Experience({ id, image, company, role, description, dates }: Props) {
  return (
    <div className="card flex flex-col items-stretch w-full max-w-screen-lg px-6 py-[27px] md:px-[33px] gap-3">
      <div className="flex flex-col items-start md:flex-row gap-1 md:gap-0 md:justify-between">
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <img
            src={image}
            alt={`Company image for ${company}`}
            width={88}
            height={88}
          />
          <h3 className="text-xl font-medium">{company}</h3>
        </div>
        <p className="text-base md:text-xl font-medium">{role}</p>
      </div>
      <p className="text-sm md:text-base">{description}</p>
      <p className="text-sm/1 md:text-base">{dates}</p>
    </div>
  );
}

export default Experience;
