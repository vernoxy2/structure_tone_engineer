import React from "react";
import svg1 from "./../assets/HomePageImgs/svg1.svg";
import svg2 from "./../assets/HomePageImgs/svg2.svg";
import LazyImage from "./LazyImage";

const Title = ({ children, className, AOS }) => {
  return (
    <h2 data-aos={AOS} className={`uppercase font-bold text-xl flex gap-2 ${className}`}>
      <LazyImage src={svg1} alt="aboutUs" />
      {children}
      <LazyImage src={svg2} alt="aboutUs" />
    </h2>
  );
};

export default Title;
