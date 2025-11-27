import React from "react";
import svg1 from "../../../assets/HomePageImgs/svg1.svg";
import svg2 from "../../../assets/HomePageImgs/svg2.svg";

const OurProjects = () => {
  return (
    <section className="container">
      <div className="border">
        <h2 className="uppercase flex gap-2 items-center text-bold">
          <img src={svg1} alt="icon" />
          What We Do
          <img src={svg2} alt="icon" />
        </h2>
        <h1>Project Highlights</h1>
      </div>
      <div></div>
    </section>
  );
};

export default OurProjects;
