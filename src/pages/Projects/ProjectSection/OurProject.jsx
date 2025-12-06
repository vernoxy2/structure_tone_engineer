import React, { useState } from "react";
import CommProj from "../../../assets/ProjectPageImgs/CommProj.webp";
import ResProj from "../../../assets/ProjectPageImgs/ResProj.webp";
import IndProj from "../../../assets/ProjectPageImgs/IndProj.webp";
import svg1 from "../../../assets/HomePageImgs/svg1.svg";
import svg2 from "../../../assets/HomePageImgs/svg2.svg";

const OurProject = () => {
  const [activeTab, setActiveTab] = useState("All");

  const DataImage = [
    {
      id: 1,
      img: CommProj,
      category: "Commercial Project",
      text: "A modern, sustainable commercial space combining smart design, natural light, and efficiency to deliver flexible, comfortable, future-ready workspaces.",
    },
    {
      id: 2,
      img: ResProj,
      category: "Residential Project",
      text: "This residence merges modern, elegant residence with light-filled spaces, warm courtyards, sustainable materials, and refined details for comfortable living.",
    },
    {
      id: 3,
      img: IndProj,
      category: "Industrial Project",
      text: "This industrial facility blends efficiency with durability, featuring open, well-planned spaces. Natural light, ventilation, and robust materials create a practical and enduring environment.",
    },
  ];

  const filteredImages =
    activeTab === "All"
      ? DataImage
      : DataImage.filter((item) => item.category === activeTab);

  return (
    <section className="py-10">
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
        <div className="flex flex-wrap justify-center gap-10 mt-12 mb-8 rounded-sm">
          {[
            "All",
            "Commercial Project",
            "Residential Project",
            "Industrial Project",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold border rounded transition-colors duration-300 ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "bg-white text-gray-800 hover:bg-primary hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-sm shadow-md"
            >
              <img
                src={item.img}
                alt={item.category}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Category label */}
              <div className="absolute top-2 right-2 bg-white bg-opacity-80 px-2 py-1 rounded font-semibold text-sm z-10">
                {item.category}
              </div>

              {/* Hover text overlay */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-11/12 md:w-10/12 max-h-40 bg-primary/70 text-white p-3 text-center translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out rounded z-20">
                <p className="text-xs md:text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProject;
