import React, { useEffect } from "react";
import Robot from "../../img/robot.svg";
import MiddlePic from "../../img/middlepic.svg";
import Typewriter from "typewriter-effect";
import AOS from "aos"; 
import pdf from "../../files/Paula Andrea Anaya Ramirez.pdf";

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
      <div class="row">
        <div class="col-sm-12 col-lg-6 col-md-12 p-4 text-sm-justify">
          <div class={styles.bannerDescription}>
            <h3 class={styles.greeting}>
              <Typewriter
                options={{
                  strings: [
                    "Hola! yo soy",
                    "Hi! there, I'm",
                    "Bonjour! Je suis",
                    "Ciao! Sono",
                    "Oi!, eu sou",
                    "안녕하세요! 저는",
                    "こんにちは! 私は",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <span className={styles.wave}>👋🏼</span>
            </h3>
            <h2 class="title" data-aos="fade-right" data-aos-duration="1300">
              Paula Anaya, <br />a Frontend Developer
            </h2>
            <p
              class={styles.description}
              data-aos="fade-right"
              data-aos-duration="1800"
            >
              I'm a Bogotá based frontend developer with a passion for creating
              visually stunning and highly functional websites and applications.
              I'm currently studying systems engineering at El Bosque University
              and have been developing since 2019.
            </p>
            <br />
            <a href="#porfolio">
              <button class="mt-2 orgBtn">See projects</button>
            </a>
            <a href={pdf} download>
              <button class="mt-2 whiteBtn">Download CV</button>
            </a>
          </div>
        </div>
        <div class="col-lg-6 d-sm-none d-lg-block" id={styles.bgImg}>
          <img id={styles.bannerImg} src={Robot} alt="bannerImage" />
        </div>
        <div className="col-12 text-center d-lg-none d-sm-block">
          <img
            src={MiddlePic}
            alt="middle"
            className={styles.middlePic}
            data-aos="fade-right"
            data-aos-duration="1800"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
