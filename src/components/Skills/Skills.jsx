// Skills Component (Skills/index.js)
import styles from "./styles.module.css";
import { Service } from "../Service/index";
import { FaFeatherAlt } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsLightningChargeFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Skills() {
  const services = [
    {
      title: "Data Pipeline Architecture",
      text: "I design scalable data pipelines using cloud platforms for efficient data flow and analytics.",
      icon: <BsStars />,
    },
    {
      title: "Full-Stack Development",
      text: "I build interactive web applications using React, Java, and modern technologies.",
      icon: <BsLightningChargeFill />,
    },
    {
      title: "Cloud Infrastructure",
      text: "I implement backend systems and cloud solutions for application and data processing workflows.",
      icon: <BsHeartFill />,
    },
    {
      title: "Performance Optimization",
      text: "I apply best practices to ensure scalability, maintainability, and optimal performance.",
      icon: <FaFeatherAlt />,
    },
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="skills" className={styles.container}>
      <div className={styles.headerContainer}>
        <p className="p-subtitle text-center" data-aos="fade-down" data-aos-duration="1800">
          Core Focus
          <span className="orange-point">.</span>
        </p>
        <h1
          className="p-title text-center"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          SKILLS
        </h1>
      </div>
      
      <div
        className={styles.servicesGrid}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {services.map((item, i) => (
          <Service
            key={i}
            title={item.title}
            text={item.text}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;