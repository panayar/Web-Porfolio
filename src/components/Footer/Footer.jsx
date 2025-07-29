import Logo from "../../img/logo.svg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaHeart } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Main Footer Content */}
        <div className={styles.footerMain}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.brand}>
              <img src={Logo} alt="Paula Anaya Logo" width={60} />
              <span>Paula Anaya</span>
            </div>
            <p className={styles.aboutMe}>
              Full-stack developer transitioning to data engineering. 
              Building scalable applications and data pipelines that solve real-world problems.
            </p>
          </div>

          {/* Social Links Section */}
          <div className={styles.socialSection}>
            <h3 className={styles.socialTitle}>Let's Connect</h3>
            <div className={styles.socialLinks}>
              <a 
                href="https://github.com/panayar" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub Profile"
              >
                <AiFillGithub />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/paulaanaya/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn Profile"
              >
                <AiFillLinkedin />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:paulaanayar@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Email Contact"
              >
                <SiGmail />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>©{currentYear} Paula Anaya. All rights reserved.</p>
          </div>
          <div className={styles.loveMessage}>
            <p>
              Created with <FaHeart className={styles.heartIcon} /> and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };