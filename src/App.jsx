import About from "./components/Banner/About";
import Skills from "./components/Skills/Skills";
import Banner from "./components/Banner/Banner";
import { GoTop } from "./components/GoTop/GoTop";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Projects } from "./components/Projects/Projects";
import Contact from "./components/Banner/Contact";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <main>
          <Banner />
          <Projects/>
          <About />
          <Skills />
          <Contact/>  
          <GoTop /> 
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
