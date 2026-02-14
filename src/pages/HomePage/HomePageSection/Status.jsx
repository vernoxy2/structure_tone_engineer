import React, { useEffect, useRef } from "react";
import svg1 from "../../../assets/HomePageImgs/svg1.svg";
import svg2 from "../../../assets/HomePageImgs/svg2.svg";
import PrimaryBtn from "../../../component/PrimaryBtn";
import StatusBgImg from "../../../assets/HomePageImgs/StatusBgImg.png";
import Frame1 from "../../../assets/HomePageImgs/Frame1.svg";
import Frame2 from "../../../assets/HomePageImgs/Frame2.svg";
import Frame3 from "../../../assets/HomePageImgs/Frame3.svg";
import Frame4 from "../../../assets/HomePageImgs/Frame4.svg";
import BaseLine from "../../../component/BaseLine";
import Title from "../../../component/Title";
import LazyImage from "../../../component/LazyImage";

const Count = [
  { id: 1, count: 10, suffix: "+", text: "Years Experience", icon: Frame1 },
  { id: 2, count: 15, suffix: "+", text: "Team Members", icon: Frame2 },
  { id: 3, count: 150, suffix: "+", text: "Projects Completed", icon: Frame3 },
  { id: 4, count: 100, suffix: "+", text: "Satisfied Clients", icon: Frame4 },
];

const Status = () => {
  const refs = useRef([]);
  const animatedRef = useRef(Array(Count.length).fill(false)); // Track animated counters

  // Start animation for each counter
  const startCounter = (index) => {
    const end = Count[index].count;
    const duration = 500; // Faster animation
    const startTime = performance.now();

    const step = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * end);

      if (refs.current[index]) {
        refs.current[index].textContent = value;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // mark as animated when finished
        animatedRef.current[index] = true;
      }
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index"));

          if (entry.isIntersecting && !animatedRef.current[index]) {
            startCounter(index);
          }
        });
      },
      { threshold: 0.4 }
    );
    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []); // run only once

  return (
    <section
      className="py-16 bg-cover bg-center  bg-no-repeat"
      style={{ backgroundImage: `url(${StatusBgImg})` }}
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 md:w-[90%] lg:w-full md:ml-0 lg:ml-auto">
        {/* LEFT SECTION */}
        <div className="space-y-5">
          <Title AOS={"fade-right"} className={"text-white"}>COMPANY’S STATUS</Title>

          <h1 data-aos="fade-right" className="text-primary text-start font-bold font-spaceGrotesk leading-tight text-4xl">
            Our Designs Set The Highest Standards
          </h1>

          <p data-aos="fade-right" className="md:text-sm text-white font-poppins lg:w-5/6">
            Our team of structural engineers delivers innovative and sustainable
            engineering solutions for residential, commercial, and industrial
            projects. We focus on precision, collaboration, and quality to
            create structures that stand the test of time.
          </p>

          <PrimaryBtn data-aos="zoom-in" className="px-5 py-4 text-xl font-poppins">
            Contact Now
          </PrimaryBtn>
        </div>

        {/* RIGHT SECTION */}
        <div className="grid md:grid-cols-2 gap-8">
          {Count.map((item, index) => (
            <div data-aos="fade-up" key={item.id} className="text-white space-y-1 flex flex-col">
              <div className="flex items-center justify-between w-[85%] ">
                <BaseLine className="bg-primary"/>
                <LazyImage src={item.icon} alt="icon" className=" scale-110 md:scale-100" />
              </div>
              <h2 className="text-8xl md:text-6xl xl:text-8xl font-semibold flex items-center gap-1">
                <div
                  className="text-outline font-poppins"
                  ref={(el) => (refs.current[index] = el)}
                  data-index={index}
                >
                  {item.count}
                </div>
                <div className="text-outline font-poppins">{item.suffix}</div>
              </h2>
              <p className="text-2xl font-poppins">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Status;
