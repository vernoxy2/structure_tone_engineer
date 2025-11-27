import React, {  } from "react";
import headImg from "../../../assets/HomePageImgs/Headimg.png";


const Head = () => {
  // const current = slides[index];
  return (
    <div
      style={{
        backgroundImage: `url(${headImg})`,
      }}
      className="bg-cover bg-center mt-35 lg:h-screen  "
    ></div>
  );
};

export default Head;
