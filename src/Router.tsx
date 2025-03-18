import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import App from "./App";
import NotFound from "./components/ui/NotFound";
import Projects from "./features/projects/components/Projects";
import Blog from "./features/blog/components/Blog";
import BlogPost from "./features/blog/components/BlogPost";

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
