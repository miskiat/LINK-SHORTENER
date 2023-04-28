import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";
import BackgroundAnimation from "./Components/BackgroundAnimation/BackgroundAnimation";

function App() {
  const [urlInput, setUrlInput] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const fetchShortLink = () => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${urlInput}`)
      .then((response) => response.json())
      .then((value) => {
        setShortLink(value.result.full_short_link);
      });
  };

  const handleCopy = () => {
    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="App">
      <BackgroundAnimation />
      <div className="section">
        <h1 className="header">Misky's URL Shortener</h1>
        <div className="main">Simplify your links</div>
        <div className="linkk">
          <input
            className="input"
            placeholder="Your Original URL here "
            type="link"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
          />
          <button className="button" onClick={fetchShortLink}>
            SHORTEN URL
          </button>
        </div>
        <div className="result">
          <div className="box">{shortLink} </div>
          <CopyToClipboard text={shortLink} onCopy={handleCopy}>
            <button>{shortLink && isCopied ? "COPIED ✅" : "COPY"}</button>
          </CopyToClipboard>
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
    </div>
  );
}

export default App;
