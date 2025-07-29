import React, { useState } from "react";
import GitHub from "../../img/icons/github-icon.svg";
import Gmail from "../../img/icons/gmail-icon.svg";
import LinkedIn from "../../img/icons/linkedin-icon.svg";

import styles from "./Navbar.module.css";

function Navbar() {
  const [active, setActive] = useState(false);

  const openModal = (event) => {
    setActive(!active);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light mt-3">
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
        {/* <ul className={`navbar-nav mt-2 ${styles.marginNavbar}`}>
          <li className={styles.navItem}>
            <a
              className={`${styles.navLink} ${active ? styles.active : ""}`}
              aria-current="page"
              href="#home"
              onClick={openModal}
            >
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#project" onClick={openModal}>
              Projects
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#aboutme" onClick={openModal}>
              About me
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#skills" onClick={openModal}>
              Skills
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#contact" onClick={openModal}>
              Contact
            </a>
          </li>
        </ul> */}
      </div>

      <div
        className="d-sx-none d-md-none d-sm-none d-lg-block"
        id={styles.navIcons}
      >
        <a href="mailto:paulaanayar@gmail.com" target="_blank" rel="noreferrer">
          <img width={35} src={Gmail} alt="gmail" className={styles.icons} />
        </a>

        <a href="https://github.com/panayar" target="__blank" rel="noreferrer">
          <img width={30} src={GitHub} alt="github" className={styles.icons} />
        </a>
        <a href="https://www.linkedin.com/in/paulaanaya/" target="__blank">
          <img
            width={25}
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
