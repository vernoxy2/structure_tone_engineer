import React from "react";
import Vector5 from "../../../assets/ProjectPageImgs/Vector5.svg";

const Header = ({
  slides,
  opacity = 1,
}) => {
  const current = slides[0]; // static slide (no slider)

  return (
    <section
      style={{
        backgroundImage: `url(${current.BgImg})`,
        backgroundPosition: "top",
        opacity: opacity,
      }}
      className="bg-cover bg-center bg-no-repeat lg:h-screen max-h-[546px]"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="space-y-5 xl:w-[80%] py-16 lg:py-0 md:py-24 h-full flex flex-col items-start justify-center">
          <h1 data-aos="fade" className="text-4xl md:text-5xl lg:text-6xl text-start font-bold uppercase text-primary">
            {current.MainText}
          </h1>

          <div data-aos="fade-right" className="flex gap-6">
            <img src={Vector5} alt="" className="h-auto" />
            <p className="text-white lg:w-4/5">
              {current.SubText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
