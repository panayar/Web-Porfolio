import React from "react";

// Import all tech icons
import cssIcon from "../../img/carrousel/cssIcon.svg";
import arch from "../../img/carrousel/arch.svg";
import figmaIcon from "../../img/carrousel/figmaIcon.svg";
import reactIcon from "../../img/carrousel/reactIcon.svg";
import mysql from "../../img/carrousel/mysql.svg";
import git from "../../img/carrousel/git.svg";
import node from "../../img/carrousel/node.svg";
import python from "../../img/carrousel/python.svg";
import typescript from "../../img/carrousel/typescript.svg";
import mongo from "../../img/carrousel/mongo.svg";
import tux from "../../img/carrousel/tux.svg";
import angular from "../../img/carrousel/angular.svg";
import sass from "../../img/carrousel/sass.svg";
import html from "../../img/carrousel/html.svg";
import jsIcon from "../../img/carrousel/jsIcon.svg";
import github from "../../img/carrousel/github.svg";
import bootstrap from "../../img/carrousel/bootstrap.svg";

import styles from "./Carrousel.module.css";

const techStack1 = [
  { src: cssIcon, alt: "CSS" },
  { src: arch, alt: "Architecture" },
  { src: figmaIcon, alt: "Figma" },
  { src: reactIcon, alt: "React" },
  { src: mysql, alt: "MySQL" },
  { src: git, alt: "Git" },
  { src: node, alt: "Node.js" },
  { src: python, alt: "Python" },
  { src: typescript, alt: "TypeScript" }
];

const techStack2 = [
  { src: mongo, alt: "MongoDB" },
  { src: tux, alt: "Linux" },
  { src: angular, alt: "Angular" },
  { src: sass, alt: "Sass" },
  { src: html, alt: "HTML" },
  { src: jsIcon, alt: "JavaScript" },
  { src: github, alt: "GitHub" },
  { src: bootstrap, alt: "Bootstrap" }
];

// Helper function to render tech icons
const renderTechIcons = (techArray, duplicateCount = 2) => {
  const duplicatedArray = Array(duplicateCount).fill(techArray).flat();
  
  return duplicatedArray.map((tech, index) => (
    <div key={`${tech.alt}-${index}`}>
      <img src={tech.src} alt={`${tech.alt} icon`} />
    </div>
  ));
};

function Carrousel() {
  return (
    <div className={styles.slider} data-aos="fade-up" data-aos-duration="1800">
      <div className={styles.tech}>
        {renderTechIcons(techStack1)}
      </div>
      <div className={`${styles.tech} ${styles.tech2}`}>
        {renderTechIcons(techStack2)}
      </div>
    </div>
  );
}

export default Carrousel;