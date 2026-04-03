import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import styles from "./cards.module.css";

const socials = [
  {
    icon: AiFillGithub,
    label: "GitHub",
    url: "https://github.com/panayar",
  },
  {
    icon: AiFillLinkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/paulaanaya/",
  },
  {
    icon: SiGmail,
    label: "Email",
    url: "mailto:paulaanayar@gmail.com",
  },
];

export default function SocialCard() {
  const [hovered, setHovered] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!clicked) return;
    const timer = setTimeout(() => setClicked(false), 250);
    return () => clearTimeout(timer);
  }, [clicked]);

  const handleEnter = useCallback((label) => {
    setHovered(label);
    setRotation(Math.random() * 24 - 12);
  }, []);

  return (
    <div className={styles.animatedSocialRow}>
        {socials.map(({ icon: Icon, label, url }) => {
          const isHovered = hovered === label;
          const isDimmed = hovered !== null && !isHovered;

          return (
            <a
              key={label}
              href={url}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className={styles.animatedSocialItem}
              style={{ opacity: isDimmed ? 0.4 : 1 }}
              onMouseEnter={() => handleEnter(label)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setClicked(true)}
            >
              {/* Floating icon on hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    className={styles.floatingIcon}
                    initial={{ y: 0, opacity: 0, filter: "blur(4px)", rotate: rotation }}
                    animate={{
                      y: -12,
                      opacity: 1,
                      filter: "blur(0px)",
                      scale: clicked ? [1, 1.3, 1] : 1,
                    }}
                    exit={{ y: 0, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={36} />
                  </motion.div>
                )}
              </AnimatePresence>

              <span className={styles.animatedSocialName}>{label}</span>
            </a>
          );
        })}
    </div>
  );
}
