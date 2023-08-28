import React from "react";
import "./Project.css";
import html from "../../assets/html-5--v1.png";
import css from "../../assets/css3.png";
import bootstrap from "../../assets/bootstrap.png";
import js from "../../assets/javascript--v1.png";
import react from "../../assets/react.png";
import node from "../../assets/nodejs.png";
import express from "../../assets/expressjs.png";
import mongodb from "../../assets/mongodb.png";

function Project() {
  return (
    <div className="project-container">
      <h1 className="project-heading">My Project</h1>
      <div className="card-container">
        <div className="cards">
          <div className="card-head">
            <h2 className="card-title">Title</h2>
            <h2 className="card-title">News Paper</h2>
          </div>
          <hr />
          <div className="card-body">
            <h3>Technology</h3>
            <img src={html} />
            <img src={css} />
          </div>
          <hr />
          <div className="card-foot">
            <h3>Discription</h3>
            <p>Created News Paper App Using HTML and CSS</p>
          </div>
        </div>
        <div className="cards">
          <div className="card-head">
            <h2 className="card-title">Title</h2>
            <h2 className="card-title">Portfolio</h2>
          </div>
          <hr />
          <div className="card-body">
            <h3>Technology</h3>
            <img src={html} />
            <img src={css} />
            <img src={react} />
          </div>
          <hr />
          <div className="card-foot">
            <h3>Discription</h3>
            <p>Created Self Portfolio Using HTML and CSS</p>
          </div>
        </div>

        <div className="cards">
          <div className="card-head">
            <h2 className="card-title">Title</h2>
            <h2 className="card-title">Fake Store</h2>
          </div>
          <hr />
          <div className="card-body">
            <h3>Technology</h3>
            <img src={html} />
            <img src={css} />
            <img src={bootstrap} />
            <img src={js} />
          </div>
          <hr />
          <div className="card-foot">
            <h3>Discription</h3>
            <p>Fake Store App is created using HTML,CSS,Bootstrap and JavaScript with help of HTTP request and API</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
