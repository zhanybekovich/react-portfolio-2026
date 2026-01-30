import Container from "../container/Container";
import "./statistics.css";

function Statistics({ data }) {
  return (
    <section id="statistics" className="stat">
      <Container>
        <div className="stat-wrapper">
          {data.items.map((item, idx) => (
            <div className="stat-item" key={idx}>
              <img
                src={item.icon}
                alt={item.title}
                className="stat-item-icon"
              />
              <h3 className="stat-item-title">{item.title}</h3>
              <p className="stat-item-count">{item.count}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Statistics;
