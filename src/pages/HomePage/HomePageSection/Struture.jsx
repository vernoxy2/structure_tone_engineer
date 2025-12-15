import React from "react";
import BackImg from "../../../assets/HomePageImgs/BackImg.png";
import StructureImg from "../../../assets/HomePageImgs/StructureImg.webp";
import Image1 from "../../../assets/HomePageImgs/Image1.svg";
import Image2 from "../../../assets/HomePageImgs/Image2.svg";
import Image3 from "../../../assets/HomePageImgs/Image3.svg";
import Image4 from "../../../assets/HomePageImgs/Image4.svg";
import plan from "../../../assets/HomePageImgs/Project/plan.svg";

const DataCard1 = [
  {
    id: 1,
    img: Image1,
    title: "Experienced Team",
    text: "With 8 years of expertise, we handle diverse projects with precision and skill.",
  },
  {
    id: 2,
    img: Image2,
    title: "Client Focused",
    text: "We prioritize your needs, delivering tailored solutions through clear communication and within time.",
  },
];

const DataCard2 = [
  {
    id: 1,
    img: Image3,
    title: "Quality & Safety",
    text: "Committed to the highest safety and quality standards on every project.",
  },
  {
    id: 2,
    img: Image4,
    title: "Innovative Designs",
    text: "We provide creative, efficient, and sustainable engineering solutions.",
  },
];

const Structure = () => {
  return (
    <section
      className="bg-center bg-cover bg-no-repeat py-10 space-y-0 pt-32 relative pb-12"
      style={{ backgroundImage: `url(${BackImg})` }}
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="2500"
        className="justify-items-end absolute right-0 top-24 md:top-20  z-10 hidden md:block"
      >
        <img src={plan} alt="plan" className="h-32" />
      </div>
      <h1 className="text-center text-[#D9D9D9] text-4xl md:text-5xl lg:text-6xl translate-y-14 md:translate-y-16 relative z-0 ">
        Stand Behind Our <br /> Structures
      </h1>

      {/* FIXED RESPONSIVE LAYOUT */}
      <div className="flex flex-col lg:flex-row container mx-auto justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* LEFT CARD COLUMN */}
        <div data-aos="fade-left" className="w-full lg:w-5/12 space-y-4 sm:space-y-6 order-2 lg:order-1">
          {DataCard1.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-5 rounded-xl flex flex-row lg:flex-row-reverse items-center gap-3 sm:gap-4 lg:justify-end xl:w-[85%] 2xl:w-[80%] lg:ml-auto"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0 object-contain"
              />

              {/* TEXT */}
              <div className="flex-1 min-w-0">
                <h3 className="text-primary text-lg sm:text-xl md:text-2xl font-bold lg:text-end text-left break-words">
                  {item.title}
                </h3>
                <p className="text-[#162C3E] text-sm sm:text-base lg:text-end text-left break-words">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER IMAGE */}
        <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="500" className="w-full sm:w-auto lg:w-2/12 flex justify-center order-1 lg:order-2 mb-6 sm:mb-8 lg:mb-0 px-4">
          <img
            src={StructureImg}
            alt="Structure"
            className="h-64 sm:h-80 md:h-96 lg:h-auto max-w-full object-contain relative z-10"
          />
        </div>

        {/* RIGHT CARD COLUMN */}
        <div data-aos="fade-right" className="w-full lg:w-5/12 space-y-4 sm:space-y-6 order-3">
          {DataCard2.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-5 rounded-xl flex items-center gap-3 sm:gap-4 xl:w-[85%] 2xl:w-[80%] lg:mr-auto"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0 object-contain"
              />

              {/* TEXT */}
              <div className="flex-1 min-w-0">
                <h3 className="text-primary text-lg sm:text-xl md:text-2xl font-bold break-words">
                  {item.title}
                </h3>
                <p className="text-[#162C3E] text-sm sm:text-base break-words">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Structure;
