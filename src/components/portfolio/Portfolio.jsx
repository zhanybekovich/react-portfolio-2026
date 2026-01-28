import Container from "../container/Container";
import SectionTitle from "../section-title/SectionTitle";
import "./portfolio.css";
import { useState } from "react";

function Portfolio({ data }) {
  const [selected, setSelected] = useState("all");

  const filteredWorks =
    selected === "all"
      ? data.works
      : data.works.filter((item) => item.category === selected);

  return (
    <section id="portfolio" className="portfolio">
      <Container>
        <div className="portfolio-top">
          <SectionTitle text={data.title} />
        </div>
        <nav className="portfolio-nav">
          {data.nav.map((item) => (
            <button
              className={
                selected === item.id ? "portfolio-btn active" : "portfolio-btn"
              }
              key={item.id}
              onClick={() => setSelected(item.id)}
            >
              {item.title}
            </button>
          ))}
        </nav>

        <ul className="portfolio-list">
          {filteredWorks.map((item) => (
            <li key={item.id}>
              <img className="portfolio-item-img" src={item.img} alt="" />
            </li>
          ))}
        </ul>
        <div className="portfolio-bottom">
          <a className="portfolio-link" href="#">
            Завантажити ще
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Portfolio;
