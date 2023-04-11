import About from "./components/Banner/About";
import Skills from "./components/About/Skills";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import ProjectBanner from "./components/Banner/ProjectBanner";
import "./css/global.css";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <main>
          <Banner />
          <br />
          <br />
          <br />
          <br />
          <About />
          <Skills />
          <ProjectBanner />
          <Form />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
