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
      <div className="row" id={styles.content}>
        <div
          className={`d-lg-block d-md-none d-sm-none col-sm-12 col-lg-6 col-md-12 p-4 text-sm-justify ${styles.off}`}
        >
          <div className={styles.center} style={{ marginTop: "250px" }}>
            <Carrousel />
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 col-md-12 p-3 d-flex flex-column justify-content-center">
          <h1
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            About me
            <span className="orange-point">.</span>
          </h1>
          <p
            className="text-center subtitle"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            I have experience with the following technologies:
          </p>
          <p
            className="text-justify second-parragraph"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            Experienced developer with proficiency in frontend{" "}
            <strong>(TypeScript, JavaScript, React, Angular)</strong> and
            backend <strong>(Node.js, Express.js, MongoDB)</strong>. Familiar
            with Agile, <strong>Git, testing frameworks </strong>, and various
            databases. Passionate about innovation and quick learning. Valuable
            asset to any development team. Dedicated to delivering high-quality
            results and meeting project deadlines. Effective communicator and
            collaborator within cross-functional teams. Committed to continuous
            improvement and staying up-to-date with the latest industry trends.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
