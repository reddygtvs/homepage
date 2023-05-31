import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const activeLinkStyle = {
    textDecoration: "underline",
    // textDecorationColor: "#f22952",
    textDecorationColor: "magenta",
    textUnderlineOffset: 6 + "px",
    textDecorationThickness: 4 + "px",
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
        Blog
      </Link>
    </header>
  );
};

export default Header;
