import React from "react";
import bgImg from "../../../assets/AboutUsPageImgs/Mission/bgImg.png";
import coreValues from "../../../assets/AboutUsPageImgs/Mission/coreValues.svg";
import sharedVision from "../../../assets/AboutUsPageImgs/Mission/sharedVision.svg";
import targeting from "../../../assets/AboutUsPageImgs/Mission/targeting.svg";
import BaseLine1 from "../../../component/BaseLine1";

const Mission = () => {
  const dataList1 = [
    {
      id: 1,
      image: targeting,
      MainText: "Our Mission",
      SubText:
        "Our mission is to deliver exceptional value through innovative design and technical excellence.",
      SubText1:
        "We are committed to shaping the built environment responsibly, creating spaces that make a lasting and positive impact on our clients and communities.",
    },
  ];

  const dataList2 = [
    {
      id: 2,
      image: sharedVision,
      MainText: "Our Vision",
      SubText:
        "Lead the industry with innovative, future-ready structural engineering solutions.",
      SubText1:
        "Empower engineers to grow through meaningful challenges and a supportive, long-term management culture.",
    },
  ];

  const dataList3 = [
    {
      id: 3,
      image: coreValues,
      MainText: "Our Core Values",

      SubText: (
        <>
          <span className="font-bold text-primary md:text-2xl text-xl">
            Innovation –{" "}
          </span>
          We create fresh, forward-thinking design solutions.
        </>
      ),

      SubText1: (
        <>
          <span className="font-bold text-primary md:text-2xl text-xl">
            Integrity –{" "}
          </span>
          We work with honesty, transparency, and trust.
        </>
      ),

      SubText2: (
        <>
          <span className="font-bold text-primary md:text-2xl text-xl">
            Quality Craftsmanship –{" "}
          </span>
          We deliver precise, durable, and refined work.
        </>
      ),

      SubText3: (
        <>
          <span className="font-bold text-primary md:text-2xl text-xl">
            Sustainability –{" "}
          </span>
          We design responsibly with eco-friendly principles.
        </>
      ),

      SubText4: (
        <>
          <span className="font-bold text-primary md:text-2xl text-xl">
            Collaboration –{" "}
          </span>
          We achieve results through strong teamwork.
        </>
      ),

      SubText5: (
        <>
          <span className="font-bold text-primary md:text-2xl text-xl">
            Client-Centered Design –{" "}
          </span>
          We craft every space around our clients’ needs and vision.
        </>
      ),
    },
  ];

  return (
    <section
      className="py-10"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto ">
        {/* TOP ROW */}
        <div className="flex">
          <div className="hidden md:block flex-1"></div>
          <div className="flex-[5] grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataList1.map((item) => (
              <div
                key={item.id}
                className="bg-white p-8 relative space-y-5 rounded-xl shadow-md"
              >
                <div className="flex items-center gap-5">
                  <img src={item.image} alt="img" className="lg:w-20 md:w-14" />
                  <h2 className="xl:text-5xl md:text-2xl text-2xl font-bold text-primary">
                    {item.MainText}
                  </h2>
                  {/* BaseLine1 positioned at top-right */}
                  <div className="absolute right-0 top-28 md:top-[100px]">
                    <div className="bg-[#DEDEDE] p-[1px] lg:w-80 md:w-32 w-[120px] rounded-xl"></div>
                  </div>
                </div>

                <p className="text-[#162C3E] mb-2 text-sm md:text-base lg:text-base font-poppins">
                  {item.SubText}
                </p>
                <p className="text-[#162C3E] font-poppins text-sm md:text-base lg:text-base">{item.SubText1}</p>
              </div>
            ))}

            {dataList2.map((item) => (
              <div
                key={item.id}
                className="bg-white p-8 space-y-5 relative rounded-xl shadow-md  "
              >
                <div className="flex items-center gap-5">
                  <img src={item.image} alt="img" className="lg:w-20 md:w-14" />
                  <h2 className="xl:text-5xl md:text-2xl text-2xl font-bold text-primary">
                    {item.MainText}
                  </h2>
                  {/* BaseLine1 positioned at top-right */}
                  <div className="absolute right-0 top-28 md:top-[100px]">
                    <div className="bg-[#DEDEDE] p-[1px] lg:w-80 md:w-32 w-[120px] rounded-xl"></div>
                  </div>
                </div>

                <p className="text-[#162C3E] mb-2 font-poppins text-sm md:text-base lg:text-base">
                  {item.SubText}
                </p>
                <p className="text-[#162C3E] font-poppins text-sm md:text-base lg:text-base">{item.SubText1}</p>
              </div>
            ))}
          </div>

          <div className="hidden md:block flex-1"></div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex space-y-8">
          <div className="hidden md:block flex-1"></div>
          <div className="flex-[5] ">
            {dataList3.map((item) => (
              <div
                key={item.id}
                className="bg-white relative p-6 rounded-xl shadow-md space-y-5"
              >
                <div className="flex items-center gap-5">
                  <img src={item.image} alt="img" className="xl:w-20 md:w-14" />
                  <h2 className="xl:text-5xl md:text-2xl text-2xl font-bold text-primary">
                    {item.MainText}
                  </h2>
                  {/* BaseLine1 positioned at top-right */}
                  <div className="absolute right-0 top-[120px] lg:top-24 md:top-20 border">
                    <div className="bg-[#DEDEDE] p-[0.5px] w-40 md:w-80 lg:w-[725px] rounded-xl"></div>
                  </div>
                </div>

                <ul className="space-y-2 text-[#162C3E] font-poppins text-sm md:text-base lg:text-base  ">
                  <li>{item.SubText}</li>
                  <li>{item.SubText1}</li>
                  <li>{item.SubText2}</li>
                  <li>{item.SubText3}</li>
                  <li>{item.SubText4}</li>
                  <li>{item.SubText5}</li>
                </ul>
              </div>
            ))}
          </div>

          <div className="hidden md:block flex-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
