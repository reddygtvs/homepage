import { Routes, Route } from "react-router-dom";
import App from "./App";
import Projects from "./components/Projects";
import NavbarStock from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/Blog";

const Router = () => {
  return (
    <div className="Pancake">
      <NavbarStock />
      <div className="App">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Router;
