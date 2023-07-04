import React from "react";
import "../Styles/NavBar.css";
// import Home from "./Home";
// import About from "./About";

function NavBar() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <h3>
            Dhee<span>Codes</span>&#9824;
          </h3>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="Home.js">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT ME</a>
            </li>
            <li>
              <a href="#skill">SKILLS</a>
            </li>
            <li>
              <a href="#project">PROJECT</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
