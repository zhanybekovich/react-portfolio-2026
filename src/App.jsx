import "./App.css";
import Topscreen from "./components/topscreen/Topscreen";
import About from "./components/about/About";
import { aboutContent, skillsContet, servicesContent } from "./data/app";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Topscreen />
      <About data={aboutContent} />
      <Skills data={skillsContet} />
      <Services data={servicesContent} />
    </>
  );
}

export default App;
