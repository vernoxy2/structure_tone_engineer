import React, { useEffect } from "react";
import aboutUsCount from "../../../assets/HomePageImgs/Count.svg";
import aboutUsSvg from "../../../assets/HomePageImgs/aboutUs.svg";
import aboutUs from "../../../assets/HomePageImgs/aboutUs.png";
import aboutUsOver from "../../../assets/HomePageImgs/aboutUsOver.png";
import BaseLine from "../../../component/BaseLine";
import PrimaryBtn from "../../../component/PrimaryBtn";
import Title from "../../../component/Title";
import LazyImage from "../../../component/LazyImage";

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 50); // Update every 50ms

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(counter);
  }, [target, duration]);

  return <span>{count}+</span>;
};

const Who = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  ">
        {/* clo-1 */}
        <div data-aos="zoom" className="flex flex-col justify-center relative">
          <LazyImage src={aboutUs} alt="aboutUs" />
          <div data-aos="zoom-in" data-aos-delay="300" className="absolute -top-1 right-20 h-44 lg:h-auto">
            <LazyImage src={aboutUsOver} alt="aboutUs" />
            <div className="flex flex-col items-center justify-end py-10 absolute inset-0 space-y-1">
              <LazyImage src={aboutUsSvg} alt="" />
              <h1 className="text-[#162C3E] pt-2">
                <Counter target={1500} />
              </h1>
              <p className="font-bold text-xl text-center">Project Completed</p>
            </div>
          </div>
        </div>
        {/* col-2 */}
        <div className="space-y-3 lg:space-y-6 lg::w-11/12 2xl:w-5/6 ml-auto ">
          <Title AOS="fade-right">About Us</Title>
          <h1 data-aos="fade-right" className="text-primary text-start">
            Who We Are
          </h1>
          <p data-aos="fade-right" className=" lg:w-[90%]">
            Our team of structural engineers delivers innovative and sustainable
            engineering solutions for residential, commercial, and industrial
            projects. We focus on precision, collaboration, and quality to
            create structures that stand the test of time.
          </p>

          <div className="md:flex space-y-2.5 items-center gap-2">
            <div  data-aos="flip-left" className="bg-cover bg-center flex items-start justify-start bg-white">
              <h1
                className="text-7xl lg:text-9xl font-bold text-transparent bg-clip-text"
                style={{ backgroundImage: `url(${aboutUsCount})` }}
              >
                <Counter target={10} />
              </h1>
            </div>

            <BaseLine className="w-1/2 md:w-[2px] md:h-12 bg-black" />
            <div>
              <h2 data-aos="fade-right" className="text-xl font-bold">
                Year's Of Working <br /> Experience in Our Company
              </h2>
            </div>
          </div>
          <PrimaryBtn data-aos="zoom-in">Know More Services</PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default Who;
