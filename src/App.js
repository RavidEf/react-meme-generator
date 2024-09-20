import './App.css';
import './app.scss';
import FileSaver from 'file-saver';
import { useState } from 'react';

export default function App() {
  const [memeGen, setMemeGen] = useState('aag');
  const [userInputUpper, setUserInputUpper] = useState('');
  const [userInputLow, setUserInputLow] = useState('');
  const [finalUrl, setFinalUrl] = useState('');

  const waterMArk = '?api_key=myapikey42&watermark=Ravid-Efroni';
  const png = `.png`;
  const urlImages = 'https://api.memegen.link/images/';
  const defaultUrl = `${urlImages}${memeGen}${png}${waterMArk}`;

  const handleSubmit = (event) => {
    event.preventDefault();

    const upperText =
      userInputUpper.trim().length > 0
        ? encodeURIComponent(userInputUpper.trim().replace(/ /g, '_'))
        : '_'; //
    const lowerText =
      userInputLow.trim().length > 0
        ? encodeURIComponent(userInputLow.trim().replace(/ /g, '_'))
        : '_'; //
    const template = memeGen.trim().length > 0 ? memeGen.trim() : 'aag';

    // Generate the correct URL
    const generatedUrl = `${urlImages}${template}/${upperText}/${lowerText}${png}${waterMArk}`;

    setFinalUrl(generatedUrl);
    console.log('Generated URL: ', generatedUrl);
  };

  return (
    <div id="App">
      <div>
        <h1>Free Meme Generator</h1>
        <div className="form-container">
          <form id="form-container" onSubmit={handleSubmit}>
            <br />
            <label htmlFor="Top-text">Top text</label>
            <input
              value={userInputUpper}
              id="Top-text"
              onChange={(event) => {
                setUserInputUpper(event.currentTarget.value);
              }}
            />
            <label htmlFor="Bottom-text">Bottom text</label>
            <input
              value={userInputLow}
              id="Bottom-text"
              onChange={(event) => setUserInputLow(event.currentTarget.value)}
            />
            <br />
            <label htmlFor="meme-template">Meme template</label>
            <input
              id="meme-template"
              placeholder="type doge only*"
              onChange={(event) => setMemeGen(event.currentTarget.value)}
            />

            <button data-test-id="generate-meme">Generate</button>
          </form>

          {/* Display the generated image if finalUrl is set */}
          <div className="img-container">
            <div className="img">
              <img
                data-test-id="meme-image"
                src={finalUrl ? finalUrl : defaultUrl}
                alt="Generated meme"
              />
            </div>
            <button
              className="download-button"
              onClick={() => {
                FileSaver.saveAs(finalUrl, `${memeGen} meme.jpg`);
              }}
            >
              Download
            </button>

            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
