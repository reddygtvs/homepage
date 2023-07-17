import React from "react";

interface LinkProps {
  href: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
}

const Link: React.FC<LinkProps> = ({ href, name, imageSrc, imageAlt }) => {
  return (
    <a
      className="App-link underline underline-offset-4 decoration-2 decoration-red-600 mt-4 rounded-lg inline-flex mx-[1.5vw] px-2 py-1 text-black hover:text-white hover:bg-green-300 hover:underline-offset-2 "
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="object-contain h-6 w-6 icon p-[0.5px]"
      />
      {name}
    </a>
  );
};

export default Link;
