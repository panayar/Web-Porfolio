import React, { useEffect } from "react";

import Circle from "../../img/circle.svg";
import Robot from "../../img/singleRobot.svg";
import AOS from "aos";
import "../../css/global.css";
import pdf from "../../files/CV - Paula Anaya Ramirez .pdf";

import styles from "./Banner.module.css";

function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <div className={styles.home} id="home">
      <div className={`${styles.bannerContainer} row`}>
        <div className="col-sm-12 col-lg-6 col-md-12 p-4 text-sm-justify">
          <div className={styles.bannerDescription}>
            <h1
              className="title"
              data-aos="fade-right"
              data-aos-duration="1300"
            >
              Hi! I’m Paula <span className={`${styles.wave}`} >👋🏼</span>
              <br /> <span className={styles.subtitle}>Software Engineer.</span>
            </h1>
            <p
              className={styles.description}
              data-aos="fade-right"
              data-aos-duration="1800"
            >
              Creating solutions across the stack, now focusing on data engineering and scalable backend systems.
            </p>
            <br />
            <a href="#project">
              <button className="mt-2 orgBtn">See Projects</button>
            </a>
            <a href={pdf} download>
              <button class="mt-2 whiteBtn">Download CV</button>
            </a>
          </div>
        </div>
        <div class="col-lg-6 d-sm-none d-lg-block" id={styles.bgImg}>
          <img
            id={styles.bannerImg}
            className={styles.floating}
            src={Robot}
            alt="bannerImage"
          />
          <img id={styles.circle} src={Circle} alt="circle" />
        </div>
      </div>
    </div>
  );
}

export default Banner;

