import React from "react";

import Image from "next/image";

type Props = {
  icon: string;
  name: string;
};

const Expertise = ({ name, icon }: Props) => {
  return (
    <div className="relative flex gap-2 p-2 border-primary border rounded-lg h-[46px] transition-transform duration-300 hover:scale-105">

      <Image src={icon} alt={`${name} icon`} />
      <p className="text-lg">{name}</p>
    </div>
  );
};

export default Expertise;
