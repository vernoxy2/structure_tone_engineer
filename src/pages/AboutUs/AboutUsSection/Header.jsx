import React from 'react';
import HeadImg from "../../../assets/AboutUsPageImgs/HeadImg.png";
import Vector5 from "../../../assets/ProjectPageImgs/Vector5.svg";

const Header = ({slides}) => {
     const {  MainText, SubText } = slides[0]; // destructure first slide

  return (
    <section className="bg-cover bg-center bg-no-repeat mt-28 lg:h-screen max-h-[546px]"
          style={{ backgroundImage: `url(${HeadImg})` }} // use slide BgImg

    >
       <div className="container grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="space-y-5 xl:w-[70%] py-16 lg:py-0 md:py-24 h-full flex flex-col items-start justify-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-start font-bold uppercase text-primary font-spacegrotesk">
                  {MainText}
                </h1>
                <div className="flex gap-6">
                  <img src={Vector5} alt="" className=" h-auto" />
                  <p className="text-white lg:w-4/5 font-poppins">{SubText}</p>
                </div>
              </div>
            </div>
    </section>
  )
}

export default Header
