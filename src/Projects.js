import React from "react";
import CardReact from "./CardReact";
import phonebook from "./images/phonebook.png";
import countries from "./images/country.png";
import gym from "./images/gym.png";

const Projects = () => {
  const phonebookData = {
    title: "Phonebook",
    text: "Webapp used to store and modify records, using a self hosted API and mongoDB",
    href: "https://phonebook.tusharreddy.com",
    img: phonebook,
  };
  const countryData = {
    title: "CountryAPI",
    text: "React App used to fetch the Country/Weather data using external APIs",
    href: "https://countries.tusharreddy.com",
    img: countries,
  };
  const gymData = {
    title: "GymRoutine",
    text: "HTML/CSS/Javascript webapp which gives you the 5/3/1 workout routine",
    href: "https://gym.tusharreddy.com",
    img: gym,
  };
  return (
    <div id="control" className="App">
      <div className="horizon">
        <CardReact {...phonebookData} />
        <CardReact {...countryData} />
        <CardReact {...gymData} />
      </div>
    </div>
  );
};

export default Projects;
