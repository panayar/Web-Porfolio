import Banner from "./components/Banner/Banner";
import SkillsBanner from "./components/Banner/SkillsBanner";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import ProjectBanner from "./components/Banner/ProjectBanner";
import "./css/global.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Banner />
        <SkillsBanner />
        <ProjectBanner />
        <Form /> 
      </div>
    </div>
  );
}

export default App;
