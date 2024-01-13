import "./App.css";
import quotes from "./Quotes";
import vakc from "./logo/VAKC-logo-500x500.png";
import joanitai from "./logo/logo-JonoBroliai-blanc-H.png";
import oaza from "./logo/Oaza-Wilno.png";
import bractwo from "./logo/image003.jpg";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  return (
    <div className="container">
      {/* <p className="organizersText">Organizatorzy:</p> */}
      <div className="header">
        <img className="pic3" src={bractwo} alt="" />
        <img className="pic1" src={joanitai} alt="" />
        <img className="pic4" src={oaza} alt="" />
        <img className="pic2" src={vakc} alt="" />
      </div>

      <div className="main-content">
        <div className="text-area">
          <span className="quote">{quote.quote}</span>
        </div>

        <div className="writer">{quote.writer}</div>

        <div className="button-area">
          <div className="btn">
            <button id="Qbtn">Wylosuj cytat</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
