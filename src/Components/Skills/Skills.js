import React from "react";
import "./Skills.css";
import html from "../../assets/html-5--v1.png";
import css from "../../assets/css3.png";
import bootstrap from "../../assets/bootstrap.png";
import js from "../../assets/javascript--v1.png";
import react from "../../assets/react.png";
import node from "../../assets/nodejs.png";
import express from "../../assets/expressjs.png";
import mongodb from "../../assets/mongodb.png";

function Skills() {
  return (
    <div>
      <div className="skills">
        <h1 className="skills-head">Skills and Expertise</h1>
        <div>
          <img src={html} alt="" />
          <p>HTML</p>
        </div>
        <div>
          <img src={css} alt="" />
          <p>CSS3</p>
        </div>
        <div>
          <img src={bootstrap} alt="" />
          <p>Bootstrap</p>
        </div>
        <div>
          <img src={js} alt="" />
          <p>JavaScript</p>
        </div>
        <div>
          <img src={react} alt="" />
          <p>React</p>
        </div>
        <div>
          <img src={node} alt="" />
          <p>NodeJs</p>
        </div>
        <div>
          <img src={express} alt="" />
          <p>Express.Js</p>
        </div>
        <div>
          <img src={mongodb} alt="" />
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
