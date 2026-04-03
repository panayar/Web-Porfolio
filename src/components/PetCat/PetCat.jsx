import { Suspense, lazy, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "./PetCat.module.css";

const CatScene = lazy(() => import("./CatScene"));

export default function PetCat() {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const [minimized, setMinimized] = useState(false);

  if (!isDesktop) return null;

  return (
    <div className={`${styles.container} ${minimized ? styles.minimized : ""}`}>
      <button
        className={styles.toggleBtn}
        onClick={() => setMinimized(!minimized)}
        aria-label={minimized ? "Show cat" : "Hide cat"}
      >
        {minimized ? "🐱" : "×"}
      </button>
      {!minimized && (
        <div className={styles.canvas}>
          <Suspense fallback={null}>
            <CatScene />
          </Suspense>
        </div>
      )}
      {!minimized && <p className={styles.name}>Bebe</p>}
    </div>
  );
}
