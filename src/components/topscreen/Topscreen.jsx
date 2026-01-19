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
      <div className="top-screen-top">
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
        </Container>
      </div>
      <div className="top-screen-content">
        <Container>
          <Title name={title.name} role={title.role} />
        </Container>
      </div>
      <div className="top-screen-bottom">
        <a className="scroll-to" href="#about">
          <span>дивитися роботи</span>
          <svg
            width="37"
            height="22"
            viewBox="0 0 37 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4999 21.091C17.8368 21.091 17.1738 20.8378 16.6682 20.3325L0.759023 4.4232C-0.253008 3.41117 -0.253008 1.77034 0.759023 0.758716C1.77064 -0.252905 3.41115 -0.252905 4.42326 0.758716L18.4999 14.8362L32.5766 0.759208C33.5886 -0.252414 35.229 -0.252414 36.2405 0.759208C37.253 1.77083 37.253 3.41166 36.2405 4.42369L20.3316 20.333C19.8258 20.8384 19.1628 21.091 18.4999 21.091Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Topscreen;
