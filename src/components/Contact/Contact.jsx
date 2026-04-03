import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.lamp}>
      {/* Lamp apparatus */}
      <div className={styles.lampArea}>
        {/* Left beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className={styles.beamLeft}
        >
          <div className={styles.maskBottom} />
          <div className={styles.maskLeft} />
        </motion.div>

        {/* Right beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className={styles.beamRight}
        >
          <div className={styles.maskBottom} />
          <div className={styles.maskRight} />
        </motion.div>

        {/* Blur layers */}
        <div className={styles.blurWide} />
        <div className={styles.blurBackdrop} />

        {/* Glow */}
        <div className={styles.glowLarge} />
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className={styles.glowFocused}
        />

        {/* Light line */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className={styles.lightLine}
        />

        {/* Top mask */}
        <div className={styles.topMask} />
      </div>

      {/* Content — positioned below lamp */}
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
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
      </div>
    </section>
  );
}
