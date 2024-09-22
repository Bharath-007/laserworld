import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { Carousel } from "@material-tailwind/react";
import img1 from "../assets/carousel/cover1.jpg";
import img2 from "../assets/carousel/cover_rtrt1-1024x576.jpg";
import img3 from "../assets/carousel/ploter.jpg";

function CarouselDefault() {
  return (
    <Carousel className="mt-20 md:mt-0">
      <img src={img1} alt="image 1" className="h-fit w-full object-cover" />
      <img src={img2} alt="image 2" className="h-fit w-full object-cover" />
      <img src={img3} alt="image 3" className="h-fit w-full object-cover" />
    </Carousel>
  );
}

const Hero = () => {
  return <CarouselDefault />;
};

export default Hero;
