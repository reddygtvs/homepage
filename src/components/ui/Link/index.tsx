import React from "react";

interface LinkProps {
  href: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  openInNewTab?: boolean;
}

const Link: React.FC<LinkProps> = ({
  href,
  name,
  imageSrc,
  imageAlt,
  openInNewTab = true,
}) => {
  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : "_self"}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className="App-link mx-[1.5vw] mt-4 inline-flex rounded-lg px-2 py-1 text-black underline decoration-red-600 decoration-2 underline-offset-4 hover:bg-green-300 hover:text-white hover:underline-offset-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-600"
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
