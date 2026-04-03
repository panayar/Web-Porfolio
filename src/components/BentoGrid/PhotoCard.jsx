import workspace from "../../img/workspace.png";
import styles from "./cards.module.css";

export default function PhotoCard() {
  return (
    <div className={styles.photoCard}>
      <img
        src={workspace}
        alt="Workspace setup"
        className={styles.photoImg}
        loading="lazy"
      />
      <div className={styles.photoOverlay}>
        <span className={styles.photoLabel}>my workspace</span>
      </div>
    </div>
  );
}
