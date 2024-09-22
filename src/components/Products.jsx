import React from "react";
import { Carousel, Card } from "../components/eff/ui/apple-cards-carousel";

import { prod1, prod2, prod3, prod4, miniCNCRouter } from "../assets";

export const Products = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-15">
      <Carousel items={cards} />
    </div>
  );
};

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-3 md:p-4 rounded-3xl mb-4"
          >
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="200"
              width="200"
              className="md:w-1/3 md:h-1/3 h-full w-full mx-auto object-contain"
            />
            <p className="text-black text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
          </div>
        );
      })}
    </>
  );
};
const MiniCNCContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-3 md:p-4 rounded-3xl mb-4"
          >
            <img
              src={miniCNCRouter}
              alt="Macbook mockup from Aceternity UI"
              height="200"
              width="200"
              className="md:w-1/3 md:h-1/3 h-full w-full mx-auto object-contain"
            />
            <p className="text-black text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Laser + Plotter cutting",
    title: "CO2 LASER  CUTTING  MACHINE &  ENGRAVING",
    src: prod3,
    content: <DummyContent />,
  },
  {
    category: "CNC Router Machine",
    title: "Mini CNC Router",
    src: prod2,
    content: <MiniCNCContent />,
  },
  {
    category: "Laser + Plotter cutting",
    title: "LASER WITH PLOTTER CUTTER",
    src: prod4,
    content: <DummyContent />,
  },

  {
    category: "CNC Router Machine",
    title: "CNC ROUTER  MACHINE",
    src: prod1,
    content: <DummyContent />,
  },
];
