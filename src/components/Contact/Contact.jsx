import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import styles from "./Contact.module.css";

function LampContainer({ children }) {
  const bg = "var(--color-bg-primary)";
  const accent = "#A78BFA";
  const accentLight = "#C4B5FD";

  return (
    <div className={styles.lamp}>
      <div className={styles.lampInner}>
        {/* Left beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          style={{
            position: "absolute",
            inset: "auto",
            right: "50%",
            height: "14rem",
            overflow: "visible",
            backgroundImage: `conic-gradient(from 70deg at center top, ${accent}, transparent, transparent)`,
          }}
        >
          <div style={{
            position: "absolute", width: "100%", left: 0, bottom: 0, height: "10rem", zIndex: 20,
            background: bg,
            WebkitMaskImage: "linear-gradient(to top, white, transparent)",
            maskImage: "linear-gradient(to top, white, transparent)",
          }} />
          <div style={{
            position: "absolute", width: "10rem", height: "100%", left: 0, bottom: 0, zIndex: 20,
            background: bg,
            WebkitMaskImage: "linear-gradient(to right, white, transparent)",
            maskImage: "linear-gradient(to right, white, transparent)",
          }} />
        </motion.div>

        {/* Right beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          style={{
            position: "absolute",
            inset: "auto",
            left: "50%",
            height: "14rem",
            overflow: "visible",
            backgroundImage: `conic-gradient(from 290deg at center top, transparent, transparent, ${accent})`,
          }}
        >
          <div style={{
            position: "absolute", width: "10rem", height: "100%", right: 0, bottom: 0, zIndex: 20,
            background: bg,
            WebkitMaskImage: "linear-gradient(to left, white, transparent)",
            maskImage: "linear-gradient(to left, white, transparent)",
          }} />
          <div style={{
            position: "absolute", width: "100%", right: 0, bottom: 0, height: "10rem", zIndex: 20,
            background: bg,
            WebkitMaskImage: "linear-gradient(to top, white, transparent)",
            maskImage: "linear-gradient(to top, white, transparent)",
          }} />
        </motion.div>

        {/* Blur bg */}
        <div style={{
          position: "absolute", top: "50%", height: "12rem", width: "100%",
          transform: "translateY(3rem) scaleX(1.5)",
          background: bg, filter: "blur(2rem)",
        }} />

        {/* Backdrop blur */}
        <div style={{
          position: "absolute", top: "50%", zIndex: 50, height: "12rem", width: "100%",
          background: "transparent", opacity: 0.1,
          backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        }} />

        {/* Large glow */}
        <div style={{
          position: "absolute", inset: "auto", zIndex: 50,
          height: "9rem", width: "28rem",
          transform: "translateY(-50%)",
          borderRadius: "9999px",
          background: accent, opacity: 0.5, filter: "blur(3rem)",
        }} />

        {/* Focused glow */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          style={{
            position: "absolute", inset: "auto", zIndex: 30,
            height: "9rem", transform: "translateY(-6rem)",
            borderRadius: "9999px",
            background: accentLight, filter: "blur(2rem)",
          }}
        />

        {/* Light line */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          style={{
            position: "absolute", inset: "auto", zIndex: 50,
            height: "0.125rem", transform: "translateY(-7rem)",
            background: accentLight,
          }}
        />

        {/* Top mask */}
        <div style={{
          position: "absolute", inset: "auto", zIndex: 40,
          height: "11rem", width: "100%",
          transform: "translateY(-12.5rem)",
          background: bg,
        }} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className={styles.inner}
        >
          <div className={styles.label}>
            <span className={styles.labelStar}>✱</span>
            <span>AVAILABLE FOR WORK</span>
          </div>
          <h2 className={styles.heading}>
            Let's build something<br />
            <span className={styles.accent}>together.</span>
          </h2>
          <p className={styles.text}>
            Looking to hire a developer? I'm currently available for freelance
            work and full-time positions.
          </p>
          <div className={styles.actions}>
            <a href="mailto:paulaanayar@gmail.com" className={styles.btnPrimary}>
              <Mail size={18} />
              paulaanayar@gmail.com
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </LampContainer>
    </section>
  );
}
