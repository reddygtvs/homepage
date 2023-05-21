import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/" id="home-link">
        Home
      </Link>
      <Link to="/projects" id="projects-link">
        Projects
      </Link>
    </header>
  );
};

export default Header;
