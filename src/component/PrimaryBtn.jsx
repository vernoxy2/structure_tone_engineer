import React from "react";
import { GoArrowUpRight } from "react-icons/go";


const PrimaryBtn = ({ children, className = "" }) => {
  return (
    <button
      onClick={() => console.log({ children })}
      className={`bg-[#ECBD17] text-white flex item-center font-bold gap-2 px-8 py-6 hover:scale-90 duration-300  text-base md:text-lg ${className}`}
      type="button"
    >
      {children} <GoArrowUpRight className="text-white text-2xl" />
    </button>
    
  );
};

export default PrimaryBtn;