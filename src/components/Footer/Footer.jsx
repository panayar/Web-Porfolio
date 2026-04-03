import { Mail, Heart } from "lucide-react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.top}>
          <a href="#home" className={styles.logo}>
            PA<span className={styles.logoDot}>.</span>
          </a>

          <div className={styles.socials}>
            <a href="https://github.com/panayar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <AiFillGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/paulaanaya/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <AiFillLinkedin size={18} />
            </a>
            <a href="mailto:paulaanayar@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Paula Anaya. All rights reserved.</p>
          <p className={styles.love}>
            Built with <Heart size={14} className={styles.heart} /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
