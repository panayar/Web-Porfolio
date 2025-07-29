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
      title: "Unique Interfaces",
      text: "I design original and different user interfaces, so your project has a unique and outstanding touch.",
      icon: <BsStars />,
    },
    {
      title: "Interactive Applications",
      text: "I develop web applications focused on interaction and dynamism, so your users have a memorable experience.",
      icon: <BsLightningChargeFill />,
    },
    {
      title: "Continuous Learning",
      text: "I stay constantly trained in programming languages and technologies to offer innovative and quality solutions.",
      icon: <BsHeartFill />,
    },
    {
      title: "Optimal Performance",
      text: "I apply best practices and write clean code to ensure the scalability and maintainability of the project.",
      icon: <FaFeatherAlt />,
    },
  ];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="skills" className={styles.container}>
      <p className="p-subtitle text-center" data-aos="fade-down" data-aos-duration="1800">
        Core Focus.
        <span className="orange-point">.</span>
      </p>
      <h1
        className="p-title mb-5 text-center"
        data-aos="fade-up"
        data-aos-duration="1800"
      >
        SKILLS
      </h1>
      <div
        className={`${styles.servicesContainer} mt-4`}
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
