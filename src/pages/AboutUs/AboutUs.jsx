import React from 'react'
import Header from './AboutUsSection/Header';
import HeadImg from "../../assets/AboutUsPageImgs/HeadImg.png";
import CleanFlex from './AboutUsSection/CleanFlex';
import Founder from './AboutUsSection/Founder';
import Mission from './AboutUsSection/Mission';

const AboutUs = () => {
const slides=[{
  BgImg: HeadImg,
  MainText: "ABOUT US",
  SubText: (
    <>
     Innovative structural engineering solutions delivering quality, reliability, and lasting value.
    </>
  ),
}]
  return (
    <div>
      <Header slides={slides}/>
      <CleanFlex/>
      <Founder/>
      <Mission/>
    </div>
  )
}

export default AboutUs
