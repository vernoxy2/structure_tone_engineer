  // import React, { useState, useEffect, useRef } from "react";
  // import { useLocation, useNavigate } from "react-router-dom";
  // import CommProj from "../../../assets/ProjectPageImgs/CommProj.webp";
  // import ResProj from "../../../assets/ProjectPageImgs/ResProj.webp";
  // import IndProj from "../../../assets/ProjectPageImgs/IndProj.webp";
  // import svg1 from "../../../assets/HomePageImgs/svg1.svg";
  // import svg2 from "../../../assets/HomePageImgs/svg2.svg";

  // const OurProject = () => {
  //   const location = useLocation();
  //   const navigate = useNavigate();
  //   const tabsRef = useRef(null);

  //   const [activeTab, setActiveTab] = useState("All");

  //   // Scroll function with navbar offset
  //   const scrollToTabs = () => {
  //     if (tabsRef.current) {
  //       const navbarHeight = 80; // Adjust this to your navbar height
  //       const y =
  //         tabsRef.current.getBoundingClientRect().top +
  //         window.pageYOffset -
  //         navbarHeight;
  //       window.scrollTo({ top: y, behavior: "smooth" });
  //     }
  //   };

  //   // Handle URL param dynamically and remove it after applying
  //   useEffect(() => {
  //     const query = new URLSearchParams(location.search);
  //     const typeFromUrl = query.get("type");

  //     if (typeFromUrl) {
  //       setActiveTab(typeFromUrl);

  //       // Scroll to tabs with offset
  //       scrollToTabs();

  //       // Remove type param from URL after applying it to state
  //       navigate("/project", { replace: true });
  //     }
  //   }, [location.search, navigate]);

  //   const DataImage = [
  //     {
  //       id: 1,
  //       img: CommProj,
  //       category: "Commercial Project",
  //       text: "A modern, sustainable commercial space combining smart design, natural light, and efficiency to deliver flexible, comfortable, future-ready workspaces.",
  //     },
  //     {
  //       id: 2,
  //       img: ResProj,
  //       category: "Residential Project",
  //       text: "This residence merges modern, elegant residence with light-filled spaces, warm courtyards, sustainable materials, and refined details for comfortable living.",
  //     },
  //     {
  //       id: 3,
  //       img: IndProj,
  //       category: "Industrial Project",
  //       text: "This industrial facility blends efficiency with durability, featuring open, well-planned spaces. Natural light, ventilation, and robust materials create a practical and enduring environment.",
  //     },
  //   ];

  //   const filteredImages =
  //     activeTab === "All"
  //       ? DataImage
  //       : DataImage.filter((item) => item.category === activeTab);

  //   const handleTabClick = (tab) => {
  //     setActiveTab(tab);

  //     if (tab === "All") {
  //       navigate("/project");
  //     } else {
  //       navigate(`/project?type=${encodeURIComponent(tab)}`);
  //     }

  //     // Scroll to tabs with offset
  //     scrollToTabs();
  //   };

  //   return (
  //     <section className="py-10">
  //       <div className="container mx-auto text-center px-4">
  //         <h2 className="uppercase flex gap-2 items-center justify-center font-bold text-xl">
  //           <img src={svg1} alt="icon" className="h-6 w-6" />
  //           Our Project
  //           <img src={svg2} alt="icon" className="h-6 w-6" />
  //         </h2>
  //         <h1 className="mt-3 text-5xl md:text-4xl font-bold text-primary font-spacegrotesk">
  //           Quality Projects, Built Right
  //         </h1>

  //         <div
  //           ref={tabsRef}
  //           className="flex flex-wrap justify-center gap-3 md:gap-8 mt-12 mb-8 rounded-sm text-2xl font-bold font-spacegrotesk"
  //         >
  //           {[
  //             "All",
  //             "Commercial Project",
  //             "Residential Project",
  //             "Industrial Project",
  //           ].map((tab) => (
  //             <button
  //               key={tab}
  //               onClick={() => handleTabClick(tab)}
  //               className={`px-4 py-2 font-semibold border rounded transition-colors duration-300 ${
  //                 activeTab === tab
  //                   ? "bg-primary text-white"
  //                   : "bg-white text-gray-800 hover:bg-primary hover:text-white"
  //               }`}
  //             >
  //               {tab}
  //             </button>
  //           ))}
  //         </div>

  //         <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
  //           {filteredImages.map((item) => (
  //             <div
  //               key={item.id}
  //               className="relative group overflow-hidden rounded-sm bg-none"
  //             >
  //               <img
  //                 src={item.img}
  //                 alt={item.category}
  //                 className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
  //               />

  //               <div className="absolute top-2 right-0 bg-white bg-opacity-70 px-3 py-1 rounded-sm font-bold text-xl text-[#162C3E] font-spacegrotesk z-10">
  //                 {item.category}
  //               </div>

  //               <div
  //                 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-11/12 md:w-10/12
  //                               max-h-40 bg-primary/100 group-hover:bg-primary/100 
  //                              text-white p-3 text-center 
  //                               translate-y-full group-hover:translate-y-0 
  //                              opacity-0 group-hover:opacity-100
  //                              transition-all duration-700 ease-out rounded z-20 flex flex-col justify-end"
  //               >
  //                 <p className="text-xs md:text-sm">{item.text}</p>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </section>
  //   );
  // };

  // export default OurProject;
import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CommProj from "../../../assets/ProjectPageImgs/CommProj.webp";
import ResProj from "../../../assets/ProjectPageImgs/ResProj.webp";
import IndProj from "../../../assets/ProjectPageImgs/IndProj.webp";
import svg1 from "../../../assets/HomePageImgs/svg1.svg";
import svg2 from "../../../assets/HomePageImgs/svg2.svg";
import Title from "../../../component/Title";

const OurProject = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tabsRef = useRef(null);
  const [activeTab, setActiveTab] = useState("All");

  const scrollToTabs = () => {
    if (tabsRef.current) {
      const navbarHeight = 80;
      const y =
        tabsRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Handle URL param (footer click)
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const typeFromUrl = query.get("type");

    if (typeFromUrl) {
      setActiveTab(typeFromUrl);

      // ✅ FIX — ensure DOM is ready before scrolling
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToTabs();
        });
      });

      navigate("/project", { replace: true });
    }
  }, [location.search, navigate]);

  const DataImage = [
    {
      id: 1,
      img: CommProj,
      category: "Commercial Project",
      text: "A modern, sustainable commercial space combining smart design, natural light, and efficiency to deliver flexible, comfortable, future-ready workspaces.",
    },
    {
      id: 2,
      img: ResProj,
      category: "Residential Project",
      text: "This residence merges modern, elegant residence with light-filled spaces, warm courtyards, sustainable materials, and refined details for comfortable living.",
    },
    {
      id: 3,
      img: IndProj,
      category: "Industrial Project",
      text: "This industrial facility blends efficiency with durability, featuring open, well-planned spaces. Natural light, ventilation, and robust materials create a practical and enduring environment.",
    },
  ];

  const filteredImages =
    activeTab === "All"
      ? DataImage
      : DataImage.filter((item) => item.category === activeTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    if (tab === "All") {
      navigate("/project");
    } else {
      navigate(`/project?type=${encodeURIComponent(tab)}`);
    }

    // NO SCROLL on tab click
  };

  return (
    <section className="py-10">
      <div className="container mx-auto text-center px-4">

        <Title AOS={"zoom-in"} className="justify-center">Our Project</Title>

        <h1 data-aos="fade" className="mt-3 text-5xl md:text-4xl font-bold text-primary font-spacegrotesk">
          Quality Projects, Built Right
        </h1>

        <div
          ref={tabsRef}
          className="flex flex-wrap justify-center gap-3 md:gap-8 mt-12 mb-8 rounded-sm text-2xl font-bold font-spacegrotesk"
        >
          {["All","Commercial Project","Residential Project","Industrial Project"].map((tab) => (
            <button
            data-aos="fade-up"
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-4 py-2 font-semibold border rounded transition-colors duration-300 ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "bg-white text-gray-800 hover:bg-primary hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredImages.map((item) => (
            <div data-aos="zoom-in" key={item.id} className="relative group overflow-hidden rounded-sm bg-none">
              <img
                src={item.img}
                alt={item.category}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute top-4 -right-3 bg-white bg-opacity-70 px-5 py-3 shadow-md font-bold text-2xl text-[#162C3E] font-spacegrotesk z-10">
                {item.category}
              </div>

              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-11/12 md:w-10/12
                max-h-40 bg-primary/100 group-hover:bg-primary/100 
                text-white p-3 text-center font-poppins
                translate-y-full group-hover:translate-y-0 
                opacity-0 group-hover:opacity-100
                transition-all duration-700 ease-out rounded z-20 flex flex-col justify-end"
              >
                <p className="text-xs md:text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurProject;
