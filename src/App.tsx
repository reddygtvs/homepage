import React from "react";
import Tags from "./components/Tags";
import Image from "react-bootstrap/Image";
import pfp from "./images/pfp.webp";

const App: React.FC = () => {
  return (
    <>
      <div className="grid place-items-center">
        <div>
          <Image
            id="image"
            roundedCircle={true}
            src={pfp}
            alt="pfp"
            style={{ maxWidth: "250px", maxHeight: "250px" }}
          />
        </div>
      </div>

      <div className="grid w-full place-items-center text-center">
        <div className="grid">
          <div>
            <h1 className="name mb-2">
              Hi, I'm Tushar <span id="dot">:)</span>
            </h1>
          </div>
          <div className="mb-2">
            <h4 id="skills" style={{ color: "#f22952" }}>
              React | Node.js | Express | MongoDB | Cloudflare
            </h4>
          </div>
          <Tags />
        </div>
      </div>
    </>
  );
};

export default App;
