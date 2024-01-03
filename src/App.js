import logo from "./logo.svg";
import "./App.css";
import quotes from "./Quotes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <br />
        <button
          className="button"
          onClick={() => {
            alert(quotes[0]);
          }}
        >
          Simple Button
        </button>
        <h1>Quote list example:</h1>
        {quotes.map((q) => {
          return <p>{q}</p>;
        })}
      </header>
    </div>
  );
}

export default App;
