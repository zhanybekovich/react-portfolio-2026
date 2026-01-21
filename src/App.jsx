import "./App.css";
import Topscreen from "./components/topscreen/Topscreen";
import About from "./components/about/About";
import { aboutContent, skillsContet } from "./data/app";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Topscreen />
      <About data={aboutContent} />
      <Skills data={skillsContet} />
    </>
  );
}

export default App;
