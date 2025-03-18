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
    <header className="flex w-screen place-items-center justify-center">
      <Link
        to="/"
        className="ease mx-[2vw] transform p-6 text-lg text-[black] no-underline transition duration-500 hover:-translate-y-1 hover:text-[magenta]"
        style={location.pathname === "/" ? activeLinkStyle : {}}
      >
        Home
      </Link>
      <Link
        to="/projects"
        className="ease mx-[2vw] transform p-6 text-lg text-[black] no-underline transition duration-500 hover:-translate-y-1 hover:text-[magenta]"
        style={location.pathname === "/projects" ? activeLinkStyle : {}}
      >
        Projects
      </Link>
      <Link
        to="/blogs"
        className="ease mx-[2vw] transform p-6 text-lg text-[black] no-underline transition duration-500 hover:-translate-y-1 hover:text-[magenta]"
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
