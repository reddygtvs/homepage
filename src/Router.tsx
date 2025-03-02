import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import App from "./App";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

const Router: React.FC = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] place-items-center">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:filename" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Router;
