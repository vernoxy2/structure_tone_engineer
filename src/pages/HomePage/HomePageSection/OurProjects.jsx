import React from "react";
import svg1 from "../../../assets/HomePageImgs/svg1.svg";
import svg2 from "../../../assets/HomePageImgs/svg2.svg";
import ProjectImg from "../../../assets/HomePageImgs/Project/backimg.png";
import content1 from "../../../assets/HomePageImgs/Project/content1.webp";
import content2 from "../../../assets/HomePageImgs/Project/content2.webp";
import content3 from "../../../assets/HomePageImgs/Project/content3.webp";
import arrow from "../../../assets/HomePageImgs/Project/arrow.svg";
import plan from "../../../assets/HomePageImgs/Project/plan.svg";

const OurProjects = () => {
  const projectItems = [
    {
      img: content1,
      arrow: arrow,
    },
    {
      img: content2,
      arrow: arrow,
    },
    {
      img: content3,
      arrow: arrow,
    },
  ];

  return (
    <section className="container">
      <div className="">
        <h2 className="uppercase flex gap-2 items-center text-bold justify-center ">
          <img src={svg1} alt="icon" className="item-center" />
          Our Project
          <img src={svg2} alt="icon" />
        </h2>
        <h1 className="mt-3">Project Highlights</h1>
      </div>

      <div
        style={{ backgroundImage: `url(${ProjectImg})` }}
        className="bg-cover bg-no-repeat mt-12 lg:h-[500px] "
      >
        <div className="lg:h-full w-full grid grid-cols-3 border ">
          {projectItems.map((item, index) => (
            <div key={index} className="relative overflow-hidden border ">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover opacity-0 hover:opacity-100 duration-300 transition-opacity"
              />
              <div className="absolute top-0 right-1 text-white flex items-right gap-2">
                <img src={item.arrow} alt="arrow" className="w-44 h-44" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="justify-items-end">
        <img src={plan} alt="plan" />
      </div>
    </section>
  );
};

export default OurProjects;
