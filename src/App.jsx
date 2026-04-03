import React from "react";
import { motion } from "framer-motion";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BentoGrid from "./components/BentoGrid/BentoGrid";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { GoTop } from "./components/GoTop/GoTop";
import PetCat from "./components/PetCat/PetCat";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

function AnimatedSection({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <Layout>
      <Navbar />
      <main>
        <Hero />
        <AnimatedSection>
          <BentoGrid />
        </AnimatedSection>
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
        <Contact />
        <GoTop />
      </main>
      <Footer />
      <PetCat />
    </Layout>
  );
}

export default App;
