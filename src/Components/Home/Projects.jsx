import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import img1 from "../../Images/project1.svg"
import img2 from "../../Images/project2.svg"
import img3 from "../../Images/project3.svg" 

const Projects = () => {

    const projectData = [
        {
            id:1,
            imgUrl: img1,
            title: 'UI/UX Design',
            paragraph: 'It is a design of an e-commerce shopping website. It is such a cool, modern design and one the best user interface i have ever created.'
        },

        {
            id:2,
            imgUrl: img2,
            title: 'Web Development',
            paragraph: 'A to-do list application i created when i was learning React.js. It is completely responsive even i started using it in daily basis!'
        },

        {
            id:3,
            imgUrl: img3,
            title: 'UI/UX Design',
            paragraph: 'A Apple watch user interface with such a cool animation. It is one of the awesome project i include in Figma tutorial video on youtube.'
        },
    ]
    
  return (
    <div className="project-container">
      <div className="project-text">
        <h2>
          <Link className="project-link" to="about">
            Projects*
          </Link>
        </h2>
      </div>
      <div className="project-boxes">
      {projectData.map((val)=>(
        <div key={val.id} className="project-box">
              <img src={val.imgUrl}></img>
              <h1>{val.title}</h1>
              <p>{val.paragraph}</p>
          </div>
      ))}
      </div>
      <div className="project-button">
        <center> <Link className="projectButton" to='portfolio'>  <button> <h3> More Projects </h3> </button></Link> </center>
      </div>
      <div className="margin-hero"></div>
    </div>
  );
};

export default Projects;
