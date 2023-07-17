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
      className="App-link underline-offset-4 decoration-2 decoration-red-600 mt-[15px] rounded-lg inline-flex mx-[1.5vw] px-2 py-1 text-black hover:text-white hover:bg-green-300 hover:underline-offset-2 "
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={imageSrc} alt={imageAlt} className="image-class" />
      {name}
    </a>
  );
};

export default Link;
