import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import GetTouch from "./GetTouch";
import { HiMenu, HiX } from "react-icons/hi";
import navLogo from "../assets/HomePageImgs/logo.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Aboutus", path: "/aboutus" },
    { name: "Project", path: "/project" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav data-aos="fade-down" className="bg-white shadow-md w-full  md:py-2 px-5 md:px-10  top-0 left-0 z-50 relative">
      <div className=" mx-auto flex items-center justify-between ">
        {/* Logo */}
        <NavLink to="/">
          <img src={navLogo} alt="navLogo" className="h-12 md:h-14" />
        </NavLink>

        {/* <img src={navLogo} alt="navLogo" className="h-12 md:h-20" /> */}
        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-4 xl:gap-5">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="rounded-full cursor-pointer duration-300 transition-transform"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-primary duration-300 transition-colors py-2 px-5 xl:px-7 rounded-full font-bold ${
                    isActive ? "text-primary  " : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <GetTouch className="hidden lg:flex" />
        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-3xl py-5 text-white  rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <HiX className="text-black" />
          ) : (
            <HiMenu className="text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white shadow-lg w-full absolute top-16 md:top-20 left-0 transition-all duration-300 overflow-hidden  ${
          isOpen ? "h-fit" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-2 md:gap-4 py-4 text-lg font-bold">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="hover:text-blue-600 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <NavLink to={item.path} className={({isActive})=> `text-base md:text-lg ${isActive ? "text-primary" : ""}`}>{item.name}</NavLink>
            </li>
          ))}
          <GetTouch onClick={() => setIsOpen(false)} />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
