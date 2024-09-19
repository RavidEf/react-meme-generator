import './App.css';
import './app.scss';
import { useState } from 'react';

export default function App() {
  // import styles from './index.css';
  const [memeGen, setMemeGen] = useState('');
  const [userInputUpper, setUserInputUpper] = useState('');
  const [userInputLow, setUserInputLow] = useState('');
  const [finalUrl, setFinalUrl] = useState('');

  const urlImages = 'https://api.memegen.link/images/';

  const handleSubmit = (event) => {
    event.preventDefault();

    const generatedUrl = `${urlImages}${memeGen}/${userInputUpper.length > 0 ? userInputUpper : '_'}/${userInputLow.length > 0 ? userInputLow : '_'}.png`;

    setFinalUrl(generatedUrl);
  };

  return (
    <div id="App">
      <div style={{ marginTop: '100px' }}>
        <h1>Free Meme Generator</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="meme-template">Meme template</label>
          <input
            id="meme-template"
            placeholder="type doge"
            onChange={(event) => setMemeGen(event.currentTarget.value)}
          />

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

          {/*   {memeGen && memeGen.length ? (
            <div>
              <img
                data-test-id="meme-image"
                style={{ height: '250px' }}
                src={`${urlImages}${memeGen}/${userInputUpper.length > 0 ? userInputUpper : '_'}/${userInputLow.length > 0 ? userInputLow : '_'}.png`}
                alt="meme-image-doge"
              />
              <br />
            </div>
          ) : (
            <img
              data-test-id="meme-image"
              style={{ height: '350px' }}
              src={`${urlImages}slap/${userInputUpper.length > 0 ? userInputUpper : '_'}/${userInputLow.length > 0 ? userInputLow : '_'}.png`}
              alt="meme-image-preview"
            />
          )} */}
          <button type="submit">Generate</button>
        </form>

        {/* Display the generated image if finalUrl is set */}
        {finalUrl ? (
          <div>
            <img
              data-test-id="meme-image"
              style={{ height: '250px', marginTop: '20px' }}
              src={finalUrl}
              alt="Generated meme"
            />
          </div>
        ) : (
          <div>
            <img
              data-test-id="meme-image"
              style={{ height: '250px', marginTop: '20px' }}
              src={`${urlImages}slap/${userInputUpper.length > 0 ? userInputUpper : '_'}/${userInputLow.length > 0 ? userInputLow : '_'}.png`}
              alt="Generated meme"
            />
          </div>
        )}
        <button>Download</button>

        <br />
      </div>
    </div>
  );
}
