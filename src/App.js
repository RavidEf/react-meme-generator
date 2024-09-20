import './App.css';
import './app.scss';
import { useState } from 'react';

export default function App() {
  // import styles from './index.css';
  const [memeGen, setMemeGen] = useState('slap');
  const [userInputUpper, setUserInputUpper] = useState('');
  const [userInputLow, setUserInputLow] = useState('');
  const [finalUrl, setFinalUrl] = useState(
    'https://api.memegen.link/images/slap/_/_.png',
  );

  const png = `.png`;
  const urlImages = 'https://api.memegen.link/images/';
  const defaultUrl = `${urlImages}slap/_/_.png`;

  const handleSubmit = (event) => {
    event.preventDefault();

    // Ensure both inputs and template are being trimmed and encoded properly
    const upperText =
      userInputUpper.trim().length > 0
        ? encodeURIComponent(userInputUpper.trim().replace(/ /g, '-'))
        : '_';
    const lowerText =
      userInputLow.trim().length > 0
        ? encodeURIComponent(userInputLow.trim().replace(/ /g, '-'))
        : '_';
    const template = memeGen.trim().length > 0 ? memeGen.trim() : 'slap';

    // Generate the correct URL
    const generatedUrl = `${urlImages}${template}/${upperText}/${lowerText}${png}`;

    setFinalUrl(generatedUrl);
  };

  return (
    <div id="App">
      <div style={{ marginTop: '100px' }}>
        <h1>Free Meme Generator</h1>

        <form onSubmit={handleSubmit}>
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
            placeholder="type something"
            onChange={(event) => setMemeGen(event.currentTarget.value)}
          />
          <button type="submit">Generate</button>
        </form>

        {/* Display the generated image if finalUrl is set */}
        <div className="img">
          <img
            data-test-id="meme-image"
            style={{ height: '250px', marginTop: '20px' }}
            src={finalUrl ? finalUrl : defaultUrl}
            alt="Generated meme"
          />
        </div>
        <button>Download</button>

        <br />
      </div>
    </div>
  );
}

{
  /*  */
  /* <div>
            <img
              data-test-id="meme-image"
              style={{ height: '250px', marginTop: '20px' }}
              src={`${urlImages}slap/${userInputUpper.length > 0 ? userInputUpper : '_'}/${userInputLow.length > 0 ? userInputLow : '_'}.png`}
              alt="Generated meme"
            />
          </div> */
}
