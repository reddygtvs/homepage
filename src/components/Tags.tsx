import React from "react";
import Link from "./Link";
import pdf from "../pdf/tushar-resume.pdf";
import githubIcon from "../icons/github.svg";
import linkedinIcon from "../icons/linkedin.svg";
import resumeIcon from "../icons/resume.svg";
import contactIcon from "../icons/mail.svg";

interface TagData {
  href: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
}

const Tags: React.FC = () => {
  const github: TagData = {
    href: "https://github.com/reddygtvs",
    name: "Github",
    imageSrc: githubIcon,
    imageAlt: "Link to my Github",
  };
  const linkedin: TagData = {
    href: "https://www.linkedin.com/in/tushar-reddy/",
    name: "LinkedIn",
    imageSrc: linkedinIcon,
    imageAlt: "Link to my LinkedIn (pun not intended)",
  };
  const resume: TagData = {
    href: pdf,
    name: "Resume",
    imageSrc: resumeIcon,
    imageAlt: "Link to my Resume",
  };
  const contact: TagData = {
    href: "mailto:tusharreddy2023@gmail.com",
    name: "Contact",
    imageSrc: contactIcon,
    imageAlt: "My email contact",
  };

  return (
    <div className="pb-5 grid place-items-center flex-row sm:flex sm:flex-col">
      <Link {...github} />
      <Link {...linkedin} />
      <Link {...resume} />
      <Link {...contact} />
    </div>
  );
};

export default Tags;
