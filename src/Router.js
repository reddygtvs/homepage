import { Routes, Route } from "react-router-dom";
import App from "./App";
import Projects from "./Projects";
import BasicExample from "./BasicExample";
const Router = () => {
  return (
    <div className="App">
      <div id="navbar">
        <BasicExample />
      </div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default Router;
