import React, { useState } from "react";
import CommProj from "../../../assets/ProjectPageImgs/CommProj.webp";
import ResProj from "../../../assets/ProjectPageImgs/ResProj.webp";
import IndProj from "../../../assets/ProjectPageImgs/IndProj.webp";
import svg1 from "../../../assets/HomePageImgs/svg1.svg";
import svg2 from "../../../assets/HomePageImgs/svg2.svg";

const OurProject = () => {
  const [activeTab, setActiveTab] = useState("All");

  const DataImage = [
    { id: 1, img: CommProj, category: "Commercial Project" },
    { id: 2, img: ResProj, category: "Residential Project" },
    { id: 3, img: IndProj, category: "Industrial Project" },
  ];

  const filteredImages =
    activeTab === "All"
      ? DataImage
      : DataImage.filter((item) => item.category === activeTab);

  return (
    <section className="py-10 border">
      <div className="container mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="uppercase flex gap-2 items-center justify-center font-bold text-xl">
          <img src={svg1} alt="icon" className="h-6 w-6" />
          Our Project
          <img src={svg2} alt="icon" className="h-6 w-6" />
        </h2>
        <h1 className="mt-3 text-5xl md:text-4xl font-bold text-primary font-spacegrotesk">
          Quality Projects, Built Right
        </h1>

        {/* Tabs */}
        {/* <div className="flex flex-wrap justify-center gap-20 mt-12 mb-8 rounded-sm"> */}
        <div className="flex flex-wrap justify-center gap-10 mt-12 mb-8 rounded-sm ">
          {["All", "Commercial Project", "Residential Project", "Industrial Project"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold border rounded transition-colors duration-300 ${
                activeTab === tab ? "bg-primary text-white" : "bg-white text-gray-800 hover:bg-primary hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {filteredImages.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-sm shadow-md">
              <img
                src={item.img}
                alt={item.category}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2 bg-white bg-opacity-80 px-2 py-1 rounded font-semibold text-sm">
                {item.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProject;
