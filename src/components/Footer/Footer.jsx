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
              I'm Paula Anaya, a passionate Frontend Developer. Join me on this
              journey to create unique digital experiences together!
            </p>
            <p className={styles.copyright}>
              ©{currentYear} - All rights reserved.
            </p>
          </div>
          <div className={styles.navigationContainer}>
            <ul className={styles.listItems}>
              <li className={styles.listItem}>
                <a href="#home">Home</a>
              </li>
              <li className={styles.listItem}>
                <a href="#skills">Skills</a>
              </li>
              <li className={styles.listItem}>
                <a href="#about">About me</a>
              </li>
              <li className={styles.listItem}>
                <a href="#porfolio">Projects</a>
              </li>
            </ul>
          </div>
          <div className={styles.contactContainer}>
            <ul className={styles.listItems}>
              <li className={styles.listTitle}>Contact</li>
              <li className={styles.listItem}>
                <a href="https://www.linkedin.com/in/paulaanaya/">
                  <AiFillLinkedin />
                  Paula Anaya
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="https://github.com/panayar">
                  <AiFillGithub />
                  panayar
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="mailto:paulaanayaramirez27@gmail.com">
                  <SiGmail />
                  paulaanayar@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export { Footer };
