import React, { memo } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = memo(({ index, name, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.2, 0.75)}
    className='flex flex-col items-center'
  >
    <img src={icon} alt={name} className='w-20 h-20 object-contain' />
    <h3 className='text-secondary text-center text-[16px] mt-2'>{name}</h3>
  </motion.div>
));

const Tech = () => {
  return (
    <div className='mt-10'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I Use</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I have experience with a wide range of technologies in the web development world. Here are some of the technologies I use.
      </motion.p>

      <div className='grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-7  gap-x-12 gap-y-10 size-fit mt-10 place-self-center justify-center'>
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} index={index} {...tech} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(memo(Tech), "tech");
