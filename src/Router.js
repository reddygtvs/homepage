import { Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Projects from "./Projects";
import NavbarStock from "./NavbarStock";

const Router = () => {
  return (
    <>
      <NavbarStock />
      <div className="App">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
};

export default Router;
