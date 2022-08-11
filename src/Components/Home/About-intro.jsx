import React from "react";
import "./About-intro.css";
import { Link } from "react-router-dom";

const AboutIntro = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2>
          <Link className="about-link" to="about">
            About Me*
          </Link>
        </h2>
      </div>
      <div className="about-boxes">
        <div className="about-box">
          <div className="about-heading">
              <h1>UI/UX Design</h1>
          </div>
          <div className="about-paragraph">
              <p>I love to design the websites with a minimalistic and modern look. I have designed a lot of websites including portfolios, e-commerce and startup websites. I usually use Figma software which is compltely free. I try my best to design the UI of a website as best as i can!</p>
          </div>
        </div>

        <div className="about-box">
          <div className="about-heading">
              <h1>Web Development</h1>
          </div>
          <div className="about-paragraph">
              <p>I love coding websites as much as i love designing it. I have started learning web development when i was 14 years old. Now i have learned a lot of languages, frameworks like javascript, react, node etc. I still spend a lot of my time learning it to be perfect!</p>
          </div>
        </div>
      </div>
      <div className="about-button">
        <center> <Link className="aboutButton" to='about'>  <button> <h3> About Me </h3> </button></Link> </center>
      </div>
      <div className="margin-hero"></div>
    </div>
  );
};

export default AboutIntro;
