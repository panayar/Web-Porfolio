import { Database } from "lucide-react";
import styles from "./cards.module.css";

export default function FocusCard() {
  return (
    <div className={styles.focusCard}>
      <div className={styles.focusIcon}>
        <Database size={24} />
      </div>
      <span className={styles.label}>Current focus</span>
      <h4 className={styles.focusTitle}>Data Engineering</h4>
      <p className={styles.focusText}>
        Building data pipelines, cloud infrastructure, and scalable backend systems.
      </p>
    </div>
  );
}
