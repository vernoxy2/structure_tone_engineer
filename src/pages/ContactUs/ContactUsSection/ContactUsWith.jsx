import React, { useState } from "react";
import PrimaryBtn from "../../../component/PrimaryBtn";
import { MdOutlinePhone } from "react-icons/md";
import { CiLocationOn, CiMail } from "react-icons/ci";
import BgImg from "../../../assets/ContactUsImgs/BgImg.png";
import SvgCross from "../../../assets/ContactUsImgs/SvgCross.svg";
import svg1 from "../../../assets/HomePageImgs/svg1.svg";
import svg2 from "../../../assets/HomePageImgs/svg2.svg";
const ContactUsWith = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.fullName.trim())
      tempErrors.fullName = "Full name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      tempErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      tempErrors.phone = "Phone number must be exactly 10 digits";
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form Submitted Successfully!");
      console.log("Form Data:", formData);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    }
  };

  const infoBoxes = [
    {
      id: 1,
      icon: <MdOutlinePhone className="text-primary text-2xl" />,
      title: "Call Now",
      text: "+91 99097 90008",
    },
    {
      id: 2,
      icon: <CiLocationOn className="text-primary text-2xl" />,
      title: "Location",
      text: "112/ La Victoria Galaxy Circle Pal, Surat 394510",
    },
    {
      id: 3,
      icon: <CiMail className="text-primary text-2xl" />,
      title: "Email",
      text: "structuretoneengineers@gmail.com",
    },
  ];

  return (
    <section
      className="py-12 bg-no-repeat bg-bottom pb-32"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="container">
        <h2 className="uppercase font-bold text-xl flex gap-2">
          <img src={svg1} alt="aboutUs" />
          About us
          <img src={svg2} alt="aboutUs" />
        </h2>
      </div>
      <div className="container overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 min-w-0 min-h-0 ">
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 "
          onSubmit={handleSubmit}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Full Name*"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className={`w-full box-border border p-4 pr-10 rounded-sm focus:bg-white ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Email*"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full box-border border p-4 pr-10 rounded-sm focus:bg-white ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,10}$/.test(value))
                  setFormData({ ...formData, phone: value });
              }}
              className={`w-full box-border border p-4 pr-10 rounded-sm focus:bg-white ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Subject*"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className={`w-full box-border border p-4 pr-10 rounded-sm focus:bg-white ${
                errors.subject ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          <div className="relative sm:col-span-2">
            <textarea
              rows="5"
              placeholder="Message*"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`w-full box-border border p-5 pr-10 rounded-sm focus:bg-white ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <PrimaryBtn
              type="submit"
              className="px-6 py-4 text-white font-semibold rounded-sm w-full sm:w-auto items-center justify-center"
            >
              Submit
            </PrimaryBtn>
          </div>
        </form>

        <div className="space-y-6 w-full">
          {infoBoxes.map((box) => (
            <div
              key={box.id}
              className="relative border shadow p-5 rounded-sm bg-white flex flex-col md:flex-row md:items-center gap-4 "
            >
              <div className="text-4xl text-primary bg-[#F8F8F8] border-primary p-3 rounded-full w-fit border-r-2 ">
                {box.icon}
              </div>
              <div className="">
                <p className="font-bold text-2xl text-primary ">{box.title}</p>
                <p className="mt-2 text-[#162C3E] text-sm md:text-base lg:text-base">{box.text}</p>
              </div>
              <img
                src={SvgCross}
                className="w-6 h-6 absolute right-0 bottom-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUsWith;
