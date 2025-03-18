import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex w-screen items-center justify-center">
      <a
        className="ease ml-2 mr-2 transform px-6 py-4 text-lg text-[black] no-underline transition duration-500 hover:-translate-y-1 hover:text-[magenta]"
        href="https://github.com/reddygtvs/homepage"
        target="_blank"
        rel="noopener noreferrer"
      >
        $ource | 2023 - 2024
      </a>
    </footer>
  );
};

export default Footer;
