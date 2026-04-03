import styles from "./cards.module.css";

export default function BioCard() {
  return (
    <div className={styles.bioCard}>
      <span className={styles.label}>Who I am</span>
      <h3 className={styles.bioTitle}>
        Software Engineer with <span className={styles.accent}>5+ years</span> of experience
      </h3>
      <p className={styles.bioText}>
        Delivering scalable applications across fintech, healthtech, and crypto.
        I specialize in building clean, efficient systems using React, Java, and
        modern web technologies. Recently expanding toward data engineering,
        working with cloud platforms, data pipelines, and backend infrastructure.
      </p>
    </div>
  );
}
