import { Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Projects from "./Projects";
import NavbarStock from "./NavbarStock";
import Footer from "./Footer";

const Router = () => {
  return (
    <div className="Pancake">
      <NavbarStock />
      <div className="App">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Router;
