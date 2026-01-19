import "./link.css";

function MenuLink({ label, url }) {
  return (
    <a className="link" href={url}>
      {label}
    </a>
  );
}

export default MenuLink;
