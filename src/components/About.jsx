import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon, description }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      // className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
      className="xs:w-[250px]  w-full p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-zinc-200 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3
          className="text-[18px] font-bold text-center"
          style={{ color: "#1F1F1F" }}
        >
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const ContactCard = () => {
  return (
    <motion.div variants={fadeIn("right", "spring", 0.5 * 4, 0.75)} className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-[20px] shadow-card max-w-sm mx-auto mt-20">
      <h2 className="text-lg font-semibold text-gray-800">Contact Us</h2>
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 4.5l-9.75 7.5-9.75-7.5m19.5 15v-11.25l-9.75 7.5-9.75-7.5v11.25"
          />
        </svg>
        <span className="text-gray-700">vigneshpro66@gmail.com</span>
      </div>
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 3.75h2.1a2.25 2.25 0 0 1 2.25 2.25v12a2.25 2.25 0 0 1-2.25 2.25h-2.1a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75zm-7.5 0h-2.1a2.25 2.25 0 0 0-2.25 2.25v12a2.25 2.25 0 0 0 2.25 2.25h2.1a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75zm5.4 6.225h-1.65a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 .75.75h1.65a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75z"
          />
        </svg>
        <span className="text-gray-700">+91 63697 27749</span>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Revolutionizing Precision Manufacturing
        </p>
        <h2 className={styles.sectionHeadText}>Explore Laser World</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        specializes in providing high-quality laser machines, CNC machines, and
        comprehensive services to meet the needs of industrial clients. We are
        committed to delivering cutting-edge solutions for precision
        manufacturing, offering a full range of spare parts, tools, and expert
        maintenance services
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <ContactCard />
    </div>
  );
};

export default SectionWrapper(About, "about");
