import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "./assets/Logo.svg"
import LazyImage from "./component/LazyImage";

// ✅ Lazy load pages
const Head = lazy(() => import("./pages/HomePage/HomePage"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const ServicePage = lazy(() => import("./pages/Services/ServicePage"));
const Project = lazy(() => import("./pages/Projects/Project"));
const GetTouch = lazy(() => import("./component/GetTouch"));

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <BrowserRouter>
      <NavBar />

      {/* ✅ Suspense wrapper */}
      <Suspense
        fallback={
          <div className="flex flex-col justify-center items-center h-screen text-xl space-y-5">

              <LazyImage src={Logo} alt="" loading="lazy" className="animate-pulse lg:h-24"/>
              <p className="text-primary font-semibold">Loading...</p>

            </div>
        }
      >
        <Routes>
          <Route path="/" element={<Head />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/project" element={<Project />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/gettouch" element={<GetTouch />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
