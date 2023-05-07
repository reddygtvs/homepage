import "./App.css";
import { Link } from "react-router-dom";

const NavbarStock = () => {
  return (
    <header className="nav">
      <Link to="/" id="header">
        Home
      </Link>
      <Link to="/projects" id="header">
        Projects
      </Link>
    </header>
  );
};

export default NavbarStock;
