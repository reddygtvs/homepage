import "./App.css";
import Tags from "./Tags";

const App = () => {
  return (
    <div id="control" className="App">
      <div>
        {/* make "Hi, I'm tushar in red color" */}

        <h1 id="name">
          Hi, I'm Tushar <span className="dot">:)</span>
        </h1>

        <h3 id="skills" style={{ color: "#f22952" }}>
          React | Node.js | Express | MongoDB | Cloudflare
        </h3>
        <Tags />
      </div>
    </div>
  );
};

export default App;
