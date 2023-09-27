import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../Style';
import { fadeIn, textVariant } from '../utils/motion';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className=' w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>

        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className=" bg-tertiary rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className=' w-16 h-16 object-contain' />
          <h3 className=' text-white text-[20px] text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>

  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className=' mt-4 text-secondary text-[17 px] max-w-3xl leading-[30px]'>

        🚀 Hello I'm Animesh kumar Gupta: A Tech Enthusiast & Problem Solver!

        I'm a coding aficionado with a knack for turning ideas into reality. Fluent in Html, Css, JavaScript, ReactJS, TypeScript, Java, Springboot, Hibernet and powered by the magic of Firebase, I craft digital experiences that leave a lasting impact. With Tailwind CSS, I weave elegance into my creations, and Git is my trusty companion in the world of version control. Join me on a journey through innovation and endless possibilities. Welcome to my digital universe! 🌐💻✨
      </motion.p>

      <div className=" mt-20 flex  flex-wrap gap-10">
        {services.map((service, index) => ( // Changed 'services' to 'service' here
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about")
