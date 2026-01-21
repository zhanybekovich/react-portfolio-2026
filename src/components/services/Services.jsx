import Container from "../container/Container";
import SectionTitle from "../section-title/SectionTitle";
import "./services.css";

function Services({ data }) {
  return (
    <section id="services" className="services">
      <Container>
        <div className="services-title">
          <SectionTitle text={data.title} />
        </div>
        <div className="services-list">
          {data.services.map((item) => (
            <div className="services-item" key={item.title}>
              <img
                className="services-item-icon"
                src={item.icon}
                alt={item.title}
              />
              <h3 className="services-item-title">{item.title}</h3>
              <p className="services-item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;
