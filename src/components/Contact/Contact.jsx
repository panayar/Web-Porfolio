import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.lamp}>
      {/* Lamp glow — simplified, no layout-triggering animations */}
      <div className={styles.lampArea}>
        {/* Left beam */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className={styles.beamLeft}
        />

        {/* Right beam */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className={styles.beamRight}
        />

        {/* Glow orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className={styles.glowOrb}
        />

        {/* Light line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={styles.lightLine}
        />

        {/* Top fade */}
        <div className={styles.topFade} />
        {/* Bottom fade */}
        <div className={styles.bottomFade} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
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
