import React, { Suspense, lazy } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Hero.module.css";

const FloatingShape = lazy(() => import("../ThreeScene/FloatingShape"));

export default function HeroScene() {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const { theme } = useTheme();

  if (!isDesktop) return null;

  return (
    <div className={styles.threeContainer}>
      <Suspense fallback={null}>
        <FloatingShape theme={theme} />
      </Suspense>
    </div>
  );
}
