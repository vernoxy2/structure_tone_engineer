import React from "react";
import WhatWeDoImg from "../../../assets/HomePageImgs/WhatWeDo/bg_img.png";
import card1 from "../../../assets/HomePageImgs/WhatWeDo/card1.svg";
import card2 from "../../../assets/HomePageImgs/WhatWeDo/card2.svg";
import card3 from "../../../assets/HomePageImgs/WhatWeDo/card3.svg";
import card4 from "../../../assets/HomePageImgs/WhatWeDo/card4.svg";
import card5 from "../../../assets/HomePageImgs/WhatWeDo/card5.svg";
import svg1 from "../../../assets/HomePageImgs/svg1.svg";
import svg2 from "../../../assets/HomePageImgs/svg2.svg";
import PrimaryBtn from "../../../component/PrimaryBtn";
import img1 from "../../../assets/HomePageImgs/WhatWeDo/img1.svg";
import img2 from "../../../assets/HomePageImgs/WhatWeDo/img2.svg";
import img3 from "../../../assets/HomePageImgs/WhatWeDo/img3.svg";
import img4 from "../../../assets/HomePageImgs/WhatWeDo/img4.svg";
import img5 from "../../../assets/HomePageImgs/WhatWeDo/img5.svg";
import BaseLine from "../../../component/BaseLine";
import Title from "../../../component/Title";
import LazyImage from "../../../component/LazyImage";

const cardData = [
  {
    id: 1,
    img: card1,
    image: img1,
    title: "Structural Design and Analysis",
    subText:
      "Innovative structural designs supported by precise analytical methods.",
  },
  {
    id: 2,
    img: card2,
    image: img2,
    title: "Industrial, Commercial and Residential Building Design",
    subText:
      "Versatile design expertise delivering smart solutions across all building sectors.",
  },
  {
    id: 3,
    img: card3,
    image: img3,
    title: "Project Management and Consultation",
    subText:
      "Expert coordination and advisory support for every stage of your project.",
  },
  {
    id: 4,
    img: card4,
    image: img4,
    title: "Foundation Engineering and Soil-Structure Interaction",
    subText:
      "Reliable foundation solutions designed through precise soil-structure analysis.",
  },
  {
    id: 5,
    img: card5,
    image: img5,
    title: "Seismic Retrofitting and Earthquake Resistance",
    subText:
      "Strengthening structures with modern solutions for enhanced earthquake safety.",
  },
];

const WhatWeDo = () => {
  return (
    <section
      className="bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${WhatWeDoImg})` }}
    >
      <div className="container grid grid-col-1 xl:grid-cols-3 md:grid-cols-2 gap-8 py-10">
        {/* LEFT SECTION */}
        <div className="space-y-3 flex flex-col justify-between">
          <Title AOS={"fade-right"}>What We Do</Title>

          <h1 data-aos="fade-right" className="text-primary text-start text-5xl">
            Our Services that we provide
          </h1>

          <p data-aos="fade-right" className="">
            Delivering clean, user-focused digital experiences backed by seven
            years’ expertise.
          </p>

          <PrimaryBtn data-aos="zoom-in" className="w-fit">Know More Services</PrimaryBtn>
        </div>

        {cardData.map((card) => (
          <div data-aos="flip-up" key={card.id} className="p-7 bg-white rounded-lg shadow-md group">
            <div className="flex items-center justify-between ">
              <LazyImage
                src={card.img}
                alt={card.title}
                className="w-20 h-20 mb-4 ms-14 "
              />
              <BaseLine className="bg-[#DEDEDE] group-hover:bg-primary duration-300 transition-colors " />
            </div>
            <div className="flex flex-row mt-4">
              <img src={card.image} alt={card.title} className="w-12 h-14" />

              <div className="ms-3 ">
                <h3 className="text-2xl font-bold text-primary leading-6">
                  {card.title}
                </h3>
                <p className="text-base mt-2.5 text-[#162C3E] font-normal tracking-tight">
                  {card.subText}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
