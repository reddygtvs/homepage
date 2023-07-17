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
    <header className="flex justify-center place-items-center w-screen">
      <Link
        to="/"
        className="hover:text-[magenta] p-6 text-[black] no-underline mx-[2vw] text-lg hover:-translate-y-1 transition transform duration-500 ease"
        style={location.pathname === "/" ? activeLinkStyle : {}}
      >
        Home
      </Link>
      <Link
        to="/projects"
        className="hover:text-[magenta] p-6 text-[black] no-underline mx-[2vw] text-lg hover:-translate-y-1 transition transform duration-500 ease"
        style={location.pathname === "/projects" ? activeLinkStyle : {}}
      >
        Projects
      </Link>
      <Link
        to="/blogs"
        className="hover:text-[magenta] p-6 text-[black] no-underline mx-[2vw] text-lg hover:-translate-y-1 transition transform duration-500 ease"
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
