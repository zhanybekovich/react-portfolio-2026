import "./title.css";

function Title({ name, role }) {
  return (
    <h1 className="title">
      Вітаю, я {name} <br />
      <span className="title-role">{role}</span>
    </h1>
  );
}

export default Title;
