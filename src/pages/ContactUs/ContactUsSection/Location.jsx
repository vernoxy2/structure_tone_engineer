import React from "react";
import svg1 from "../../../assets/HomePageImgs/svg1.svg";
import svg2 from "../../../assets/HomePageImgs/svg2.svg";
import Title from "../../../component/Title";

const Location = () => {
  return (
    <section className="w-full h-[400px] md:h-[600px] container px-0 mb-8">
      <div>
        <Title AOS={"zoom-in"} className={"justify-center"}>Location</Title>
        <h1 data-aos="fade-up" className="mt-3 text-center text-2xl md:text-3xl font-semibold">
          Location Guide
        </h1>
      </div>

      <iframe
      data-aos="fade"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2288.7092076073855!2d72.77793845952418!3d21.18974829894615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dcbeb6a9a2b%3A0x2e49538082a3c338!2sTownhouse%20LA%20VICTORIA!5e1!3m2!1sen!2sin!4v1764657750602!5m2!1sen!2sin"
        className="w-full h-full mt-6"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Location;
