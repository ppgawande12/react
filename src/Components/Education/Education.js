import React from "react";
import "./Education.css";

function Education() {
  return (
    <div className="education-container">
      <h1 className="edu-heading">Education Background</h1>
      <div className="edu-container">
        <h2>Master Of Computer Application</h2>
        <h3>Saraswati College, Shegaon</h3>
        <h4>2021 To 2023 || Completed</h4>
      </div>
      <div className="edu-container">
        <h2>Bachelor Of Computer Application</h2>
        <h3>Shankarlal Khandelwal College, Akola</h3>
        <h4>2018 To 2021 || Completed</h4>
      </div>
      <div className="edu-container">
        <h2>HSC</h2>
        <h3>Shree Sdhheshwar Jr. College, Dhaba</h3>
        <h4>2017 To 2018 || Completed</h4>
      </div>
      <div className="edu-container">
        <h2>SSC</h2>
        <h3>Shree Sdhheshwar Vidyalaya, Dhaba</h3>
        <h4>2015 To 2016 || Completed</h4>
      </div>
    </div>
  );
}

export default Education;
