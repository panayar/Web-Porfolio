import { useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";
import { ArrowRight, Database, MapPin, Briefcase } from "lucide-react";
import TechStackCard from "./TechStackCard";
import workspace from "../../img/workspace.png";
import styles from "./BentoGrid.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

function SpotlightCard({ children, className }) {
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div className={`${styles.card} ${className}`} onMouseMove={handleMouseMove}>
      <div className={styles.spotlight} />
      {children}
    </div>
  );
}

export default function BentoGrid() {
  const [ref, isInView] = useInView();

  return (
    <section id="about" className="section" ref={ref}>
      {/* ── Header ── */}
      <motion.div
        custom={0}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp}
        className={styles.headerLabel}
      >
        <span className={styles.star}>✱</span>
        <span>WHO I AM</span>
      </motion.div>

      {/* ── Headline ── */}
      <motion.div
        custom={1}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp}
        className={styles.headline}
      >
        <h2 className={styles.headlineText}>
          Software Engineer with <span className={styles.accent}>5+ years</span> building
          scalable systems across fintech, healthtech & crypto.
        </h2>
      </motion.div>

      {/* ── Two-Column Grid ── */}
      <div className={styles.grid}>
        {/* Left — Photo + Quick Info */}
        <motion.div custom={2} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUp}>
          <div className={styles.photoBlock}>
            <svg width="0" height="0" style={{ position: "absolute" }}>
              <defs>
                <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
                  <path d="M0.02,0.08 C0.05,0.01 0.15,0 0.25,0.01 C0.4,0.02 0.55,0 0.7,0.01 C0.85,0.02 0.95,0.04 0.98,0.1 C1,0.18 1,0.3 0.99,0.45 C0.98,0.6 1,0.75 0.98,0.88 C0.96,0.95 0.9,0.99 0.78,1 C0.6,1 0.4,0.98 0.22,1 C0.1,1 0.04,0.97 0.02,0.92 C0,0.82 0.01,0.7 0,0.55 C0,0.4 0,0.2 0.02,0.08Z" />
                </clipPath>
              </defs>
            </svg>
            <div className={styles.photoClip}>
              <img src={workspace} alt="Workspace" className={styles.photoImg} />
            </div>
            <div className={styles.photoOverlay}>
              <span className={styles.photoLabel}>where the magic supposedly happens</span>
            </div>
          </div>

          <div className={styles.quickInfo}>
            <div className={styles.infoItem}>
              <MapPin size={14} className={styles.infoIcon} />
              <span>Available remotely</span>
            </div>
            <div className={styles.infoItem}>
              <Briefcase size={14} className={styles.infoIcon} />
              <span>Open to freelance & full-time</span>
            </div>
            <div className={styles.infoItem}>
              <Database size={14} className={styles.infoIcon} />
              <span>Focusing on data engineering</span>
            </div>
          </div>
        </motion.div>

        {/* Right — Bio + Tech Stack */}
        <div className={styles.rightCol}>
          <motion.div custom={3} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUp}>
            <SpotlightCard className={styles.bioCard}>
              <p className={styles.bioText}>
                I specialize in building clean, efficient systems using React, Java, and
                modern web technologies. Recently expanding toward data engineering,
                working with cloud platforms, data pipelines, and backend infrastructure.
              </p>
              <a href="#contact" className={styles.contactLink}>
                Let's work together <ArrowRight size={14} />
              </a>
            </SpotlightCard>
          </motion.div>

          <motion.div custom={4} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUp}>
            <SpotlightCard className={styles.techCard}>
              <TechStackCard />
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
