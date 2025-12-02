import React from 'react';
import Header from './ServicePageSection/Header';
import HeadImg from "../../assets/ServicePageImgs/HeadImg.webp";
import Services from './ServicePageSection/Services';

const ServicePage = () => {
  const slides = [
          {
            BgImg: HeadImg,
            MainText: "Services",
            SubText: (
              <>
                We provide structural engineering solutions with reliability, innovation, and precision for residential and commercial projects.
              </>
            ),
          },
          {
            BgImg: HeadImg,
            MainText: "Services",
            SubText: (
              <>
                We provide structural engineering solutions with reliability, innovation, and precision for residential and commercial projects.
              </>
            ),
          },
          {
            BgImg: HeadImg,
            MainText: "Services",
            SubText: (
              <>
                We provide structural engineering solutions with reliability, innovation, and precision for residential and commercial projects.
              </>
            ),
          },
          {
            BgImg: HeadImg,
            MainText: "Services",
            SubText: (
              <>
                We provide structural engineering solutions with reliability, innovation, and precision for residential and commercial projects.
              </>
            ),
          },
          {
            BgImg: HeadImg,
            MainText: "Services",
            SubText: (
              <>
                We provide structural engineering solutions with reliability, innovation, and precision for residential and commercial projects.
              </>
            ),
          },
        ];
  return (
    <div>
      <Header slides={slides} />
      <Services />
    </div>
  )
}

export default ServicePage
