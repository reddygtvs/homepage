import React from "react";
import Link from "./Link";

interface TagData {
  href: string;
  name: string;
}

const NotFound: React.FC = () => {
  const homeLink: TagData = {
    href: "/",
    name: "Head back Home",
  };
  return (
    <div id="center">
      <h1 className="name">
        404 not Found <span id="dot">:(</span>
      </h1>
      <Link {...homeLink} />
    </div>
  );
};

export default NotFound;
