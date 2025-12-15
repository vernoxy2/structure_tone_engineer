import React, { useState, useEffect } from "react";
import svg1 from "../../../assets/HomePageImgs/svg1.svg";
import svg2 from "../../../assets/HomePageImgs/svg2.svg";
import BgImg from "../../../assets/HomePageImgs/Client/BgImg.png";
import Title from "../../../component/Title";

const testimonials = [
  {
    id: 1,
    text: "Working with them was seamless, professional, and exceeded expectations every step of the way.",
    name: "Ritik Desai",
    role: "Contractor",
  },
  {
    id: 2,
    text: "Exceptional service, transparent communication, and outstanding project execution from start to finish.",
    name: "Ananya Sharma",
    role: "Contractor",
  },
  {
    id: 3,
    text: "Working with them was seamless, professional, and exceeded expectations every step of the way.",
    name: "Vaibhav Chauhan",
    role: "Contractor",
  },
  {
    id: 4,
    text: "Exceptional service, transparent communication, and outstanding project execution from start to finish.",
    name: "Manisha Chauhan",
    role: "Contractor",
  },
  {
    id: 5,
    text: "Working with them was seamless, professional, and exceeded expectations every step of the way.",
    name: "priya vashisht",
    role: "Contractor",
  },
  {
    id: 6,
    text: "Exceptional service, transparent communication, and outstanding project execution from start to finish.",
    name: "simran roy",
    role: "Contractor",
  },
];

const Client = () => {
  const [index, setIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);
  const [slides, setSlides] = useState([]);

  // Group into slides of 1 (mobile) or 2 (md+)
  const getSlides = () => {
    const isMobile = window.innerWidth < 768;
    const sliceSize = isMobile ? 1 : 2;

    const grouped = [];
    for (let i = 0; i < testimonials.length; i += sliceSize) {
      grouped.push(testimonials.slice(i, i + sliceSize));
    }

    return grouped;
  };

  // Create slides on load & resize
  useEffect(() => {
    const updateSlides = () => {
      setSlides(getSlides());
      setIndex(0);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Duplicate slides for smooth looping
  const loopSlides = [...slides, ...slides];
  const total = slides.length;
  const transitionDurationMs = 900;

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  // Infinite loop snap-back
  useEffect(() => {
    if (index === total) {
      const t1 = setTimeout(() => {
        setWithTransition(false);
        setIndex(0);

        const t2 = setTimeout(() => {
          setWithTransition(true);
        }, 50);

        return () => clearTimeout(t2);
      }, transitionDurationMs);

      return () => clearTimeout(t1);
    }
  }, [index, total]);

  const handleDotClick = (i) => {
    setWithTransition(true);
    setIndex(i);
  };

  if (!slides.length) return null;

  return (
    <section
      style={{ backgroundImage: `url(${BgImg})` }}
      className="bg-cover bg-no-repeat bg-center"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 py-10">
        <div className="md:col-span-3">
          <Title>CLIENT</Title>

          <h1 className="text-primary text-start font-bold font-spaceGrotesk leading-tight text-5xl md:text-4xl mt-7">
            See What Our Clients Are Saying
          </h1>

          {/* DESKTOP DOTS */}
          <div className="hidden md:flex gap-5 mt-8">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => handleDotClick(i)}
                className={`w-3 h-3 border rounded-full cursor-pointer transition-all ${
                  index % total === i ? "bg-[#162C3E]" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden order-1 md:order-2 md:col-span-8">
          <div
            className="flex"
            style={{
              transform: `translateX(-${index * 100}%)`,
              transition: withTransition
                ? `transform ${transitionDurationMs}ms ease`
                : "none",
            }}
          >
            {loopSlides.map((pair, i) => (
              <div
                key={i}
                className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
              >
                {pair.map((item, j) => (
                  <div
                    key={j}
                    className="bg-white shadow-md p-7 rounded-sm relative"
                  >
                    <p className="text-[#162C3E] text-lg font-poppins leading-relaxed mb-10">
                      {item.text}
                    </p>

                    <h3 className="font-bold text-primary text-base md:text-xl">
                      {item.name}
                    </h3>
                    <p className="text-[#162C3E] font-poppins text-base">
                      {item.role}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* MOBILE DOTS */}
          <div className="flex md:hidden gap-3 pt-4 justify-center">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => handleDotClick(i)}
                className={`w-3 h-3 border cursor-pointer transition-all rounded-full ${
                  index % total === i ? "bg-[#162C3E]" : "bg-gray-300"
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
