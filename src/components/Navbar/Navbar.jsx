import React from "react";
import Logo from "../../img/logo.svg";
import GitHub from "../../img/github-icon.svg";
import LinkedIn from "../../img/linkedin-icon.svg";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mt-3">
      <a href="/">
        <img src={Logo} width="65px" alt="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mt-2 marginNavbar">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#porfolio">
              Porfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-icons d-sm-none d-xs-none d-lg-block">
        <a href="https://github.com/panayar" target="__blank" rel="noreferrer">
          <img width="40px" src={GitHub} alt="github" className="icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/paulaanaya/"
          target="__blank"
          className="marginIcons"
        >
          <img width="35px" src={LinkedIn} alt="linkedin" className="icons" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
