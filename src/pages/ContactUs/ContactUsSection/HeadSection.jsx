import React, { useEffect, useState } from "react";
import Vector5 from "../../../assets/ProjectPageImgs/Vector5.svg";

const HeadSection = ({
  slides,
  duration = 4500,
  fadeDuration = 1000,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, duration);

    return () => clearInterval(interval);
  }, [slides.length, duration]);

  return (
    <section className="relative lg:h-screen max-h-[546px] overflow-hidden space-y-0 bg-black">
      {/* SLIDES */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-top bg-no-repeat transition-all ease-in-out"
          style={{
            backgroundImage: `url(${slide.BgImg})`,
            opacity: i === index ? 1 : 0,
            transform:
              i === index ? "translateX(0)" : "translateX(0)",
            transitionDuration: `${fadeDuration}ms`,
          }}
        />
      ))}

      {/* CONTENT */}
      <div className="relative z-10 container grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="space-y-5 xl:w-[80%] py-16 lg:py-0 md:py-24 h-full flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary uppercase">
            {slides[index].MainText}
          </h1>

          <div className="flex gap-6">
            <img src={Vector5} alt="" />
            <h2 className="text-white lg:w-[90%]">
              {slides[index].SubText}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadSection;
