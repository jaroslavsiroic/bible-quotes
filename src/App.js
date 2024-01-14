import "./App.css";
import quotes from "./Quotes";
import vakc from "./logo/VAKC-logo-500x500.png";
import joanitai from "./logo/logo-JonoBroliai-blanc-H.png";
import oaza from "./logo/Oaza-Wilno.png";
import bractwo from "./logo/image003.jpg";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState({
    quote: "Wylosuj cytat z Pisma Świętego",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [showVerse, setShowVerse] = useState(true);

  return (
    <div className="container">
      {/* <p className="organizersText">Organizatorzy:</p> */}
      <div className={`main-content ${showVerse ? "" : "main-content-hidden"}`}>
        <div className={`text-area ${showVerse ? "" : "text-area-hidden"}`}>
          <span className="quote">{quote?.quote}</span>
          <div className="writer">{quote?.writer}</div>
        </div>

        <div className="button-area">
          <div className="btn">
            <button
              id="Qbtn"
              disabled={isButtonDisabled}
              onClick={() => {
                setIsButtonDisabled(true);

                setShowVerse(false); // Hide the verse

                setTimeout(() => {
                  // Get quote
                  const random = Math.floor(Math.random() * quotes.length);
                  setQuote(quotes[random]);

                  setShowVerse(true); // Show the new verse after a delay
                }, 800); // Adjust the delay as needed

                // Re-enable the button
                setTimeout(() => setIsButtonDisabled(false), 30000);
              }}
            >
              Słowo Boże dla ciebie
            </button>
          </div>
        </div>
      </div>
      <div className="header">
        <img className="pic3" src={bractwo} alt="" />
        <img className="pic1" src={joanitai} alt="" />
        <img className="pic4" src={oaza} alt="" />
        <img className="pic2" src={vakc} alt="" />
      </div>
    </div>
  );
}

export default App;
