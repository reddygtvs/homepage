import React from "react";
import Link from "./Link";
import pdf from "../pdf/tushar-resume.pdf";

interface TagData {
  href: string;
  name: string;
}

const Tags: React.FC = () => {
  const github: TagData = {
    href: "https://github.com/reddygtvs",
    name: "./Github",
  };
  const linkedin: TagData = {
    href: "https://www.linkedin.com/in/tushar-reddy/",
    name: "@LinkedIn",
  };
  const resume: TagData = {
    href: pdf,
    name: "Resume",
  };
  const contact: TagData = {
    href: "mailto:tusharreddy2023@gmail.com",
    name: "Contact Me",
  };

  return (
    <div id="links">
      <Link {...github} />
      <Link {...linkedin} />
      <Link {...resume} />
      <Link {...contact} />
    </div>
  );
};

export default Tags;
