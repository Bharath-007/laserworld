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
    </div>
  );
};

export default SectionWrapper(About, "about");
