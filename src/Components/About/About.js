import React from "react";
import "./About.css";
import image from "../../assets/DSC_0669-01.jpeg";

function About() {
  return (
    <div className="about-container">
      <div className="about-image-container">
        <img src={image} alt="about-image" />
      </div>
      <div className="about-para-container">
        <h2 className="about-heading">I'm Pavan Gawande</h2>
        <h3 className="about-heading2">Full Stack Developer</h3>
        <p className="about-para"> 
          I am a Full-Stack developer based in Akola,Maharashtra India. I am have completed <b>Master of Computer Application From SGBAU</b>. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.
        </p>
        <button className="resume-btn">Resume</button>
      </div>
    </div>
  );
}

export default About;
