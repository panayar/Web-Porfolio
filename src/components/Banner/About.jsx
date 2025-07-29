import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carrousel from "../Carrousel/Carrousel";
import styles from "./About.module.css";

function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <section className={styles.aboutContainer} id="aboutme">
      <div className="container-fluid">
        <div className={`row ${styles.contentRow}`} id={styles.content}>
          <div className={`col-lg-6 d-none d-lg-flex ${styles.carouselColumn}`}>
            <div className={styles.carouselWrapper}>
              <Carrousel />
            </div>
          </div>
          <div className={`col-lg-6 col-md-12 col-sm-12 ${styles.textColumn}`}>
            <div className={styles.textContent}>
              <p
                className="p-subtitle"
                data-aos="fade-down"
                data-aos-duration="1800"
              >
                Tech Stack
                <span className="orange-point">.</span>
              </p>
              <h1
                data-aos="fade-up"
                data-aos-duration="1800"
                className="p-title"
              >
                ABOUT ME
              </h1>
              <p
                className="text-left second-parragraph"
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                Software Engineer with 5+ years of experience delivering scalable
                applications across fintech, healthtech, and crypto. I specialize in
                building clean, efficient systems using React, Java, and modern web
                technologies. Recently, I've been expanding my focus toward data
                engineering, working with cloud platforms, data pipelines, and
                backend infrastructure. I'm passionate about solving complex
                problems, writing maintainable code, and growing in the world of
                data and cloud technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;