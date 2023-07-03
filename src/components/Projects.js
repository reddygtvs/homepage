import React from "react";
import CardReact from "./CardReact";
import phonebook from "../images/phonebook.webp";
import countries from "../images/country.webp";
import gym from "../images/gym.webp";
import haemo from "../images/haemo.webp";

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
    text: "HTML/CSS/JS app which gives you a personalized 5/3/1 workout routine",
    href: "https://gym.tusharreddy.com",
    img: gym,
  };
  const haemoData = {
    title: "ImageClassifier",
    text: "Used Tensorflow, Keras & Numpy to identify cattle haemoprotozoan diseases",
    href: "https://haemo-classification.streamlit.app/",
    img: haemo,
  };

  return (
    <div id="control" className="App">
      <div className="horizon">
        <CardReact {...phonebookData} />
        <CardReact {...countryData} />
        <CardReact {...gymData} />
        <CardReact {...haemoData} />
      </div>
    </div>
  );
};

export default Projects;
