import React from "react";
import {  Routes, Route } from "react-router-dom";
import Header from "./Components/Common/Header";
import Home from "./Components/Home/Home";
import './App.css'
import Footer from "./Components/Common/Footer";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";


const App = () => {
  return (
    <div id="body-container" className="body-container">
      <Header />
      <div id="notheader-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
       
      </div>
       <Footer />
    </div>
  );
};

export default App;
