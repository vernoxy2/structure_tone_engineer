import React, {  } from "react";
import headImg from "../../../assets/HomePageImgs/Headimg.png";

const Head = () => { 
  return (
    <div
  style={{
    backgroundImage: `url(${headImg})`,
  }}
  className="bg-cover bg-center h-[320px] sm:h-[400px] md:h-[480px] lg:h-[]"
></div>

  );
};

export default Head;
