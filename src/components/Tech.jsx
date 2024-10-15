import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-20">
        <p className={`${styles.sectionSubText} `}>What can I offer</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>

        {technologies.map((technology) => (
          <div className='w-28 h-28 relative group' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex justify-center items-center px-2 py-1 bg-gray-700 text-white text-sm rounded'>
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
