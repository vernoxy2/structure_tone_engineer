import React from "react";
import svg1 from "../../../assets/HomePageImgs/svg1.svg";
import svg2 from "../../../assets/HomePageImgs/svg2.svg";
import img1 from "../../../assets/AboutUsPageImgs/img1.png";
import img2 from "../../../assets/AboutUsPageImgs/img2.png";
import img3 from "../../../assets/AboutUsPageImgs/img3.png";
import image from "../../../assets/AboutUsPageImgs/image.svg";

const CleanFlex = () => {
  return (
    <section className="">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* col1 */}
        <div className="relative flex justify-start py-5 items-center ">
          {/* Big bottom-left image */}
          <img
            src={img1}
            alt="aboutUs"
            className="w-[45%] lg:w-[52%] h-auto rounded-sm absolute top-10 "
          />

          {/* Top-right small image */}
          <img
            src={img2}
            alt="aboutUs"
            className="absolute top-[-10px] lg:right-[-13px] w-[35%] lg:w-[50%] rounded-sm "
          />

          {/* Bottom-right wide image */}
          <img
            src={img3}
            alt="aboutUs"
            className="absolute bottom-20 right-[-19px] w-[45%] lg:w-[67%] translate-y-1/2 rounded-sm "
          />

          {/* SVG icon bottom-left */}
          <div className="absolute left-10 bottom-0 p-4   ">
            <img src={image} alt="aboutUs" className="w-12 lg:w-14 border border-red-600" />
          </div>
        </div>
        {/* col2 */}
        <div className="space-y-10 md:w-12/12 xl:w-6/6 ml-auto text-start justify-between">
          <h2 className="uppercase font-bold text-xl flex gap-2 font-spacegrotesk">
            <img src={svg1} alt="aboutUs" />
            CLEAN & FLEXIBLE
            <img src={svg2} alt="aboutUs" />
          </h2>
          <h1 className="text-primary text-start font-spacegrotesk text-5xl font-bold justify-between">
            About Us
          </h1>
          <p className="font-poppins">
            With over a decade of dedicated experience, we are a team of
            structural engineers committed to creating innovative, safe, and
            sustainable engineering solutions. Our work is guided by precision,
            collaboration, and a passion for transforming ideas into enduring
            structures.
          </p>
          <p className="font-poppins">
            We partner closely with architects, builders, and clients to deliver
            designs that balance technical excellence with aesthetic vision.
            From complex infrastructure to bespoke architectural projects, we
            approach every challenge with meticulous attention to detail and a
            commitment to long-lasting quality.
          </p>
          <p className="font-poppins">
            Our mission is to engineer structures that stand the test of
            time—enhancing communities, enriching spaces, and bringing each
            client’s vision to life with integrity and expertise
          </p>
        </div>
      </div>
    </section>
  );
};

export default CleanFlex;
