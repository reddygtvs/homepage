import React from "react";

interface LinkProps {
  href: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  openInNewTab?: boolean; // Optional prop to control noopener noreferrer behavior
}

const Link: React.FC<LinkProps> = ({
  href,
  name,
  imageSrc,
  imageAlt,
  openInNewTab,
}) => {
  const target = openInNewTab ? "_blank" : "_self";
  const rel = openInNewTab === false ? "" : "noopener noreferrer";

  return (
    <a
      className="App-link mx-[1.5vw] mt-4 inline-flex rounded-lg px-2 py-1 text-black underline decoration-red-600 decoration-2 underline-offset-4 hover:bg-green-300 hover:text-white hover:underline-offset-2 "
      href={href}
      target={target}
      rel={rel}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="icon h-6 w-6 object-contain p-[0.5px]"
      />
      {name}
    </a>
  );
};

export default Link;
