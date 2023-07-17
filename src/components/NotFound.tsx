import React from "react";
import Link from "./Link";
import img404 from "../icons/404.svg";

interface TagData {
  href: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
}

const NotFound: React.FC = () => {
  const homeLink: TagData = {
    href: "/",
    name: "Head_Back_Home",
    imageSrc: img404,
    imageAlt: "404",
  };
  return (
    <div className="grid place-items-center">
      <h1 className="name">
        404 not Found <span id="dot">:(</span>
      </h1>
      <Link {...homeLink} />
    </div>
  );
};

export default NotFound;
