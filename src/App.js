import "./App.css";
import Tags from "./components/Tags";
import Image from "react-bootstrap/Image";
import pfp from "./images/pfp.webp";

const App = () => {
  return (
    <div id="firstLoad">
      <div id="pfp">
        <div>
          <Image
            id="image"
            roundedCircle="true"
            src={pfp}
            alt="pfp"
            style={{ maxWidth: "250px", maxHeight: "250px" }}
          />
        </div>
      </div>
      <div id="control" className="App">
        <div>
          <h1 className="name">
            Hi, I'm Tushar <span id="dot">:)</span>
          </h1>

          <h4 id="skills" style={{ color: "#f22952" }}>
            React | Node.js | Express | MongoDB | Cloudflare
          </h4>
          <Tags />
        </div>
      </div>
    </div>
  );
};

export default App;
