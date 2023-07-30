import React, { useState } from "react";
import Logo from "../../img/logo.svg";
import GitHub from "../../img/github-icon.svg";
import LinkedIn from "../../img/linkedin-icon.svg";

import styles from "./Navbar.module.css";

function Navbar() {
  const [active, setActive] = useState(false);

  const openModal = (event) => {
    setActive(!active);
  };

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
      <div
        className="collapse navbar-collapse"
        id="navbarNav"
        data-spy="scroll"
      >
        <ul className={`navbar-nav mt-2 ${styles.marginNavbar}`}>
          <li className={styles.navItem}>
            <a
              className="nav-link active"
              aria-current="page"
              href="#home"
              onClick={openModal}
            >
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a className="nav-link" href="#aboutme" onClick={openModal}>
              About me
            </a>
          </li>
          <li className={styles.navItem}>
            <a className="nav-link" href="#skills" onClick={openModal}>
              Skills
            </a>
          </li>
          <li className={styles.navItem}>
            <a className="nav-link" href="#project" onClick={openModal}>
              Projects
            </a>
          </li>
          <li className={styles.navItem}>
            <a className="nav-link" href="#contact" onClick={openModal}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div
        className="d-sx-none d-md-none d-sm-none d-lg-block"
        id={styles.navIcons}
      >
        <a href="https://github.com/panayar" target="__blank" rel="noreferrer">
          <img
            width="40px"
            src={GitHub}
            alt="github"
            className={styles.icons}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/paulaanaya/"
          target="__blank"
          className={styles.marginIcons}
        >
          <img
            width="35px"
            src={LinkedIn}
            alt="linkedin"
            className={styles.icons}
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
