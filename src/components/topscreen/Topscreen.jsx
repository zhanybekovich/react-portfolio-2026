import "./topscreen.css";
import Container from "../container/Container";
import Logo from "../logo/Logo";
import menuItems from "../../data/navigation";
import MenuLink from "../menu-link/MenuLink";
import Title from "../title/Title";
import { title } from "../../data/app";

function Topscreen() {
  return (
    <div className="top-screen">
      <Container>
        <header className="top-screen-header">
          <a href="#">
            <Logo />
          </a>

          <nav className="nav">
            {menuItems.map((item) => (
              <MenuLink label={item.label} url={item.url} key={item.label} />
            ))}
          </nav>
        </header>
        <div className="top-screen-inner">
          <Title name={title.name} role={title.role} />
        </div>
      </Container>
    </div>
  );
}

export default Topscreen;
