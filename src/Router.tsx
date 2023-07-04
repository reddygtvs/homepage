import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import MdxComponent from "./components/MdxComponent";

const Router: React.FC = () => {
  return (
    <div className="Pancake">
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:filename" element={<MdxComponent />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Router;
