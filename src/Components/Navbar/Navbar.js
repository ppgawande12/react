import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <div>
        <h1 className="nav-heading">Pavan Gawande</h1>
      </div>
      <div className="navbar">
        <ul className="nav">
          <li>
            <a href="#">
              <i class="bi bi-house"></i>Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Eduction</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
