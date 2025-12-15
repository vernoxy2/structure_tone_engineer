import React from "react";
import svg1 from "../../../assets/HomePageImgs/svg1.svg";
import svg2 from "../../../assets/HomePageImgs/svg2.svg";
import ProjectImg from "../../../assets/HomePageImgs/Project/backimg.png";
import content1 from "../../../assets/HomePageImgs/Project/content1.webp";
import content2 from "../../../assets/HomePageImgs/Project/content2.webp";
import content3 from "../../../assets/HomePageImgs/Project/content3.webp";
import arrow from "../../../assets/HomePageImgs/Project/arrow.svg";
import Title from "../../../component/Title";

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
    <section className="container -mb-36 relative z-10">
      <div className="mb-8">
        <Title AOS={"zoom-in"} className="justify-center">Our Projects</Title>
        <h1 data-aos="zoom-out" className="mt-3">Project Highlights</h1>
      </div>

      <div
      data-aos="fade-up"
        style={{ backgroundImage: `url(${ProjectImg})` }}
        className="bg-cover bg-bottom-left bg-no-repeat lg:h-[525px]  "
      >
        <div className="lg:h-full w-full grid grid-cols-1 md:grid-cols-3  ">
          {projectItems.map((item, index) => (
            <div key={index} className="relative overflow-hidden border group ">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 duration-300 transition-opacity"
              />
              <div className="absolute top-0 right-1 text-white flex items-right gap-2  group-hover:opacity-100">
                <img src={item.arrow} alt="arrow" className="w-44 h-44 " />
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default OurProjects;
