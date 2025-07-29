import React, { useState } from "react";
import styles from "./Contact.module.css";
import { IoSend } from "react-icons/io5";
import Send from "../../img/send-icon.png";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:paulaanayar@gmail.com?subject=Contact from ${email}&body=Hi Paula, I'm interested in discussing a project with you.`;
      setEmail("");
    }
  };

  return (
    <section className={styles.contact}>
      <div className="container" id="contact">
        <div className="row">
          <div className="col-md-12">
            <h1
              className={`text-center ${styles.title}`}
              data-aos="fade-down"
              data-aos-duration="1800"
            >
              Contact With Me!
            </h1>

            <p
              className={`${styles.description} mt-4 text-center mb-5`}
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              If you are looking to hire a developer, <br />
              I'm currently available for freelance work and job
            </p>

            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div
                  className={styles.inputContainer}
                  data-aos="fade-up"
                  data-aos-duration="1800"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your email address"
                    className={styles.emailInput}
                    required
                  />
                  <button
                    type="submit"
                    className={styles.sendButton}
                    aria-label="Send email"
                  >
                    <img
                      src={Send}
                      alt="Send Icon"
                      className={styles.sendIcon}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
