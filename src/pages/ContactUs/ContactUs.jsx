import React from 'react'
import HeadSection from './ContactUsSection/HeadSection';
import HeadImg from "../../assets/ContactUsImgs/HeadImg.webp";
import Head2 from "../../assets/ContactUsImgs/Head2.webp";
import Head3 from "../../assets/ContactUsImgs/Head3.webp";
import ContactUsWith from "../ContactUs/ContactUsSection/ContactUsWith"


const ContactUs = () => {
  const slides = [
        {
          BgImg: HeadImg,
          MainText: "Contact us",
          SubText: (
            <>
              We’d love to hear from you! Whether you have questions, ideas, or feedback, our team is here to help.
            </>
          ),
        },
        {
          BgImg: Head2,
          MainText: "Contact us",
          SubText: (
            <>
              We’d love to hear from you! Whether you have questions, ideas, or feedback, our team is here to help.
            </>
          ),
        },
        {
          BgImg: Head3,
          MainText: "Contact us.",
          SubText: (
            <>
             We’d love to hear from you! Whether you have questions, ideas, or feedback, our team is here to help.
            </>
          ),
        },
      ];
  return (
    <div>
      <HeadSection slides={slides} />
      <ContactUsWith />
    </div>
  )
}

export default ContactUs
