import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";
import {
  SiReact, SiTypescript, SiPython, SiNodedotjs, SiAngular,
  SiMysql, SiMongodb, SiGit, SiLinux, SiFigma,
  SiSass, SiHtml5, SiCss3, SiJavascript, SiBootstrap
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import styles from "./TechStack.module.css";

const allTech = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Python", icon: SiPython },
  { name: "Java", icon: FaJava },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Angular", icon: SiAngular },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: SiGit },
  { name: "Linux", icon: SiLinux },
  { name: "Figma", icon: SiFigma },
  { name: "Sass", icon: SiSass },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Bootstrap", icon: SiBootstrap },
];

const col1 = allTech.slice(0, 4);
const col2 = allTech.slice(4, 8);
const col3 = allTech.slice(8, 12);
const col4 = allTech.slice(12, 16);

function ScrollColumn({ items, duration, direction = "up", className = "" }) {
  return (
    <div className={`${styles.column} ${className}`}>
      <motion.div
        animate={{ translateY: direction === "up" ? "-50%" : "0%" }}
        initial={{ translateY: direction === "up" ? "0%" : "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className={styles.columnInner}
      >
        {[0, 1].map((idx) => (
          <React.Fragment key={idx}>
            {items.map(({ name, icon: Icon }, i) => (
              <div className={styles.techCard} key={`${idx}-${i}`}>
                <Icon className={styles.techIcon} />
                <span className={styles.techName}>{name}</span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechStack() {
  const [ref, isInView] = useInView();

  return (
    <section className={styles.section}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className={styles.header}
      >
        <h2 className="section-title">
          Tech Stack<span className="accent">.</span>
        </h2>
      </motion.div>

      <div className={styles.columnsWrap}>
        <ScrollColumn items={col1} duration={16} direction="up" />
        <ScrollColumn items={col2} duration={20} direction="down" />
        <ScrollColumn items={col3} duration={18} direction="up" className={styles.colHideMd} />
        <ScrollColumn items={col4} duration={22} direction="down" className={styles.colHideLg} />
      </div>
    </section>
  );
}
