import React, { useState } from "react";
import svg1 from "../../../assets/HomePageImgs/svg1.svg";
import svg2 from "../../../assets/HomePageImgs/svg2.svg";
import img1 from "../../../assets/ServicePageImgs/Img1.webp";
import img2 from "../../../assets/ServicePageImgs/Img2.webp";
import img3 from "../../../assets/ServicePageImgs/Img3.webp";
import Svg from "../../../assets/ServicePageImgs/Svg.svg";
import Broucher from "../../../assets/ServicePageImgs/Broucher.svg";
import Doc from "../../../assets/ServicePageImgs/Doc.svg";
import { GoPlus } from "react-icons/go";
import Title from "../../../component/Title";
// LEFT SIDE MENU
const menuList = [
  { id: 1, title: "Structural Design and Analysis" },
  { id: 2, title: "Industrial, Commercial, and Residential Building Design" },
  { id: 3, title: "Seismic Retrofitting and Earthquake Resistance" },
  { id: 4, title: "Project Management and Consultation" },
  { id: 5, title: "Foundation Engineering and Soil-Structure Interaction" },
];
// RIGHT SIDE CONTENT
const content = [
  {
    id: 1,
    image: img1,
    subText: (
      <>
        Our Structural Design and Analysis service creates safe, efficient, and
        visually coherent structures. Using advanced tools, we optimize
        stability, materials, and construction feasibility. Through expertise
        and coordination, we deliver dependable, adaptable solutions aligned
        with the project’s vision.
      </>
    ),
  },
  {
    id: 2,
    image: img2,
    subText: (
      <>
        We design industrial, commercial, and residential buildings that balance
        functionality, aesthetics, and sustainability. Each project optimizes
        space, efficiency, and user experience while reflecting a strong
        architectural identity.
      </>
    ),
  },
  {
    id: 3,
    image: img3,
    subText: (
      <>
        We provide Seismic Retrofitting and Earthquake Resistance solutions that
        strengthen structures against seismic forces. By assessing
        vulnerabilities and applying advanced engineering techniques, we ensure
        safety, durability, and minimal damage during earthquakes.
      </>
    ),
  },
  {
    id: 4,
    image: img1,
    subText: (
      <>
        Our Project Management and Consultation services ensure projects are
        executed efficiently, on time, and within budget. We coordinate teams,
        optimize resources, and provide expert guidance to achieve high-quality,
        cost-effective outcomes.
      </>
    ),
  },
  {
    id: 5,
    image: img2,
    subText: (
      <>
        We provide Seismic Retrofitting and Earthquake Resistance solutions that
        strengthen structures against seismic forces. By assessing
        vulnerabilities and applying advanced engineering techniques, we ensure
        safety, durability, and minimal damage during earthquakes.
      </>
    ),
  },
];
const Services = () => {
  const [activeTab, setActiveTab] = useState(1);
  const selectedContent = content.find((c) => c.id === activeTab);
  return (
    <section className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 ">
        {/* LEFT COLUMN MENU */}
        <div data-aos="fade-right" className="space-y-5 bg-white text-white w-full md:space-y-3">
          {menuList.map((item) => (
            <div
            
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`cursor-pointer h-24 flex justify-between items-center transition group xl:text-xl md:text-md text-base font-semibold 
                  ${
                    activeTab === item.id
                      ? "bg-[#162C3E] text-white rounded"
                      : "bg-[#F2F2F2] text-[#162C3E] hover:bg-[#162C3E] hover:text-white"
                  }`}
            >
              <div className="items-start group-hover:text-white w-full px-3">
                {item.title}
              </div>

              <div
                className={`h-full w-24 flex items-center justify-center text-3xl rounded transition 
                   ${
                     activeTab === item.id
                       ? "bg-[#F2C21A] text-white" // Active = yellow
                       : "bg-[#D4D4D4] text-white group-hover:bg-[#F2C21A]" // Default grey → hover yellow
                   }
                     `}
              >
                <GoPlus className="text-4xl" />
              </div>
            </div>
          ))}
          {/* Brochure Buttons */}
          <div data-aos="fade-right" className=" bg-[#162C3E] px-16 py-16 space-y-6">
            <div className="flex flex-row items-center justify-start gap-4">
              <img src={Svg} alt="Svg" className="items-center" />
              <h3 className="text-white font-bold text-2xl ">Brochures</h3>
            </div>

            <div className="flex flex-col gap-4">
              {/* Brochure Button */}
              <button className="flex items-center justify-center gap-3 w-full bg-primary font-semibold p-3 rounded text-xl text-white">
                <img src={Broucher} alt="Brochure" className="text-4xl" />
                Brochure
              </button>

              {/* Document Button */}
              <button className="flex items-center justify-center gap-3 w-full bg-primary text-white font-semibold p-3 text-xl rounded">
                <img src={Doc} alt="Document" className="text-4xl" />
                Document
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT AREA */}
        <div className="xl:col-span-2 space-y-6">
          <Title AOS={"fade-up"}>Services</Title>

          <h1 data-aos="fade-up" className="text-primary font-bold text-start ">
            Engineering Trust with Quality
          </h1>
          {/* DYNAMIC CONTENT BASED ON ACTIVE TAB */}
          <img
          data-aos="zoom-in"
            src={selectedContent?.image}
            alt="service"
            className="rounded-sm w-full h-auto object-cover"
          />
          <p data-aos="fade-up" className="text-[#162C3E] ">{selectedContent?.subText}</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
