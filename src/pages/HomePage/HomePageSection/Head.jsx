import React, { useEffect } from "react";
import headImg from "../../../assets/HomePageImgs/Headimg.png";


const Head = () => {
  // const current = slides[index];
useEffect(() => {
  console.log(headImg);
  
})
  return (
    <div
      style={{
        backgroundImage: `url(${headImg})`,
      }}
      className="bg-cover mt-28 lg:h-screen max-h-[800px]"
    ></div>
  );
};

export default Head;
