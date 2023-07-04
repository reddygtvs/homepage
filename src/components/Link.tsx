import React from "react";

interface LinkProps {
  href: string;
  name: string;
}

const Link: React.FC<LinkProps> = ({ href, name }) => {
  return (
    <a
      className="App-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  );
};

export default Link;
