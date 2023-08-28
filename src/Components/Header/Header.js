import React from "react";
import "./Header.css";
import logo from "../../assets/pic.jpeg";

function Header() {
  return (
    <div className="header-container">
      <div className="about-me">
        <h1 className="header-heading">Web Desiner & Developer...!</h1>
        <p className="header-para">Hey I am Pavan Gawande, I am UI/UX designer & FullStack Developer...</p>

        <button className="hire-btn">
          <i class="fa-solid fa-arrow-right"></i>
          <span>>  </span>
          Hire Me
        </button>
      </div>
      <div className="img-container">
        <img src={logo} className="header-image" alt="logo-image" />
      </div>
    </div>
  );
}

export default Header;
