import React from "react";
import Head from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import GetTouch from "./component/GetTouch";
import Footer from "./component/Footer";
import ContactUs from "./pages/ContactUs/ContactUs";
import ServicePage from "./pages/Services/ServicePage";
import Project from "./pages/Projects/Project";
import AboutUs from "./pages/AboutUs/AboutUs";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <NavBar />
        <Routes> 
          <Route path="/" element={<Head />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/project" element={<Project />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/gettouch" element={<GetTouch />} />
        </Routes>
        <Footer />   
      </BrowserRouter>
    </div>
  );
};

export default App;
