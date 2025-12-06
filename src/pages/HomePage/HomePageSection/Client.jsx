import React, { useState, useEffect } from "react";
import svg1 from "../../../assets/HomePageImgs/svg1.svg";
import svg2 from "../../../assets/HomePageImgs/svg2.svg";
// import MaskGroup1 from "../../../assets/HomePageImgs/MaskGroup1.svg";
// import MaskGroup2 from "../../../assets/HomePageImgs/MaskGroup2.svg";

const testimonials = [
  {
    id: 1,
    text: "Working with them was seamless, professional, and exceeded expectations every step of the way.",
    name: "Ritik Desai",
    role: "Contractor",
    // img: MaskGroup1,
  },
  {
    id: 2,
    text: "Exceptional service, transparent communication, and outstanding project execution from start to finish.",
    name: "Ananya Sharma",
    role: "Contractor",
    // img: MaskGroup2,
  },
  {
    id: 3,
    text: "Working with them was seamless, professional, and exceeded expectations every step of the way.",
    name: "Vaibhav Chauhan",
    role: "Contractor",
    // img: MaskGroup1,
  },
  {
    id: 4,
    text: "Exceptional service, transparent communication, and outstanding project execution from start to finish.",
    name: "Manisha Chauhan",
    role: "Contractor",
    // img: MaskGroup2,
  },
  {
    id: 5,
    text: "Working with them was seamless, professional, and exceeded expectations every step of the way.",
    name: "priya vashisht",
    role: "Contractor",
    // img: MaskGroup1,
  },
  {
    id: 6,
    text: "Exceptional service, transparent communication, and outstanding project execution from start to finish.",
    name: "simran roy",
    role: "Contractor",
    // img: MaskGroup2,
  },
];

const Client = () => {
  const [index, setIndex] = useState(0);
  // control whether transform has transition or not
  const [withTransition, setWithTransition] = useState(true);

  // Group into slides of 2 items
  const slides = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    slides.push(testimonials.slice(i, i + 2));
  }

  // duplicate slides for smooth looping
  const loopSlides = [...slides, ...slides];
  const total = slides.length; // original count of slides (before duplication)
  const transitionDurationMs = 700; // must match the duration in your "duration-700" (700ms)

  // Auto slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        // advance by 1; allow it to reach the duplicated end
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // When index reaches the duplicated half (== total), wait for the transition to finish,
  // then snap back to 0 WITHOUT transition, then re-enable transition.
  useEffect(() => {
    if (index === total) {
      // let the current transition finish (transitionDurationMs),
      // then disable transition and jump to 0 instantly
      const t1 = setTimeout(() => {
        setWithTransition(false); // disable transition so jump is instant
        setIndex(0); // snap back to start without animation

        // small tick to let DOM update, then re-enable transitions for future slides
        const t2 = setTimeout(() => {
          setWithTransition(true);
        }, 50);

        // cleanup inner timeout if needed
        return () => clearTimeout(t2);
      }, transitionDurationMs);

      return () => clearTimeout(t1);
    }
    // no cleanup needed if index !== total
    return;
  }, [index, total]);

  // dot click (go to a particular slide index)
  const handleDotClick = (i) => {
    // if user clicks a dot we want transition enabled and index set to that slide
    setWithTransition(true);
    setIndex(i);
  };

  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-10 py-10">
        <div className="md:col-span-3">
          <h2 className="uppercase font-spaceGrotesk font-bold text-xl flex gap-2 text-[#162C3E] items-center">
            <img src={svg1} alt="aboutUs" />
            CLIENT TESTIMONIALS
            <img src={svg2} alt="aboutUs" />
          </h2>

          <h1 className="text-primary text-start font-bold font-spaceGrotesk leading-tight text-5xl md:text-4xl mt-7">
            See What Our Clients Are Saying
          </h1>

          {/* DESKTOP DOTS */}
          <div className="hidden md:flex gap-5 mt-8">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => handleDotClick(i)}
                className={`w-3 h-3 border rounded-full cursor-pointer transition-all  ${
                  (index % total) === i ? "bg-[#162C3E]" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden order-1 md:order-2 md:col-span-8 ">
          <div
            // toggle inline transition on/off so we can snap without animation
            className="flex"
            style={{
              transform: `translateX(-${index * 100}%)`,
              transition: withTransition ? `transform ${transitionDurationMs}ms ease` : "none",
            }}
          >
            {loopSlides.map((pair, i) => (
              <div
                key={i}
                className="min-w-full  bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
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
                    <p className="text-[#162C3E] font-poppins text-base">{item.role}</p>

                    {/* <div className="absolute bottom-6 right-6 border-4 border-primary rounded-sm p-1 bg-white">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="rounded-sm object-cover"
                      />
                    </div> */}
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
                className={`w-3 h-3  border rounded-sm cursor-pointer transition-all ${
                  (index % total) === i ? "bg-[#162C3E]" : "bg-gray-300"
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
