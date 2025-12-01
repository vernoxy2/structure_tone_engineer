import React from "react";
import Head from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import GetTouch from "./component/GetTouch";
import Footer from "./component/Footer";
import ContactUs from "./pages/ContactUs/ContactUs";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <NavBar />
        <Routes> 
          <Route path="/" element={<Head />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/gettouch" element={<GetTouch />} />
        </Routes>
        <Footer />   {/* ✔ Now inside Router */}
      </BrowserRouter>
    </div>
  );
};

export default App;
