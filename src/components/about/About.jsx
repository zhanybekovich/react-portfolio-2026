import Container from "../container/Container";
import "./about.css";
import SectionTitle from "../section-title/SectionTitle";

function About({ data }) {
  const markup = { __html: data.content };
  return (
    <section id="about" className="about">
      <Container>
        <div className="about-title">
          <SectionTitle text={data.title} />
        </div>

        <div className="about-content" dangerouslySetInnerHTML={markup}></div>
      </Container>
    </section>
  );
}

export default About;
