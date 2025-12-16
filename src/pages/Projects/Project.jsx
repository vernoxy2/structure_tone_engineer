import React from "react";
import HeadImg from "../../assets/ServicePageImgs/HeadImg.webp";
import Header from "./ProjectSection/Header";
import OurProject from "./ProjectSection/OurProject";

const Project = () => {
  const slides = [
    {
      BgImg: HeadImg,
      MainText: "Projects",
      SubText: (
        <>
         We design and deliver high-quality engineering projects with precision, durability, and client focused solutions.
        </>
      ),
    },
  ];

  return (
    <div>
      <Header slides={slides} />
      <OurProject/>
    </div>
  );
};

export default Project;
