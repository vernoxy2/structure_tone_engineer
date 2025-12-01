import React from "react";
import aboutUs from "../../../assets/HomePageImgs/AboutUs.png";
import svg1 from "../../../assets/HomePageImgs/svg1.svg";
import svg2 from "../../../assets/HomePageImgs/svg2.svg";
import BaseLine from "../../../component/BaseLine";
import PrimaryBtn from "../../../component/PrimaryBtn";

const Who = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  ">
        {/* clo-1 */}
        <div className="flex flex-col justify-center ">
          <img src={aboutUs} alt="aboutUs" />
        </div>
        {/* col-2 */}
        <div className="space-y-10 md:w-11/12 xl:w-5/6 ml-auto">
          <h2 className="uppercase text-bold flex gap-2">
            <img src={svg1} alt="aboutUs" />
            About us
            <img src={svg2} alt="aboutUs" />
          </h2>
          <h1 className="text-primary text-start">
            Who We Are
          </h1>
          <p className="md:text-sm ">
            Our team of structural engineers delivers innovative and sustainable
            engineering solutions for residential, commercial, and industrial
            projects. We focus on precision, collaboration, and quality to
            create structures that stand the test of time.
          </p>

          <div className="flex items-start gap-2">
            <div className="">10+</div>
            <BaseLine className="w-[2px] h-12 bg-black" />
            <div>
              <h2 className="text-xl font-bold">
                Year's Of Working Experience in Our Company
              </h2>
            </div>
          </div>
          <PrimaryBtn>
           Know More Services
          </PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default Who;
