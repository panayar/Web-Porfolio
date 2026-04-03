import { useState } from "react";
import { useInView } from "../../hooks/useInView";
import { ExternalLink } from "lucide-react";
import { AiFillGithub } from "react-icons/ai";
import intra from "../../img/intra.png";
import hoobank from "../../img/hoobank.png";
import gpt3 from "../../img/gpt3.png";
import selia from "../../img/selia.png";
import clippy from "../../img/clippy.png";
import styles from "./Projects.module.css";

const projects = [
  {
    id: "clippy",
    title: "Clippy",
    role: "macOS Plugin",
    imgUrl: clippy,
    url: "https://clippy.bar/",
  },
  {
    id: "intra",
    title: "INTRA",
    role: "Design & Development",
    imgUrl: intra,
    url: "https://panayar.github.io/INTRA_website/",
  },
  {
    id: "hoobank",
    title: "HooBank",
    role: "Design & Development",
    imgUrl: hoobank,
    url: "https://panayar.github.io/hoobank/",
  },
  {
    id: "selia",
    title: "Selia",
    role: "Design & Development",
    imgUrl: selia,
    url: "https://selia.co/",
  },
  {
    id: "gpt3",
    title: "GPT-3",
    role: "Design & Development",
    imgUrl: gpt3,
    url: "https://panayar.github.io/GPT-3-website/",
  },
];

// Split into 3 staggered columns
const col1 = projects.filter((_, i) => i % 3 === 0);
const col2 = projects.filter((_, i) => i % 3 === 1);
const col3 = projects.filter((_, i) => i % 3 === 2);

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);
  const [sectionRef, isInView] = useInView();

  return (
    <section id="projects" className="section">
      <div className="section-label">
        <span className="star">✱</span>
        <span>PORTFOLIO</span>
      </div>
      <h2 className="section-title">
        Projects<span className="accent">.</span>
      </h2>

      <div
        ref={sectionRef}
        className={`${styles.showcase} ${isInView ? styles.visible : ""}`}
      >
        {/* Left: Staggered Photo Grid */}
        <div className={styles.photoGrid}>
          <div className={styles.photoCol}>
            {col1.map((project) => (
              <PhotoCard
                key={project.id}
                project={project}
                hoveredId={hoveredId}
                onHover={setHoveredId}
                className={styles.photoSmall}
              />
            ))}
          </div>
          <div className={`${styles.photoCol} ${styles.photoColOffset1}`}>
            {col2.map((project) => (
              <PhotoCard
                key={project.id}
                project={project}
                hoveredId={hoveredId}
                onHover={setHoveredId}
                className={styles.photoMedium}
              />
            ))}
          </div>
          <div className={`${styles.photoCol} ${styles.photoColOffset2}`}>
            {col3.map((project) => (
              <PhotoCard
                key={project.id}
                project={project}
                hoveredId={hoveredId}
                onHover={setHoveredId}
                className={styles.photoLarge}
              />
            ))}
          </div>
        </div>

        {/* Right: Project Name List */}
        <div className={styles.nameList}>
          {projects.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}

          <div className={styles.moreWrap}>
            <a
              href="https://github.com/panayar"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.moreLink}
            >
              <AiFillGithub size={16} />
              View all on GitHub
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Photo Card ── */
function PhotoCard({ project, hoveredId, onHover, className = "" }) {
  const isActive = hoveredId === project.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.photo} ${className} ${isDimmed ? styles.dimmed : ""}`}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={project.imgUrl}
        alt={project.title}
        className={styles.photoImg}
        loading="lazy"
        style={{
          filter: isActive
            ? "grayscale(0) brightness(1)"
            : "grayscale(0.3) brightness(0.9)",
        }}
      />
      {isActive && (
        <div className={styles.photoOverlay}>
          <ExternalLink size={18} />
        </div>
      )}
    </a>
  );
}

/* ── Project Name Row ── */
function ProjectRow({ project, hoveredId, onHover }) {
  const isActive = hoveredId === project.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.row} ${isDimmed ? styles.dimmed : ""}`}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className={styles.rowHeader}>
        <span
          className={`${styles.indicator} ${isActive ? styles.indicatorActive : ""}`}
        />
        <span
          className={`${styles.rowName} ${isActive ? styles.rowNameActive : ""}`}
        >
          {project.title}
        </span>

        {/* Link icon — slides in on hover */}
        <span
          className={`${styles.rowIcon} ${isActive ? styles.rowIconActive : ""}`}
        >
          <ExternalLink size={12} />
        </span>
      </div>
      <p className={styles.rowRole}>{project.role}</p>
    </a>
  );
}
