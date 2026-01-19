import "./App.css";
import Topscreen from "./components/topscreen/Topscreen";
import About from "./components/about/About";
import { aboutContent } from "./data/app";

function App() {
  return (
    <>
      <Topscreen />
      <About data={aboutContent} />
    </>
  );
}

export default App;
