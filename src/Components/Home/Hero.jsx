import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-header">
    <div className="hero-hello">
      <center>
        <h1 className="namaste">Namaste</h1>
      </center>
    <center>  <p className="namaste-i">(that's hello in hindi*)</p> </center>
    </div>
    <div className="hero-intro">
      <div className="intro-text">
        <p>
          I'm Puneet Kathuria, a UI/UX designer, full stack web developer,
          student and a part-time <a href="https://www.youtube.com/c/LearnGroww">Youtuber*</a>!
        </p>
      </div>
      <div className="intro-links">
        <div className="links-intro">
          <h2>Wanna Connect?</h2>
        </div>
        <div className="all-links">
          <a href="https://www.instagram.com/puneetkathuria25/?hl=en">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/c/LearnGroww">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://discord.gg/nBEwzC8WYA">
            <i className="fa-brands fa-discord"></i>
          </a>
          <a href="https://twitter.com/its_puneet25">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
    <div className='margin-hero'></div>
  </div>
  )
}

export default Hero