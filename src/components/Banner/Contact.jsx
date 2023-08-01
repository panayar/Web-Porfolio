import React from "react";
import styles from "./Contact.module.css";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className="container" id="contact">
        <div className="row">
          <div className="col-md-12">
            <h1
              className="text-center"
              data-aos="fade-left"
              data-aos-duration="1800"
            >
              Contact Me
              <span className="orange-point">.</span>
            </h1>

            <p
              className={`${styles.description} mt-4 text-center mb-5`}
              data-aos="fade-right"
              data-aos-duration="1800"
            >
              If you are looking to hire a developer, <br /> I’m currently
              available for freelance work and job
            </p>

            <div className={styles.btnContainer}>
              <a href="https://www.linkedin.com/in/paulaanaya/" className={styles.bannerText}>
                <button className={styles.spanText}>
                  <AiFillLinkedin className={styles.bannerIcon} />
                  paulaanaya
                </button>
              </a>
              <a href="mailto:paulaanayar@gmail.com" className={styles.bannerText}>
                <button className={styles.spanText}>
                  <SiGmail className={styles.bannerIcon} />
                  paulaanayar@gmail.com
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
