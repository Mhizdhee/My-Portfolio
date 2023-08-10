import React, { useState } from "react";
import "../Styles/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="container">
        <div className="logo">
          <h3>
            Dhee<span>Codes</span>&#9824;
          </h3>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={`navigations ${isOpen ? "show" : ""}`}>
          <div className="nav-links">
            <ul>
              <li>
                <a href="Home" onClick={toggleMenu}>
                  HOME
                </a>
              </li>
              <li>
                <a href="#about" onClick={toggleMenu}>
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#skill" onClick={toggleMenu}>
                  SKILLS
                </a>
              </li>
              <li>
                <a href="#project" onClick={toggleMenu}>
                  PROJECT
                </a>
              </li>
              <li>
                <a href="#contact" onClick={toggleMenu}>
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
