import { Download, Mail, ArrowRight } from "lucide-react";
import { Dithering } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import GooeyText from "./GooeyText";
import avatar from "../../img/paula-avatar.png";
import cvFile from "../../files/CV - Paula Anaya Ramirez .pdf";
import styles from "./Hero.module.css";

const rotatingWords = ["the web.", "data.", "the cloud.", "mobile.", "scalable systems."];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="home" className={styles.hero}>
      {/* Left Panel */}
      <div className={styles.left}>
        <div className={styles.topArea}>
          <motion.div {...fadeUp(0.1)} className={styles.statusChip}>
            <span className={styles.statusDot} />
            Available for work
          </motion.div>
        </div>

        <div className={styles.centerArea}>
          {/* Name line */}
          <motion.div {...fadeUp(0.15)} className={styles.nameRow}>
            <img src={avatar} alt="Paula Anaya" className={styles.avatar} />
            <div>
              <h1 className={styles.name}>Paula Anaya</h1>
              <p className={styles.role}>Software Engineer</p>
            </div>
          </motion.div>

          {/* Big headline with rotating word */}
          <motion.h2 {...fadeUp(0.25)} className={styles.headline}>
            I build things for<br/>
            <span className={styles.gooeyInline}>
              <GooeyText texts={rotatingWords} morphTime={1.5} cooldownTime={2} />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p {...fadeUp(0.35)} className={styles.tagline}>
            Creating solutions across the stack, now focusing on
            data engineering and scalable backend systems.
            5+ years across fintech, healthtech & crypto.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.45)} className={styles.cta}>
            <a href={cvFile} download className={styles.btnPrimary}>
              <Download size={15} />
              Resume
            </a>
            <a href="#contact" className={styles.btnOutline}>
              <Mail size={15} />
              Contact
            </a>
            <a href="https://github.com/panayar" target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>
              <AiFillGithub size={17} />
            </a>
            <a href="https://www.linkedin.com/in/paulaanaya/" target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>
              <AiFillLinkedin size={17} />
            </a>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div {...fadeUp(0.55)} className={styles.scrollHint}>
          <span>Scroll to explore</span>
          <ArrowRight size={14} className={styles.scrollArrow} />
        </motion.div>
      </div>

      {/* Right Panel — Shader */}
      <div className={styles.right}>
        <Dithering
          style={{ height: "100%", width: "100%" }}
          colorBack={isDark ? "hsl(260, 20%, 4%)" : "hsl(260, 20%, 96%)"}
          colorFront={isDark ? "hsl(263, 70%, 58%)" : "hsl(263, 70%, 62%)"}
          shape="cat"
          type="4x4"
          pxSize={3}
          offsetX={0}
          offsetY={0}
          scale={0.8}
          rotation={0}
          speed={0.1}
        />
      </div>
    </section>
  );
}
