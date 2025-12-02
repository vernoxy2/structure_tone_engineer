// import React from "react";
// import svg1 from "../../../assets/HomePageImgs/svg1.svg";
// import svg2 from "../../../assets/HomePageImgs/svg2.svg";

// const Services = () => {
//   return (
//     <section className="">
//       <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
//         {/* col1 */}
//         <div>1</div>

//         {/* col2 */}
//         <div className="items-start">
//           <div>
//             <h2 className="uppercase flex gap-2 items-center text-start text-xl font-bold">
//               <img src={svg1} alt="icon" />
//               SERVICES
//               <img src={svg2} alt="icon" />
//             </h2>
//           </div>
//           <div></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from 'react'
import svg1 from "../../../assets/HomePageImgs/svg1.svg";
import svg2 from "../../../assets/HomePageImgs/svg2.svg";
const Services = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  ">
        {/* clo-1 */}
        <div className="flex flex-col justify-center ">
          {/* <img src={aboutUs} alt="aboutUs" /> */}
        </div>
        {/* col-2 */}
        <div className="space-y-10 md:w-11/12 xl:w-5/6 ml-auto">
          <h2 className="uppercase font-bold text-xl flex gap-2">
            <img src={svg1} alt="aboutUs" />
            About us
            <img src={svg2} alt="aboutUs" />
          </h2>
          <h1 className="text-primary text-start">
            Engineering Trust with Quality
          </h1>
          <p className="md:text-sm ">
            Our team of structural engineers delivers innovative and sustainable
            engineering solutions for residential, commercial, and industrial
            projects. We focus on precision, collaboration, and quality to
            create structures that stand the test of time.
          </p>

          <div className="flex items-start gap-2">
            <div className="">10+</div>
            <div>
              <h2 className="text-xl font-bold">
                Year's Of Working Experience in Our Company
              </h2>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  )
}

export default Services

 
