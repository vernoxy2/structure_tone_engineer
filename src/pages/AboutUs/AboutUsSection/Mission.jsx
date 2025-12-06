// import React from "react";
// import bgImg from "../../../assets/AboutUsPageImgs/Mission/bgImg.png";
// import coreValues from "../../../assets/AboutUsPageImgs/Mission/coreValues.png";
// import sharedVision from "../../../assets/AboutUsPageImgs/Mission/sharedVision.svg";
// // import targeting from "../../../assets/AboutUsPageImgs/Mission/targeting.svg" 
// const Mission = () => {
//   const dataList1 = [
//     {
//       id: 1,
//       image: coreValues,
//       MainText: "Our Mission",
//       SubText:
//         "Our mission is to deliver exceptional value through innovative design and technical excellence.",
//       SubText1:
//         "We are committed to shaping the built environment responsibly, creating spaces that make a lasting and positive impact on our clients and communities.",
//     },
    
//   ];
//   const dataList2 = [
//     {
//       id: 2,
//       image: sharedVision,
//       MainText: "Our Vision",
//       SubText:
//         "Lead the industry with innovative, future-ready structural engineering solutions.",
//       SubText1:
//         "Empower engineers to grow through meaningful challenges and a supportive, long-term management culture.",
//     },
//   ]
//   return (
//     <section
//       className="py-10 container "
//       style={{
//         backgroundImage: `url(${bgImg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className=" mx-auto">
//         <div className="flex">
//           {/* LEFT EMPTY SPACE */}
//           <div className="hidden md:block flex-1"></div>

//           {/* MIDDLE CONTENT (takes 5 columns visually) */}
//           <div className="flex-[5] grid grid-cols-1 md:grid-cols-2 gap-10">
//             <div className="bg-white p-4 rounded">1
//               datalist1 here
//             </div>
//             <div className="bg-white p-4 rounded">
//               datalist2 here
//             </div>
//           </div>

//           {/* RIGHT EMPTY SPACE */}
//           <div className="hidden md:block flex-1"></div>
//         </div>

//         {/* Bottom container */}
//         <div className="mt-10 flex">
//           <div className="hidden md:block flex-1"></div>

//           <div className="flex-[5] bg-white p-4 rounded">3</div>

//           <div className="hidden md:block flex-1"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Mission;
import React from "react";
import bgImg from "../../../assets/AboutUsPageImgs/Mission/bgImg.png";
import coreValues from "../../../assets/AboutUsPageImgs/Mission/coreValues.svg";
import sharedVision from "../../../assets/AboutUsPageImgs/Mission/sharedVision.svg";

const Mission = () => {
  const dataList1 = [
    {
      id: 1,
      image: coreValues,
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

  return (
    <section
      className="py-10"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto">
        
        {/* TOP ROW */}
        <div className="flex">
          {/* LEFT empty column */}
          <div className="hidden md:block flex-1"></div>

          {/* CENTER content (5-column area) */}
          <div className="flex-[5] grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Loop for DataList1 */}
            {dataList1.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-xl shadow-md">
                <img src={item.image} alt="img" className="w-14 mb-4" />
                <h2 className="text-xl font-bold mb-2">{item.MainText}</h2>
                <p className="text-gray-600 mb-2">{item.SubText}</p>
                <p className="text-gray-600">{item.SubText1}</p>
              </div>
            ))}

            {/* Loop for DataList2 */}
            {dataList2.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-xl shadow-md">
                <img src={item.image} alt="img" className="w-14 mb-4" />
                <h2 className="text-xl font-bold mb-2">{item.MainText}</h2>
                <p className="text-gray-600 mb-2">{item.SubText}</p>
                <p className="text-gray-600">{item.SubText1}</p>
              </div>
            ))}

          </div>

          {/* RIGHT empty column */}
          <div className="hidden md:block flex-1"></div>
        </div>

        {/* BOTTOM ROW */}
        <div className="mt-10 flex">
          <div className="hidden md:block flex-1"></div>

          <div className="flex-[5] bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-2">Bottom Content (3)</h2>
            <p className="text-gray-600">Add your content here.</p>
          </div>

          <div className="hidden md:block flex-1"></div>
        </div>

      </div>
    </section>
  );
};

export default Mission;
