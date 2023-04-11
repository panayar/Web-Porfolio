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
    <section className="skills" id="aboutme">
      <div className="row" style={{ marginTop: "12%" }}>
        <div className={`d-lg-block d-md-none d-sm-none col-sm-12 col-lg-6 col-md-12 p-4 text-sm-justify text-center ${styles.off}`}>
          <div className={styles.center} style={{ marginTop: "200px" }}>
            <Carrousel />
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 col-md-12 p-4 text-sm-justify ">
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
            className="text-left second-parragraph"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            As a seasoned developer, I have a strong proficiency in various
            frontend technologies such as
            <strong>
              {" "}
              HTML, CSS, JavaScript, TypeScript, React, Angular
            </strong>{" "}
            , and various CSS frameworks. Additionally, I have experience
            working with backend technologies like
            <strong> Node.js, Express.js, and MongoDB.</strong> I have a
            comprehensive understanding of software development methodologies
            and have worked with Agile methodologies such as{" "}
            <strong>Scrum and Kanban. </strong>
            Furthermore, I am well-versed in version control systems such as
            <strong> Git </strong> and have a solid grasp of testing frameworks
            such as <strong> Jest and React test library</strong>. In terms of
            database management, I have worked with both relational and
            non-relational databases such as{" "}
            <strong> MySQL, PostgreSQL, MariaDB, and MongoDB.</strong> I am
            committed to delivering high-quality results, and my extensive
            knowledge of frontend and backend technologies enables me to develop
            seamless and robust applications. My passion for innovation, coupled
            with my ability to learn quickly, allows me to take on new
            challenges and continuously improve my skills. Overall, my skills,
            experience, and commitment to excellence make me a valuable asset to
            any development team.
          </p>
        </div>
        <div className={`col-sm-12 col-lg-6 col-md-12 d-lg-none d-md-block p-4 ${styles.center}`}>
          <Carrousel />
        </div>
      </div>
    </section>
  );
}

export default About;
