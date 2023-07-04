import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  const activeLinkStyle: React.CSSProperties = {
    textDecoration: "underline",
    textDecorationColor: "magenta",
    textUnderlineOffset: "6px",
    textDecorationThickness: "4px",
    color: "magenta",
  };

  return (
    <header className="Header">
      <Link
        to="/"
        id="home-link"
        style={location.pathname === "/" ? activeLinkStyle : {}}
      >
        Home
      </Link>
      <Link
        to="/projects"
        id="projects-link"
        style={location.pathname === "/projects" ? activeLinkStyle : {}}
      >
        Projects
      </Link>
      <Link
        to="/blogs"
        id="blog-link"
        style={
          location.pathname !== "/projects" && location.pathname !== "/"
            ? activeLinkStyle
            : {}
        }
      >
        Blogs
      </Link>
    </header>
  );
};

export default Header;
