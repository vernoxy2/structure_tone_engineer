import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const PrimaryBtn = ({ children, className = "", onClick, type = "button", ...rest }) => {
  return (
    <button
      onClick={onClick}                
      type={type}                   
      className={`bg-[#ECBD17] text-white flex items-center font-bold gap-2 px-4 lg:px-8 py-4 lg:py-6 hover:scale-90 duration-300 text-base md:text-lg ${className}`}
      {...rest}
    >
      {children} <GoArrowUpRight className="text-white text-2xl" />
    </button>
  );
};

export default PrimaryBtn;
