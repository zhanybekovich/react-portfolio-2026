import "./skills.css";
import Container from "../container/Container";
import SectionTitle from "../section-title/SectionTitle";
import image from "../../assets/skills-image.jpg";

function Skills({ data }) {
  return (
    <section className="skills" id="skills">
      <Container>
        <div className="skills-title">
          <SectionTitle text={data.title} />
        </div>
        <div className="skills-inner">
          <img className="skills-image" src={image} alt="Image" />
          <div className="skills-list">
            {data.skills.map((item) => (
              <p className="skills-item" key={item.label}>
                <label className="skills-item-label" htmlFor={item.label}>
                  {item.label}
                </label>

                <progress
                  className="skills-item-progress"
                  id={item.label}
                  max="100"
                  value={item.level.toString()}
                >
                  {item.level.toString()}
                </progress>
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Skills;
