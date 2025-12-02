import React from "react";
import { Link, NavLink } from "react-router-dom";
import footerBgImg from "../assets/HomePageImgs/footerBgImg.png";
import footerLogo from "../assets/HomePageImgs/footerLogo.svg";
import { MdOutlinePhone } from "react-icons/md";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import BaseLine from "../component/BaseLine";

const LinksData = [
  { id: 1, name: "Home", Link: "/" },
  { id: 2, name: "About us", Link: "/about-us" },
  { id: 3, name: "Projects Page", Link: "/projects" },
  { id: 4, name: "Services Page", Link: "/services" },
];

const project = [
  { id: 0, name: "Commercial Project" },
  { id: 1, name: "Residential Project" },
  { id: 2, name: "Industrial Project" },
];

const contactInfo = [
  {
    title: "Location",
    icon: <CiLocationOn className="text-5xl p-1 text-primary" />,
    details: "112/ La Victoria Galaxy Circle Pal, Surat 394510",
  },
  {
    title: "Call Us",
    icon: <MdOutlinePhone className="text-3xl text-primary" />,
    details: "+91 99097 90008",
  },
  {
    title: "Email",
    icon: <CiMail className="text-3xl text-primary" />,
    details: "structuretoneengineers@gmail.com",
    underline: true,
  },
];

const Soical = [
  { id: 1, icon: <RiTwitterXFill />, Link: "https://twitter.com/" },
  { id: 2, icon: <FaFacebookF />, Link: "https://www.facebook.com/" },
  { id: 3, icon: <TiSocialInstagram />, Link: "https://www.instagram.com/" },
  { id: 4, icon: <FaWhatsapp />, Link: "https://www.whatsapp.com/" },
];

const Footer = () => {
  return (
    <section
      style={{ backgroundImage: `url(${footerBgImg})` }}
      className="bg-black text-white py-10 pb-10 relative bg-cover bg-no-repeat bg-center "
    >
      <div className="container grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8 ">
        {/* First Column */}
        <div className="text-start">
          <img
            src={footerLogo}
            alt="footerLogo"
            className="h-12 md:h-20 mb-5 text-base"
          />
          <p>
            <strong className="text-primary">Structuretone</strong> provides modern urban development solutions, blending
            aesthetics, functionality, and sustainability.
          </p>
          <BaseLine className="mt-3 w-2/6 p-[0.5] " />
        </div>

        {/* Second Column */}
        <div className="text-start lg:ms-11 space-y-5">
          <h1 className="font-extrabold text-3xl mb-2 pb-1 w-fit">
            Quick Links
          </h1>
          <BaseLine className="mb-4 bg-gradient-to-r from-primary to-black/80 "/>

          <ul className="space-y-2 text-sm flex flex-col items-start w-full">
            {LinksData.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.Link}
                  className="hover:text-primary/80  transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Third Column */}
        <div className="text-start space-y-5">
          <h1 className="font-extrabold text-3xl mb-2 pb-1 w-fit">
            Project Pages
          </h1>
          <BaseLine className="mb-4 bg-gradient-to-r from-primary to-black/80 "/>
          <ul className="space-y-2 text-sm">
            {project.map((item) => (
              <li key={item.id}>
                <span className="hover:text-primary/80 transition-colors cursor-pointer">
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Fourth Column */}
        <div className=" space-y-5">
          <h1 className="font-extrabold text-3xl mb-2 pb-1 w-fit text-primary">
            Contact Us
          </h1>
          <BaseLine className="mb-4 bg-gradient-to-r from-primary to-black/80 "/>

          {contactInfo.map((info, index) => (
            <div className="flex gap-3" key={index}>
              <div className="h-12 w-12 bg-white text-primary rounded-md flex justify-center items-center ">
                {info.icon}
              </div>
              <div>
                <h2 className="font-bold text-[20px] text-primary ms-2">
                  {info.title}
                </h2>
                <p className={`text-sm ms-2 ${info.underline ? "underline" : ""}`}>
                  {info.details.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SOCIAL BAR INSIDE FOOTER (CENTER BOTTOM) */}
      <div className="">
          {/* Icons */}
          <div className="p-4">
            <div
              className=" flex gap-5 items-center justify-center"
            >
              {Soical.map((item) => (
                <Link
                  to={item.Link}
                  key={item.id}
                  className="text-4xl text-primary hover:text-white duration-300 transition-colors bg-white/20 border-r-2 border-primary  p-2 rounded-full"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        {/* Divider */}
        <div className="bg-gradient-to-r from-white/20 via-white to-white/20 h-[1px]  mb-2 mt-5 mx-auto max-w-2xl " />
      </div>
    </section>
  );
};

export default Footer;
