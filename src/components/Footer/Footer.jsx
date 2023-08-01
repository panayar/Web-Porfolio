import Logo from "../../img/logo.svg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>
            <div className={styles.brand}>
              <img src={Logo} alt="logo" width={60} /> Paula Anaya
            </div>
            <p className={styles.aboutMe}>
              I'm Paula Anaya, a passionate Developer. Join me on this journey
              to create unique digital experiences together!
            </p>
            <p className={`${styles.copyright} mt-2`}>
              ©{currentYear} - All rights reserved.
            </p>
          </div>
          <div className={styles.listItem}>
              <a href="https://github.com/panayar" target="__blank">
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/paulaanaya/"
                target="__blank"
              >
                <AiFillLinkedin />
              </a>
              <a href="mailto:paulaanayaramirez27@gmail.com" target="__blank">
                <SiGmail />
              </a>
            </div>
        </div>
      </footer>
    </>
  );
}

export { Footer };
