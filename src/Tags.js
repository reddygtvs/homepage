import Link from "./Link";
import pdf from "./pdf/tushar-resume.pdf";
const Tags = () => {
  const github = {
    href: "https://github.com/reddygtvs",
    name: "./Github",
  };
  const linkedin = {
    href: "https://www.linkedin.com/in/tushar-reddy/",
    name: "@LinkedIn",
  };
  const resume = {
    href: pdf,
    name: "Resume",
  };
  const contact = {
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
