import "./App.css";
import Tags from "./components/Tags";

const App = () => {
  return (
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
  );
};

export default App;
