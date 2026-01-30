import "./App.css";
import Topscreen from "./components/topscreen/Topscreen";
import About from "./components/about/About";
import {
  aboutContent,
  skillsContet,
  servicesContent,
  portfolioContent,
  testimonialsContent,
  statisticsContent,
} from "./data/app";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Statistics from "./components/statistics/Statistics";

function App() {
  return (
    <>
      <Topscreen />
      <About data={aboutContent} />
      <Skills data={skillsContet} />
      <Services data={servicesContent} />
      <Portfolio data={portfolioContent} />
      <Testimonials data={testimonialsContent} />
      <Statistics data={statisticsContent} />
    </>
  );
}

export default App;
