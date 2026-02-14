import React from "react";

import Founder1 from "../../../assets/AboutUsPageImgs/Founder/Founder1.png";
import BgImg from "../../../assets/AboutUsPageImgs/Founder/BgImg.png"; // <-- your background image
import Title from "../../../component/Title";
import LazyImage from "../../../component/LazyImage";

const Founder = () => {
  return (
    <section className="relative">
      <div
        className=" mt-10 container absolute inset-0 bg-no-repeat lg:bg-[position:bottom_0px_left_50px] opacity-20 bg-bottom"
        style={{ backgroundImage: `url(${BgImg})` }}
      ></div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-10  relative container">
        {/* col1 */}
        <div className="space-y-10 relative ml-auto text-start justify-between order-2 lg:order-1">
          <Title AOS={"fade-right"}>ABOUT FOUNDER</Title>
          {/* Bullet List */}
          <ul className="space-y-5 pl-2">
            <li data-aos="fade-right" className="font-poppins relative pl-6 justify-between">
              <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary border-[3px] border-primary text-base"></div>
              <span className="font-bold text-primary">
                As a seasoned structural
              </span>{" "}
              engineer, I recognized the chance to transform the way we build.
              Structure Tone Engineers was founded with a vision: to design
              structures that inspire, unite communities, and endure for
              generations. Guided by expertise, innovation, and unwavering
              dedication, our team turns that vision into reality—delivering
              projects that are not only strong and functional but also timeless
              in their impact.
            </li>

            <li data-aos="fade-right" className="font-poppins relative pl-6">
              <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary border-[3px] border-primary text-base"></div>
              <span className="font-bold text-primary">At Structure Tone</span>{" "}
              Engineers, we believe every structure has a story. Founded on
              years of engineering expertise, our mission is to create buildings
              and infrastructures that inspire, connect people, and stand the
              test of time. With precision, innovation, and passion, our team
              brings visionary designs to life.
            </li>
          </ul>
        </div>
        {/* col2 */}
        <div className="relative order-1 lg:order-2 flex justify-center">
          <LazyImage data-aos="zoom-in" src={Founder1} alt="Founder1" className="" />
          <div data-aos="fade-right" data-aos-delay="300" className="absolute top-5 left-[-10px] bg-primary bg-opacity-80 px-2 py-1 rounded font-semibold">
            <h1 className="text-white">Prithvi Lilawala</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
