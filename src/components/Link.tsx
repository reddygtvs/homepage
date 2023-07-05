import React from "react";

interface LinkProps {
  href: string;
  name: string;
}

const Link: React.FC<LinkProps> = ({ href, name }) => {
  return (
    <a
      className="App-link underline-offset-2 mt-[15px] rounded-[0.5vh] inline-flex mx-[1.5vw] px-[0.5vw]"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  );
};

export default Link;
