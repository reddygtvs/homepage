import "./App.css";
import Tags from "./Tags";

const App = () => {
  return (
    <div id="control" className="App">
      <div>
        <h1>
          Hi, I'm Tushar <span className="dot">:)</span>
        </h1>

        <h3>React | Node.js | Express | MongoDB | Cloudflare</h3>
        <Tags />
      </div>
    </div>
  );
};

export default App;
