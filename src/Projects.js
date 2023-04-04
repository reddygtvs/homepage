import React from "react";
import CardReact from "./CardReact";
import phonebook from "./images/phonebook.png";
import countries from "./images/country.png";

const Projects = () => {
  const phonebookData = {
    title: "Phonebook",
    text: "Webapp used to store and modify records, using a self hosted API, React and mongoDB",
    href: "https://phonebook.tusharreddy.com",
    img: phonebook,
  };
  const countryData = {
    title: "CountryAPI",
    text: "React App used to fetch the Country/Weather data using external APIs",
    href: "https://countries.tusharreddy.com",
    img: countries,
  };
  return (
    <div id="control" className="App">
      <div className="Horizon">
        <CardReact {...phonebookData} />
        <CardReact {...countryData} />
      </div>
    </div>
  );
};

export default Projects;
