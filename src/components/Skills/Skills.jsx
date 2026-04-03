import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";
import { ChevronLeft, ChevronRight, Database, Code, Cloud, Zap, GitBranch, Layout, Server, Shield, Cpu } from "lucide-react";
import styles from "./Skills.module.css";

const skills = [
  {
    icon: Database,
    title: "Data Pipeline Architecture",
    text: "I design scalable data pipelines using cloud platforms for efficient data flow and analytics.",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    text: "I build interactive web applications using React, Java, and modern technologies.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    text: "I implement backend systems and cloud solutions for application and data processing workflows.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    text: "I apply best practices to ensure scalability, maintainability, and optimal performance.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    text: "I craft intuitive interfaces and user experiences with attention to detail and accessibility.",
  },
  {
    icon: GitBranch,
    title: "Version Control & CI/CD",
    text: "I manage codebases with Git workflows and automated deployment pipelines.",
  },
  {
    icon: Server,
    title: "API Design",
    text: "I architect RESTful and GraphQL APIs with clean contracts and thorough documentation.",
  },
  {
    icon: Shield,
    title: "Security Practices",
    text: "I implement authentication, authorization, and data protection across the stack.",
  },
  {
    icon: Cpu,
    title: "Data Engineering",
    text: "I build ETL processes and data warehousing solutions for analytics and reporting.",
  },
];

export default function Skills() {
  const [ref, isInView] = useInView();
  const [list, setList] = useState(skills);
  const [cardSize, setCardSize] = useState(320);

  useEffect(() => {
    const update = () => setCardSize(window.innerWidth < 640 ? 260 : 320);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleMove = (steps) => {
    const newList = [...list];
    if (steps > 0) {
      for (let i = 0; i < steps; i++) {
        const item = newList.shift();
        newList.push({ ...item, _key: Math.random() });
      }
    } else {
      for (let i = 0; i < Math.abs(steps); i++) {
        const item = newList.pop();
        newList.unshift({ ...item, _key: Math.random() });
      }
    }
    setList(newList);
  };

  return (
    <section id="skills" className="section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className={styles.header}
      >
        <div className="section-label" style={{ justifyContent: "center" }}>
          <span className="star">✱</span>
          <span>CORE FOCUS</span>
        </div>
        <h2 className="section-title">
          Skills<span className="accent">.</span>
        </h2>
        <p className={styles.subtitle}>Core competencies I bring to every project.</p>
      </motion.div>

      <div className={styles.carousel} style={{ height: cardSize + 140 }}>
        {list.map((skill, index) => {
          const position = list.length % 2
            ? index - (list.length + 1) / 2
            : index - list.length / 2;
          const isCenter = position === 0;
          const Icon = skill.icon;

          return (
            <div
              key={skill._key || skill.title}
              className={`${styles.card} ${isCenter ? styles.cardActive : ""}`}
              onClick={() => handleMove(position)}
              style={{
                width: cardSize,
                height: cardSize,
                transform: `
                  translate(-50%, -50%)
                  translateX(${(cardSize / 1.6) * position}px)
                  translateY(${isCenter ? -40 : position % 2 ? 10 : -10}px)
                  rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
                `,
                zIndex: isCenter ? 10 : 0,
              }}
            >
              <div className={styles.cardIcon}>
                <Icon size={28} />
              </div>
              <h3 className={styles.cardTitle}>{skill.title}</h3>
              <p className={styles.cardText}>{skill.text}</p>
            </div>
          );
        })}

        <div className={styles.controls}>
          <button onClick={() => handleMove(-1)} className={styles.controlBtn} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => handleMove(1)} className={styles.controlBtn} aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
