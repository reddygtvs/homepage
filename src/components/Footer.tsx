import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex w-screen justify-center items-center">
      <a
        className="hover:text-[magenta] px-6 py-4 text-[black] no-underline ml-2 mr-2 text-[1.1rem] hover:-translate-y-1 transition transform duration-500 ease"
        href="https://github.com/reddygtvs/homepage"
        target="_blank"
        rel="noopener noreferrer"
      >
        $Source | 2023 - 2024
      </a>
    </footer>
  );
};

export default Footer;
