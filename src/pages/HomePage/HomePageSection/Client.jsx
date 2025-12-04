import React, { useState, useEffect } from "react";
import svg1 from "../../../assets/HomePageImgs/svg1.svg";
import svg2 from "../../../assets/HomePageImgs/svg2.svg";

const testimonials = [
  {
    text: "Working with them was seamless, professional, and exceeded expectations every step of the way.",
    name: "Ritik Desai",
    role: "Contractor",
    img: "https://via.placeholder.com/80"
  },
  {
    text: "Exceptional service, transparent communication, and outstanding project execution from start to finish.",
    name: "Ananya Sharma",
    role: "Contractor",
    img: "https://via.placeholder.com/80"
  }
];

const Client = () => {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (i) => setIndex(i);
  const slide = testimonials[index];

  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SECTION — desktop only ordering */}
        <div className="space-y-5 order-3 md:order-1">
          <h2 className="uppercase font-spaceGrotesk font-bold text-xl flex  gap-2 text-[#162C3E] items-center">
            <img src={svg1} alt="aboutUs" />
            CLIENT TESTIMONIALS
            <img src={svg2} alt="aboutUs" />
          </h2>

          <h1 className="text-primary md:w-5/12 text-start font-bold font-spaceGrotesk leading-tight text-4xl ">
            See What Our Clients Are Saying
          </h1>

          {/* DESKTOP DOTS */}
          <div className="hidden md:flex gap-3 pt-4">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => handleDotClick(i)}
                className={`w-3 h-3 border border-red-600 rounded-sm cursor-pointer transition-all ${
                  index === i ? "bg-[#162C3E]" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION — first on mobile */}
        <div className="transition-all duration-500 order-1 md:order-2">
          <div className="bg-white p-8 rounded-xl shadow">
            <p className="text-[#162C3E] text-lg mb-4">{slide.text}</p>

            <div className="flex items-center gap-4">
              <img
                src={slide.img}
                alt={slide.name}
                className="w-14 h-14 rounded-xl object-cover"
              />

              <div>
                <h3 className="font-bold text-primary">{slide.name}</h3>
                <p className="text-gray-600">{slide.role}</p>
              </div>
            </div>
          </div>

          {/* MOBILE DOTS */}
          <div className="flex md:hidden gap-3 pt-4 justify-center">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => handleDotClick(i)}
                className={`w-3 h-3 border border-red-600 rounded-sm cursor-pointer transition-all ${
                  index === i ? "bg-[#162C3E]" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Client;
