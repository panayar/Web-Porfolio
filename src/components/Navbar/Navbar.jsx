import { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Menu, X, Sun, Moon, Mail } from "lucide-react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setPastHero(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${pastHero ? styles.centered : ""}`}>
      <nav className={styles.nav}>
        <a href="#home" className={styles.logo}>
          PA<span className={styles.logoDot}>.</span>
        </a>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a
            href="https://github.com/panayar"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="GitHub"
          >
            <AiFillGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/paulaanaya/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="LinkedIn"
          >
            <AiFillLinkedin size={18} />
          </a>

          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div ref={menuRef} className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className={styles.mobileSocials}>
            <a href="https://github.com/panayar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <AiFillGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/paulaanaya/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <AiFillLinkedin size={20} />
            </a>
            <a href="mailto:paulaanayar@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
