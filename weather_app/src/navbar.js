import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <CustomLink href={"/weather"}>Weather Today</CustomLink>
          </li>
          <li>
            <CustomLink href={"/forecast"}>Weather Forecast</CustomLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;

function CustomLink(props) {
  const { href, children } = props;
  return (
    <div>
      <a href={href}>{children}</a>
    </div>
  );
}
