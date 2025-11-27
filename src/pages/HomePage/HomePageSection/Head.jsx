import React, {  } from "react";
import headImg from "../../../assets/HomePageImgs/Headimg.png";


const Head = () => {
  // const current = slides[index];

  return (
    <div
      style={{
        backgroundImage: `url(${headImg})`,
      }}
      className="bg-cover bg-center mt-28 h-64 sm:h-80 md:h-[500px] lg:h-screen max-h-[750px]"
    ></div>
  );
};

export default Head;
