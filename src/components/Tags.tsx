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
    imageAlt: "Github",
  };
  const linkedin: TagData = {
    href: "https://www.linkedin.com/in/tushar-reddy/",
    name: "LinkedIn",
    imageSrc: linkedinIcon,
    imageAlt: "LinkedIn",
  };
  const resume: TagData = {
    href: pdf,
    name: "Resume",
    imageSrc: resumeIcon,
    imageAlt: "Resume",
  };
  const contact: TagData = {
    href: "mailto:tusharreddy2023@gmail.com",
    name: "Contact",
    imageSrc: contactIcon,
    imageAlt: "Contact Me",
  };

  return (
    <div className="pb-[6vh] underline">
      <Link {...github} />
      <Link {...linkedin} />
      <Link {...resume} />
      <Link {...contact} />
    </div>
  );
};

export default Tags;
