import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../Style';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => {
  function WrappedComponent() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
       <span className='hash-span' id={idName}>
       </span>
        <Component />
      </motion.section>
    );
  }

  return WrappedComponent;
};

export default SectionWrapper;
