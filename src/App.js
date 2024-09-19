import './App.css';
import axios from 'axios';
import { useState } from 'react';
import styles from './app.scss';
// import styles from './index.css';
import logo from './logo.svg';

export default function App() {
  const [memeGen, setMemeGen] = useState('');
  const [userInputUpper, setUserInputUpper] = useState('');
  const [userInputLow, setUserInputLow] = useState('');
  const [finalUrl, setFinalUrl] = useState('');

  const urlImages = 'https://api.memegen.link/images/';

  return (
    <div id="App">
      <div style={{ marginTop: '100px' }}>
        <h1>This is an H1 </h1>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            setFinalUrl(
              `${urlImages}${memeGen}/${userInputUpper.length > 0 ? userInputUpper : '_'}/${userInputLow.length > 0 ? userInputLow : '_'}.jpg`,
            );
            console.log(finalUrl);
          }}
        >
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

          <button>Generate meme</button>

          {memeGen && memeGen.length ? (
            <div>
              <img
                htmlFor="generated-image"
                style={{ height: '250px' }}
                src={`${urlImages}${memeGen}/${userInputUpper.length > 0 ? userInputUpper : '_'}/${userInputLow.length > 0 ? userInputLow : '_'}.jpg`}
                alt="meme-image"
              />
              <br />
              <a href={finalUrl} download="meme-image">
                Download
              </a>
            </div>
          ) : (
            <img
              data-test-id="meme-image"
              style={{ height: '150px' }}
              src="https://api.memegen.link/images/slap/example/preview.png?api_key=myapikey42&watermark=upleveled.com"
              alt="meme-image"
            />
          )}
        </form>

        <br />
      </div>
    </div>
  );
}

{
  /* // fetch the data link and put it in the data array
/* const fetchTemplates = () => {
    axios
      .get('https://api.memegen.link/templates/')
      .then((response) => {
        // Step 3: Store the fetched data in state
        setImage(response.data.slice(0, 10));
      })
      .catch((error) => {
        console.error('Error fetching templates:', error);
      });
  }; */
  //fetchTemplates();
}
