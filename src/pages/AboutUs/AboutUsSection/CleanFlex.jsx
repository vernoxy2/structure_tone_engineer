import React from "react";

import image from "../../../assets/AboutUsPageImgs/AboutUsImg.webp";
import Title from "../../../component/Title";
import LazyImage from "../../../component/LazyImage";

const CleanFlex = () => {
  return (
    <section className="">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* col1 */}
        <div data-aos="fade-right" className="relative flex justify-start py-5 items-center ">
          <LazyImage src={image} alt="aboutUs" className="w-full h-auto" />
        </div>
        {/* col2 */}
        <div className="space-y-8 md:w-12/12 xl:w-6/6 ml-auto text-start justify-between">
          <Title AOS={"fade-up"}> CLEAN & FLEXIBLE</Title>
          <h1 data-aos="fade-up" className="text-primary text-start font-spacegrotesk text-5xl font-bold justify-between">
            About Us
          </h1>
          <p data-aos="fade-up" className="font-poppins">
            With over a decade of dedicated experience, we are a team of
            structural engineers committed to creating innovative, safe, and
            sustainable engineering solutions. Our work is guided by precision,
            collaboration, and a passion for transforming ideas into enduring
            structures.
          </p>
          <p data-aos="fade-up" className="font-poppins">
            We partner closely with architects, builders, and clients to deliver
            designs that balance technical excellence with aesthetic vision.
            From complex infrastructure to bespoke architectural projects, we
            approach every challenge with meticulous attention to detail and a
            commitment to long-lasting quality.
          </p>
          <p data-aos="fade-up" className="font-poppins">
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
