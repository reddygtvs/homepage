import React from "react";
import CardReact from "./CardReact";
import phonebook from "./images/phonebook.png";

const Projects = () => {
  const phonebookData = {
    title: "Phonebook",
    text: "Webapp used to store and modify records, using a self hosted API, React and mongoDB",
    href: "https://phonebook.tusharreddy.com",
    img: phonebook,
  };
  return (
    <div id="control" className="App">
      <div className="Horizon">
        <CardReact {...phonebookData} />
      </div>
    </div>
  );
};

export default Projects;
