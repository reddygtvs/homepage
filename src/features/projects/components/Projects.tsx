import React from "react";
import CardReact from "./CardReact";
import phonebook from "../../../assets/images/phonebook.webp";
import countries from "../../../assets/images/country.webp";
import gym from "../../../assets/images/gym.webp";
import haemo from "../../../assets/images/haemo.webp";
import typeAnalysis from "../../../assets/images/type.webp";
import movieConnectionsImg from "../../../assets/images/graph.webp";
import movieConnectionsPdf from "../../../assets/pdf/graphFinal-2.pdf";

interface ProjectData {
  title: string;
  text: string;
  href: string;
  img: string;
}

const Projects: React.FC = () => {
  const phonebookData: ProjectData = {
    title: "Phonebook",
    text: "Webapp used to store and modify records, using a self hosted API and mongoDB",
    href: "https://phonebook.tusharreddy.com",
    img: phonebook,
  };
  const countryData: ProjectData = {
    title: "CountryAPI",
    text: "React App used to fetch the Country/Weather data using external APIs",
    href: "https://countries.tusharreddy.com",
    img: countries,
  };
  const gymData: ProjectData = {
    title: "GymRoutine",
    text: "HTML/CSS/JS app which gives you a personalized 5/3/1 workout routine",
    href: "https://gym.tusharreddy.com",
    img: gym,
  };
  const haemoData: ProjectData = {
    title: "ImageClassifier",
    text: "Used Tensorflow, Keras & Numpy to identify cattle haemoprotozoan diseases",
    href: "https://haemo-classification.streamlit.app/",
    img: haemo,
  };

  const typeAnalysisData: ProjectData = {
    title: "TypeAnalysis",
    text: "Web app to fetch and analyze your historical TypeRacer performance data, providing detailed insights.",
    href: "https://typeracer-analysis.streamlit.app/",
    img: typeAnalysis,
  };

  const movieConnectionsData: ProjectData = {
    title: "MovieConnections",
    text: "Graph Theory analysis exploring the intricate connections between various movies.",
    href: movieConnectionsPdf,
    img: movieConnectionsImg,
  };

  return (
    <div className="grid w-[100vw] place-items-center text-center">
      <div>
        <CardReact {...typeAnalysisData} />
        <CardReact {...movieConnectionsData} />
        <CardReact {...phonebookData} />
        <CardReact {...countryData} />
        <CardReact {...gymData} />
        <CardReact {...haemoData} />
      </div>
    </div>
  );
};

export default Projects;
