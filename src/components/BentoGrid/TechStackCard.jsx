import {
  SiReact, SiTypescript, SiPython, SiNodedotjs, SiAngular,
  SiMysql, SiMongodb, SiGit, SiLinux, SiFigma,
  SiSass, SiHtml5, SiCss3, SiJavascript, SiBootstrap
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import styles from "./cards.module.css";

const techStack = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Python", icon: SiPython },
  { name: "Java", icon: FaJava },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: SiGit },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Angular", icon: SiAngular },
  { name: "Figma", icon: SiFigma },
  { name: "Sass", icon: SiSass },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "Linux", icon: SiLinux },
];

export default function TechStackCard() {
  return (
    <div className={styles.techCard}>
      <span className={styles.label}>Tech stack</span>
      <div className={styles.techPills}>
        {techStack.map(({ name, icon: Icon }) => (
          <span key={name} className={styles.pill}>
            <Icon className={styles.pillIcon} />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
