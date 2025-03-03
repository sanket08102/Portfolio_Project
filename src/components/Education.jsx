import React, { memo } from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = memo(({ index, year, degree, institution, location, cgpa }) => (
  <Tilt className='w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      style={{ willChange: 'transform, opacity' }}
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-5 flex flex-col justify-center'>
        <div className='flex flex-row justify-center items-center w-full'>
          <div className='flex flex-col'>
            <p className='text-blue-500 text-[14px]'>{year}</p>
            <h3 className='text-white text-[19px] font-bold mt-2'>{degree}</h3>
            <p className='text-secondary text-[16px] mb-2'>{institution}</p>
            <p className='text-yellow-600 text-[14px]'>{location}</p>
          </div>
          <div className='border-l border-secondary h-full mx-4'></div>
          <div className='flex flex-col items-center'>
            <span className='text-secondary text-[16px]'>CGPA</span>
            <span className='text-white text-[16px]'>{cgpa}</span>
          </div>
        </div>
      </div>
    </motion.div>
  </Tilt>
));

const Education = () => {
  return (
    <div className='mt-0'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Learning Journey</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I built a strong academic foundation in computer applications, gaining essential technical and problem-solving skills. My Bachelor's in Computer Applications gave me a solid grasp of programming and development. To further enhance my expertise, I pursued a Master’s degree, deepening my knowledge of advanced technologies.
      </motion.p>

      <div className='flex flex-col lg:flex-row gap-10 mt-10'>
        <EducationCard
          index={0}
          year="2022 - 2024"
          degree="Master of Computer Applications (MCA)"
          institution="V. P. Institute of Management Studies & Research"
          location="Sangli, Maharashtra, India"
          cgpa="7.8 / 10.0"
        />
        <EducationCard
          index={1}
          year="2019 - 2022"
          degree="Bachelor of Computer Applications (BCA)"
          institution="G. A. College of Commerce"
          location="Sangli, Maharashtra, India"
          cgpa="8.1 / 10.0"
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");