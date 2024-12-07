import React from "react";
import { Carousel, Card } from "../components/eff/ui/apple-cards-carousel";

import { prod1, prod2, prod3, prod4, miniCNCRouter, CNCRouter1, CNCRouter2, CNCRouter3, CO2LaserMachineImage, lms1, lms2, fiberLaserMachine, fiberLaserMachineApplication, fiberLaserMachineFeatures } from "../assets";

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

const LaserPlotterMachine = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-3 md:p-4 rounded-3xl mb-4"
          >
            <h2 className="text-3xl text-center font-bold" style={{ color: "#289FD2" }}>Laser + Plotter Cutter</h2>
            <p className="text-l text-center font-extralight text-black">Bring your ideas
              to life with Laser + Plotter Cutter!</p>
            <img
              src="https://example.com/laser-plotter.png" // Replace with an actual image of the laser plotter machine
              alt="Laser Plotter Machine"
              height="200"
              width="200"
              className="md:w-1/3 md:h-1/3 h-full w-full mx-auto object-contain"
            />
            <p className="text-black text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Precision and Power: The Laser Plotter Revolution.
              </span>
              Our Laser Plotter Machine is designed to deliver high precision, cutting through various materials like wood, acrylic, metal, and more with ease. Equipped with advanced laser technology, it ensures intricate designs are etched with unparalleled accuracy.
              With robust features like adjustable speed and depth control, this machine is perfect for prototyping, creating custom designs, or even large-scale production.
              Get ready to transform your ideas into reality with clean, precise, and sharp results every time.
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
            <h2 className="text-3xl text-center font-bold" style={{ color: "#289FD2" }}>Mini CNC Router Machine</h2>
            <p className="text-l text-center font-extralight text-black">Bring your ideas
              to life with Mini CNC Router engraver!</p>
            <img
              src={miniCNCRouter}
              alt="Macbook mockup from Aceternity UI"
              height="200"
              width="200"
              className="md:w-1/3 md:h-1/3 h-full w-full mx-auto object-contain"
            />
            <div className="space-y-4 text-black">
              <h2 className="text-2xl font-bold">Specs</h2>
              <ul className="list-disc pl-5 space-y-2 text-left">
                <li>Travel: 26" x 36" x 7" height</li>
                <li>Spindle: 2.2KW (3HP) Liquid Cooled Spindle, ER20 collet chuck</li>
                <li>TNG control software</li>
                <li>Working Speed: 200 - 300 IPM</li>
                <li>Rapid Speed: 500 IPM</li>
                <li>Resolution: about 0.05 mm, X, Y, Z Repeatability: 0.02 mm</li>
                <li>Coolant pump and tank included</li>
                <li>Power requirement: 220 volts single phase</li>
                <li>X, Y, Z axis are Ball screw drive with 640 oz-in Stepper Motor</li>
                <li>X, Y, Z Limit Switch, E-Stop</li>
                <li>Manual Way oiler</li>
              </ul>
            </div>

          </div>
        );
      })}
    </>
  );
};

const CNCRouter = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-3 md:p-4 rounded-3xl mb-4"
          >
            <h2 className="text-3xl text-center font-bold" style={{ color: "#289FD2" }}>CNC Router Machine</h2>
            <p className="text-l text-center font-extralight text-black">Bring your ideas
              to life with CNC Router engraver!</p>
            <img
              src={CNCRouter1}
              alt="Macbook mockup from Aceternity UI"
              height="200"
              width="200"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            <img
              src={CNCRouter2}
              alt="Macbook mockup from Aceternity UI"
              height="200"
              width="200"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            <img
              src={CNCRouter3}
              alt="Macbook mockup from Aceternity UI"
              height="200"
              width="200"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            <div className="space-y-4 text-black">
              <h2 className="text-2xl font-bold">CNC Router Machine Specifications</h2>
              <ul className="list-disc pl-5 space-y-2 text-left">
                <li><strong>Model Options:</strong> LR-1325E, LR-1530E, LR-2040E, and Customized</li>

                <li><strong>Working Size:</strong>
                  <ul className="list-disc pl-5">
                    <li>LR-1325E: 1300 x 2500 mm</li>
                    <li>LR-1530E: 1500 x 3000 mm</li>
                    <li>LR-2040E: 2000 x 4000 mm</li>
                    <li>Customized sizes available on request</li>
                  </ul>
                </li>

                <li><strong>Z-Axis Clearance:</strong> 200 mm (customizable for different applications)</li>

                <li><strong>Repeatability:</strong> ±0.03 mm for precise positioning and accuracy</li>

                <li><strong>Drive System:</strong>
                  <ul className="list-disc pl-5">
                    <li>X and Y-Axis: Helical rack and pinion for smooth and durable operation</li>
                    <li>Z-Axis: Ball screw drive for accurate vertical movement</li>
                  </ul>
                </li>

                <li><strong>Guide Rails:</strong> 20/25 mm linear ball-bearing profile rails (HIWIN/PMI/THK) for stable and accurate guidance</li>

                <li><strong>Motor & Drive:</strong>
                  <ul className="list-disc pl-5">
                    <li>Standard: Leadshine stepper motor</li>
                    <li>Optional: YASKAWA, DELTA, or FUJI servo motor for high precision and performance</li>
                  </ul>
                </li>

                <li><strong>Spindle Power:</strong> Available from 3KW to 7.5KW for various cutting applications, with liquid cooling option for continuous operation</li>

                <li><strong>Control Software:</strong> TNG control software for user-friendly operation</li>

                <li><strong>Working Speed:</strong> Adjustable speed ranging from 200 to 300 IPM, allowing efficient operation for different materials</li>

                <li><strong>Rapid Speed:</strong> Maximum rapid speed of 500 IPM for high-speed positioning</li>

                <li><strong>Resolution:</strong> Approximately 0.05 mm for high-detail work on fine materials</li>

                <li><strong>Additional Features:</strong>
                  <ul className="list-disc pl-5">
                    <li>Coolant pump and tank included to maintain optimal spindle temperature</li>
                    <li>Power Requirement: 220V, single phase, adaptable for most workshop setups</li>
                    <li>Safety Features: Equipped with limit switches on X, Y, Z axes and an emergency stop (E-Stop) for operator safety</li>
                    <li>Maintenance: Includes a manual way oiler for easy lubrication of components</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

const CO2LaserMachine = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-3 md:p-4 rounded-3xl mb-4"
          >
            <h2 className="text-3xl text-center font-bold" style={{ color: "#289FD2" }}>CO2 Laser Cutting and Engraver Machine</h2>
            <p className="text-l text-center font-extralight text-black">Bring your ideas
              to life with Laser world engraver!</p>
            <img
              src={CO2LaserMachineImage}
              alt="CO2LaserMachine"
              height="200"
              width="200"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            <img
              src={lms1}
              alt="CO2LaserMachine"
              height="200"
              width="200"
              className="h-full w-full mx-auto object-contain py-10"
            />

            <div className="space-y-4 text-black">
              <h2 className="text-2xl font-bold">CO₂ Laser Machine Specifications</h2>
              <ul className="list-disc pl-5 space-y-2 text-left">

                <li><strong>Color Options:</strong> Blue, Gray</li>

                <li><strong>Machine Dimensions:</strong> 74.8 x 55.9 x 40.2 inches (190 x 142 x 102 cm)</li>

                <li><strong>Engraving Area:</strong> 51.2 x 35.4 inches (1300 x 900 mm), providing ample workspace for large materials</li>

                <li><strong>Pass-Through Size:</strong> Front & Back 55.1 x 1.5 inches (1400 x 40 mm), allowing material pass-through for extended workpieces</li>

                <li><strong>Rated Power:</strong> 130W, delivering high-performance laser output</li>

                <li><strong>Estimated Service Life:</strong> 12,000 hours, ensuring reliable operation over time</li>

                <li><strong>Engraving Speed:</strong> Max. speed of 39.4 inches per second (1000 mm/s) for efficient, high-speed processing</li>

                <li><strong>Engraving Depth:</strong> Max. depth of 0.4 inches (10 mm) depending on material</li>

                <li><strong>Laser Tube Specifications:</strong>
                  <ul className="list-disc pl-5">
                    <li><strong>Length:</strong> 65 inches (1650 mm)</li>
                    <li><strong>Diameter:</strong> 2.8 inches (70 mm)</li>
                  </ul>
                </li>

                <li><strong>Compatible Operating Systems:</strong> Windows 2000, XP, Vista, 7, 8, 10</li>

                <li><strong>Bundled Software:</strong> RDWorks for immediate functionality</li>

                <li><strong>Compatible Software:</strong> LightBurn, CorelLaser (not included)</li>

                <li><strong>Supported Image Formats:</strong> .ai, .bmp, .dxf, .gif, .hpgl, .jpeg, .pdf, .plt, .png, .rd, .svg, .tiff, .tga for versatile design support</li>

                <li><strong>Data Transmission Options:</strong> USB Cable, Ethernet Cable, USB Flash Drive</li>

                <li><strong>Certifications:</strong> CE, FDA for compliance with safety and quality standards</li>

                <li><strong>Net Weight:</strong> 793.7 lbs. (360 kg)</li>

                <li><strong>Warranty:</strong> 2 Years (6 months for parts)</li>

                <li><strong>Package Includes:</strong> Full set of tools, maintenance kit, and quick-start guide</li>
              </ul>
            </div>
            <img
              src={lms2}
              alt="CO2LaserMachine"
              height="200"
              width="200"
              className="h-full w-full mx-auto object-contain pt-10"
            />
          </div>
        );
      })}
    </>
  );
};

const FiberLaserMetalCutting = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-3 md:p-4 rounded-3xl mb-4"
          >
            <h2 className="text-3xl text-center font-bold" style={{ color: "#289FD2" }}>Fiber Laser Cutting Machine</h2>
            <p className="text-l text-center font-extralight text-black">Bring your ideas
              to life with Fiber Laser Cutting Machine!</p>
            <img
              src={fiberLaserMachine}
              alt="Fiber Laser"
              height="200"
              width="200"
              className="md:w-1/1.4 md:h-1/1.4 h-full w-full mx-auto object-contain"
            />
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <img
                src={fiberLaserMachineApplication}
                alt="Fiber Laser"
                height="200"
                width="200"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain p-10"
              />
              <div className="">
                <h2 className="text-3xl text-center font-bold text-black">Laser World's - Flexible Component Options</h2>
                <p className="text-l text-center font-extralight text-black">Choose from a range of laser source, control system, and laser cut head for a machine that's tailored just for you.</p>
              </div>
            </div>
            <h2 className="text-3xl text-center font-bold" style={{ color: "#000" }}>Metal Laser Cutting Machine Features</h2>
            <img
              src={fiberLaserMachineFeatures}
              alt="Fiber Laser"
              height="200"
              width="200"
              className="h-full w-full mx-auto object-contain p-5"
            />
            <div className="space-y-4 text-black">
              <h2 className="text-2xl font-bold">Technical Parameters</h2>
              <ul className="list-disc pl-5 space-y-2 text-left">
                <li><strong>Color Options:</strong> Blue, Gray</li>
                <li><strong>Laser Power:</strong> 1000W, 1500W, 2000W, 3000W</li>
                <li><strong>Working Area:</strong> 3050 mm x 1530 mm</li>
                <li><strong>Machine Dimensions:</strong> 4480 x 2766 x 1950 mm</li>
                <li><strong>Repeat Positioning Accuracy:</strong> ±0.02 mm</li>
                <li><strong>X/Y Axis Positioning Accuracy:</strong> ±0.03 mm</li>
                <li><strong>Maximum Speed:</strong> 30 m/min</li>
                <li><strong>Voltage and Frequency:</strong> 220V/380V, 50Hz/60Hz</li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

const WoodLathe = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-3 md:p-4 rounded-3xl mb-4"
          >
            <h2 className="text-3xl text-center font-bold" style={{ color: "#289FD2" }}>CO2 Laser Cutting and Engraver Machine</h2>
            <p className="text-l text-center font-extralight text-black">Bring your ideas
              to life with Laser world engraver!</p>
            <img
              src={CO2LaserMachineImage}
              alt="CO2LaserMachine"
              height="200"
              width="200"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            <img
              src={lms1}
              alt="CO2LaserMachine"
              height="200"
              width="200"
              className="h-full w-full mx-auto object-contain py-10"
            />

            <div className="space-y-4 text-black">
              <h2 className="text-2xl font-bold">CO₂ Laser Machine Specifications</h2>
              <ul className="list-disc pl-5 space-y-2 text-left">

                <li><strong>Color Options:</strong> Blue, Gray</li>

                <li><strong>Machine Dimensions:</strong> 74.8 x 55.9 x 40.2 inches (190 x 142 x 102 cm)</li>

                <li><strong>Engraving Area:</strong> 51.2 x 35.4 inches (1300 x 900 mm), providing ample workspace for large materials</li>

                <li><strong>Pass-Through Size:</strong> Front & Back 55.1 x 1.5 inches (1400 x 40 mm), allowing material pass-through for extended workpieces</li>

                <li><strong>Rated Power:</strong> 130W, delivering high-performance laser output</li>

                <li><strong>Estimated Service Life:</strong> 12,000 hours, ensuring reliable operation over time</li>

                <li><strong>Engraving Speed:</strong> Max. speed of 39.4 inches per second (1000 mm/s) for efficient, high-speed processing</li>

                <li><strong>Engraving Depth:</strong> Max. depth of 0.4 inches (10 mm) depending on material</li>

                <li><strong>Laser Tube Specifications:</strong>
                  <ul className="list-disc pl-5">
                    <li><strong>Length:</strong> 65 inches (1650 mm)</li>
                    <li><strong>Diameter:</strong> 2.8 inches (70 mm)</li>
                  </ul>
                </li>

                <li><strong>Compatible Operating Systems:</strong> Windows 2000, XP, Vista, 7, 8, 10</li>

                <li><strong>Bundled Software:</strong> RDWorks for immediate functionality</li>

                <li><strong>Compatible Software:</strong> LightBurn, CorelLaser (not included)</li>

                <li><strong>Supported Image Formats:</strong> .ai, .bmp, .dxf, .gif, .hpgl, .jpeg, .pdf, .plt, .png, .rd, .svg, .tiff, .tga for versatile design support</li>

                <li><strong>Data Transmission Options:</strong> USB Cable, Ethernet Cable, USB Flash Drive</li>

                <li><strong>Certifications:</strong> CE, FDA for compliance with safety and quality standards</li>

                <li><strong>Net Weight:</strong> 793.7 lbs. (360 kg)</li>

                <li><strong>Warranty:</strong> 2 Years (6 months for parts)</li>

                <li><strong>Package Includes:</strong> Full set of tools, maintenance kit, and quick-start guide</li>
              </ul>
            </div>
            <img
              src={lms2}
              alt="CO2LaserMachine"
              height="200"
              width="200"
              className="h-full w-full mx-auto object-contain pt-10"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "CO2 Laser Machine Cutting",
    title: "CO2 LASER  CUTTING  MACHINE &  ENGRAVING",
    src: prod3,
    content: <CO2LaserMachine />,
  },
  {
    category: "CNC Router Machine",
    title: "Mini CNC  Router",
    src: prod2,
    content: <MiniCNCContent />,
  },
  {
    category: "Laser + Plotter cutting",
    title: "LASER  WITH PLOTTER  CUTTER",
    src: prod4,
    content: <LaserPlotterMachine />,
  },

  {
    category: "CNC Router Machine",
    title: "CNC ROUTER  MACHINE",
    src: prod1,
    content: <CNCRouter />,
  },
  {
    category: "CO2 Laser Machine Cutting",
    title: "Fiber Laser  Cutting  Machine",
    src: prod1,
    content: <FiberLaserMetalCutting />,
  },
  {
    category: "CNC Router Machine",
    title: "Wood  Lathe",
    src: prod1,
    content: <CNCRouter />,
  },
];
