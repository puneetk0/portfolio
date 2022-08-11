import React from "react";
import AboutIntro from "./About-intro";
import Hero from "./Hero";
import "./Home.css";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="home-container">
    <Hero />
    <AboutIntro />
    <Projects />
    </div>
  );
};

export default Home;
