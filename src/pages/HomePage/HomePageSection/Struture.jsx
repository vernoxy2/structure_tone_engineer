import React from "react";
import BackImg from "../../../assets/HomePageImgs/BackImg.png";
import StructureImg from "../../../assets/HomePageImgs/StructureImg.webp";
import Image1 from "../../../assets/HomePageImgs/Image1.svg";
import Image2 from "../../../assets/HomePageImgs/Image2.svg";
import Image3 from "../../../assets/HomePageImgs/Image3.svg";
import Image4 from "../../../assets/HomePageImgs/Image4.svg";

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
      className="bg-center bg-cover bg-no-repeat py-10 space-y-0"
      style={{ backgroundImage: `url(${BackImg})` }}
    >
      <h1 className="text-center text-[#D9D9D9] text-4xl md:text-5xl lg:text-6xl translate-y-14 md:translate-y-16 relative z-0 ">
        Stand Behind Our <br /> Structures
      </h1>

      {/* FIXED RESPONSIVE LAYOUT */}
      <div className="flex flex-col sm:flex-row container mx-auto justify-between items-center">
        {/* LEFT CARD COLUMN */}
        <div className="w-full sm:w-5/12 space-y-6 order-2 sm:order-1">
          {DataCard1.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl flex flex-row sm:flex-row-reverse items-center justify-end gap-4 2xl:w-[80%] ml-auto"
            >
              {/* IMAGE (mobile first) */}
              <img src={item.img} alt="img" className="" />

              {/* TEXT */}
              <div>
                <h3 className="text-primary text-2xl font-bold lg:text-end sm:text-end text-left">
                  {item.title}
                </h3>
                <p className="text-[#162C3E] lg:text-end sm:text-end text-left">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER IMAGE (first on mobile) */}
        <div className="w-full sm:w-2/12 flex justify-center order-1 sm:order-2 mb-6 sm:mb-0 ">
          <img src={StructureImg} alt="" className="h-96 md:h-auto relative z-10 " />
        </div>

        {/* RIGHT CARD COLUMN */}
        <div className="w-full sm:w-5/12 space-y-6 order-3 sm:order-3 ">
          {DataCard2.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl flex items-center justify-end gap-4 2xl:w-[80%] mr-auto"
            >
              <img src={item.img} alt="" />
              <div>
                <h3 className="text-primary text-2xl font-bold">
                  {item.title}
                </h3>
                <p className="text-[#162C3E] text-base">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Structure;
