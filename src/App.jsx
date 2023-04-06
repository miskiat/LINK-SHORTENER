import "./App.css";

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
        <p className="note">
          All Misky's URLs and click analytics are public and can be accessed by
          anyone
        </p>
      </div>
    </div>
  );
}

export default App;
