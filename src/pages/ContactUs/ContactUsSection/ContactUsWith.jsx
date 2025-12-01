import React from "react";
import svg1 from "../../../assets/HomePageImgs/svg1.svg";
import svg2 from "../../../assets/HomePageImgs/svg2.svg";
import PrimaryBtn from "../../../component/PrimaryBtn";

const ContactUsWith = () => {
  const formRows = [
    [
      { type: "text", placeholder: "Full Name" },
      { type: "email", placeholder: "Email" },
    ],
    [
      { type: "text", placeholder: "Phone" },
      { type: "text", placeholder: "Subject" },
    ],
  ];

  const infoBoxes = [
    {
      title: "Call Now",
      text: "+91 99097 90008",
    },
    {
      title: "Location",
      text: <>112/ La Victoria Galaxy Circle Pal, Surat 394510</>,
    },
    {
      title: "Email",
      text: "structuretoneengineers@gmail.com",
    },
  ];

  return (
    <section className="container mx-auto py-10">
      {/* Heading */}
      <div>
        <h2 className="uppercase flex gap-2 items-center font-bold text-xl">
          <img src={svg1} alt="left icon" />
          Contact With Us
          <img src={svg2} alt="right icon" />
        </h2>
      </div>

      {/* 2 Column Layout */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        {/* Left: Contact Form */}
        <form className="space-y-6">
          {formRows.map((row, i) => (
            <div key={i} className="grid grid-cols-2 gap-4">
              {row.map((field, j) => (
                <input
                  key={j}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full border p-3 rounded
                  hover:bg-white"
                />
              ))}
            </div>
          ))}
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full border p-3 rounded"
          />
          <PrimaryBtn className="px-6 py-3 text-white font-semibold rounded">
            Submit{" "}
          </PrimaryBtn>
        </form>

        {/* Right: Info Boxes */}
        <div className="space-y-6">
          {infoBoxes.map((box, index) => (
            <div key={index} className="border shadow p-6 rounded-xl bg-white">
              <p
                className={`font-bold ${
                  box.highlight
                    ? "text-2xl text-primary"
                    : "text-lg text-primary"
                }`}
              >
                {box.title}
              </p>
              <p className="mt-2 text-gray-700">{box.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUsWith;
