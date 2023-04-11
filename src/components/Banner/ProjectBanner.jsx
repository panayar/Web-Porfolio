import React, {useEffect} from "react";
import AOS from "aos";
import styles from "./ProjectBanner.module.css";

function ProjectBanner() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <section className="porfolio" id={`${styles.porfolio} porfolio`}>
      <div class="row" id="porfolio" style={{ marginTop: "12%" }}>
        <h1
          className="text-center mb-5"
          data-aos="fade-right"
          data-aos-duration="1800"
        >
          My Projects
          <span className="orange-point">.</span>
        </h1>
        <div
          class="center col-sm-12 col-md-6 col-lg-3 mt-3"
          data-aos="fade-righ"
          data-aos-duration="1800"
        >
          <div class={`${styles.cardMe} ${styles.projectTwo} ${styles.center}`}>
            <div class={styles.cardContent}>
              <div class={styles.cardTitle}>
                <h5>Intra Website</h5>
              </div>
              <p class={styles.cardBody}>
                web page developed with REACT and bootstrap, for a technology
                company
              </p>
              <a href="https://panayar.github.io/INTRA_website/" class={styles.button}>
                Go to website
              </a>
            </div>
          </div>
        </div>
        <div
          class="center col-sm-12 col-md-6 col-lg-3 mt-3"
          data-aos="fade-righ"
          data-aos-duration="1800"
        >
          <div class={`${styles.cardMe} ${styles.projectThree} ${styles.center}`}>
            <div class={styles.cardContent}>
              <div class={styles.cardTitle}>
                <h5>Weather App</h5>
              </div>
              <p class={styles.cardBody}>
                Weather application developed in React, which uses the
                openweathermap API to obtain data in real time
              </p>
              <a href="https://panayar.github.io/weather-app/" class={styles.button}>
                Go to website
              </a>
            </div>
          </div>
        </div>
        <div
          class="center col-sm-12 col-md-6 col-lg-3 mt-3"
          data-aos="fade-righ"
          data-aos-duration="1800"
        >
          <div class={`${styles.cardMe} ${styles.projectOne} ${styles.center}`}>
            <div class={styles.cardContent}>
              <div class={styles.cardTitle}>
                <h5>Adertic Website</h5>
              </div>
              <p class={styles.cardBody}>
                Website built in HTML and CSS, for a law firm specialized in
                computer law
              </p>
              <a
                target="_blank"
                href="https://www.adertic.com.co/"
                class={styles.button}
                rel="noreferrer"
              >
                Go to website
              </a>
            </div>
          </div>
        </div>
        <div
          class="center col-sm-12 col-md-6 col-lg-3 mt-3"
          data-aos="fade-righ"
          data-aos-duration="1800"
        >
          <div class={`${styles.cardMe} ${styles.projectFour} ${styles.center}`}>
            <div class={styles.cardContent}>
              <div class={styles.cardTitle}>
                <h5>Selia</h5>
              </div>
              <p class={styles.cardBody}>
                website to find psychological help, on this page you can
                schedule virtual appointments . website developed in react
              </p>
              <a
                href="https://selia.co/"
                target="_blank"
                class={styles.button}
                rel="noreferrer"
              >
                Go to website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectBanner;
