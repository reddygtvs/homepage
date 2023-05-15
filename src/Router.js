import { Routes, Route } from "react-router-dom";
import App from "./App";
import Projects from "./components/Projects";
import NavbarStock from "./components/NavbarStock";
import Footer from "./components/Footer";

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
