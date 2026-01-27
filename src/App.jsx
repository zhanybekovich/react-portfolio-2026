import "./App.css";
import Topscreen from "./components/topscreen/Topscreen";
import About from "./components/about/About";
import {
  aboutContent,
  skillsContet,
  servicesContent,
  portfolioContent,
} from "./data/app";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <>
      <Topscreen />
      <About data={aboutContent} />
      <Skills data={skillsContet} />
      <Services data={servicesContent} />
      <Portfolio data={portfolioContent} />
    </>
  );
}

export default App;
