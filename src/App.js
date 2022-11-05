import "./App.css";
import pdf from "./pdf/tushar-resume.pdf";

const App = () => {
  return (
    <div id="control" className="App">
      <div className="horizon">
        <h1>
          Hi, I'm Tushar <span class="dot">:)</span>
        </h1>
      </div>
      <div>
        <h3>Git | React | Node.js | Express | Cloudflare | Fly.io</h3>
      </div>
      <div className="Horizon">
        <a
          className="App-link"
          href="https://github.com/reddygtvs"
          target="_blank"
          rel="noopener noreferrer"
        >
          ./Github
        </a>

        <a
          className="App-link"
          href="https://www.linkedin.com/in/g-tushar-reddy-551018207/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="App-link"
          href="https://twitter.com/reddygtvs"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Twitter
        </a>
        <a
          className="App-link"
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>

        <a
          className="App-link"
          href="mailto:reddygtvs@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default App;
