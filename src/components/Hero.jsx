/* eslint-disable react/no-unescaped-entities */
import { Carousel } from "@material-tailwind/react";
import img1 from "../assets/carousel/cover1.jpg";
import img2 from "../assets/carousel/cover_rtrt1-1024x576.jpg";
import img3 from "../assets/carousel/ploter.jpg";

function CarouselDefault() {
  return (
    <div className="bg-white flex justify-center items-center xs:p-4 sm:p-6 md:p-2 lg:p-20 py-6">
      <Carousel className="w-full max-w-screen-lg md:w-11/12 lg:w-500px" autoplay={true}>
        <img src={img1} alt="image 1" className="h-auto w-full object-cover" />
        <img src={img2} alt="image 2" className="h-auto w-full object-cover" />
        <img src={img3} alt="image 3" className="h-auto w-full object-cover" />
      </Carousel>
    </div>
  );
}

import { homeCncImg } from "../assets";

const HomePage = () => {
  return (
    <div className="bg-white flex justify-center items-center min-h-screen pt-32 md:pt-12 lg:pt-12">
      <div className="container flex flex-col lg:flex-row items-center justify-between md:px-20">
        {/* Text Section */}
        <div className="lg:w-1/2 px-4 lg:px-0">
          <h1 className="text-black text-5xl lg:text-6xl font-bold leading-tight mb-6 gap-2">
            Explore the World of
            <span className="text-orange-600"> CNC</span> Machines
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Revolutionizing Precision Manufacturing with Machineries
          </p>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition duration-300">
            Let's Explore
          </button>
        </div>

        {/* Image Section */}
        <div>
          <img
            height={300}
            width={500}
            src={homeCncImg}
            alt="CNC Machine"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <>
      <HomePage />
      <CarouselDefault />
    </>
  );
};

export default Hero;
