import React from "react";
import styles from "./Form.module.css";

function Form() {
  return (
    <section
      class={styles.contact}
      id={styles.contact}
      data-aos="fade-left"
      data-aos-duration="1300"
    >
      <div class={styles.formContainer} id="contact">
        <img
          src="http://drive.google.com/uc?export=view&id=1c1Bkplhr1QpWQLxeuCD51EFYyTwkRJWc"
          alt="logo"
          class={styles.contactLogo}
        />

        <form action="/" class={styles.form}>
          <label for="name" class={styles.label}>
            Name
          </label>
          <input
            type="name"
            id="mail"
            placeholder="Name"
            class={styles.input}
          />

          <label for="mail" class={styles.label}>
            Email address
          </label>
          <input
            type="email"
            id="mail"
            placeholder="johndoe@email.com"
            class={styles.input}
          />

          <label for="password" class={styles.label}>
            Message
          </label>
          <textarea placeholder="Write your message"></textarea>

          <input type="submit" value="Submit" class={styles.primaryButton} />

          <div class={styles.socialMedia}>
            <a
              target="_blank"
              href="https://github.com/panayar"
              rel="noreferrer"
            >
              <img
                class={styles.socialIcon}
                src="http://drive.google.com/uc?export=view&id=1zKvaXauX5kL0-RJ3-9j9Nr0CaiAamOsU"
                alt="github"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/paulaanaya/"
              rel="noreferrer"
            >
              <img
                class={styles.socialIcon}
                src="http://drive.google.com/uc?export=view&id=1uAhoYeHp49TlVNDsEFJfZ36aZqkd_RiR"
                alt="linkedin"
              />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
