import React from "react";
import aboutUs from "../../../assets/HomePageImgs/aboutUs.png";
import BaseLine from "../../../component/BaseLine";
import PrimaryBtn from "../../../component/PrimaryBtn";
import Title from "../../../component/Title";

const Who = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  ">
        {/* clo-1 */}
        <div className="flex flex-col justify-center ">
          <img src={aboutUs} alt="aboutUs" />
        </div>
        {/* col-2 */}
        <div className="space-y-3 lg:space-y-6 lg::w-11/12 2xl:w-5/6 ml-auto ">
          <Title AOS="fade-right">About Us</Title>
          <h1 data-aos="fade-right" className="text-primary text-start">Who We Are</h1>
          <p data-aos="fade-right" className=" lg:w-[90%]">
            Our team of structural engineers delivers innovative and sustainable
            engineering solutions for residential, commercial, and industrial
            projects. We focus on precision, collaboration, and quality to
            create structures that stand the test of time.
          </p>

          <div className="md:flex space-y-2.5 items-center gap-2">
            <div className="text-7xl lg:text-9xl font-bold">10+</div>
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
