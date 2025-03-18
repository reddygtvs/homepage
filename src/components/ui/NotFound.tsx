import React from "react";
import Link from "./Link";
import img404 from "../../assets/icons/404.svg";

interface TagData {
  href: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  openInNewTab: boolean; // Optional prop to control noopener noreferrer behavior
}

const NotFound: React.FC = () => {
  const homeLink: TagData = {
    href: "/",
    name: "Head_Back_Home",
    imageSrc: img404,
    imageAlt: "404",
    openInNewTab: false,
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
