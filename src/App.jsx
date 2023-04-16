import "./App.css";
import BackgroundAnimation from "./Components/BackgroundAnimation/BackgroundAnimation";

function App() {
  return (
    <div className="App">
      <div className="section">
        <h1 className="header">Misky's URL Shortener</h1>
        <div className="main">Simplify your links</div>
        <div className="linkk">
          <input
            className="input"
            placeholder="Your Original URL here "
            type="link"
          />
          <button className="button">SHORTEN URL</button>
        </div>
        <div className="result">
          <div className="box"></div>
          <button>COPY</button>
        </div>
        <div className="instruction">
          <li>
            Paste the link to be truncated or shortened in the input field.
          </li>
          <li>Clik the Shortify button.</li>
          <li>
            Copy the link generated in the paragraph field by clicking the copy
            button
          </li>
        </div>
        <p className="note">
          All Misky's URLs and click analytics are public and can be accessed by
          anyone
        </p>
      </div>
      <BackgroundAnimation />
    </div>
  );
}

export default App;
