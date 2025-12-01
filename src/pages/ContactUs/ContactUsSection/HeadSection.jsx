import React, { useEffect, useState } from "react";

const HeadSection = ({
  slides,
  duration = 4500,
  fadeDuration = 300,
  opacity = 1,
}) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const current = slides[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, fadeDuration);
    }, duration);
    return () => clearInterval(interval);
  }, [slides, duration, fadeDuration]);

  return (
    <section
      style={{
        backgroundImage: `url(${current.BgImg})`,
        backgroundPosition: "top",   
        opacity: fade ? opacity : 0.7,
        transition: `opacity ${fadeDuration}ms ease-in-out`,
      }}
      className="bg-cover bg-center bg-no-repeat mt-28 lg:h-screen max-h-[800px]"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="space-y-5 xl:w-[80%] py-16 lg:py-0 md:py-24 h-full flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-start font-black text-white uppercase">
            {current.MainText}
          </h1>
          <h2 className="text-white lg:w-[90%]">{current.SubText}</h2>
        </div>
      </div>
    </section>
  );
};

export default HeadSection;
