import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    
    <div className='flex flex-row flex-wrap justify-center gap-10 p-10 lg:p-20 rounded-lg'>
      {technologies.map((technology) => (
        <div className='w-24 h-28 transform transition-transform duration-300 hover:scale-110' key={technology.name}>
          <img src={technology.icon} alt={technology.name} className='w-full h-full object-contain' />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
