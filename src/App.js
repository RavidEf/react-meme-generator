import './App.css';
import axios from 'axios';
import { useState } from 'react';
import logo from './logo.svg';

export default function App() {
  const [memeGen, setMemeGen] = useState('');
  // const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [userInputUpper, setUserInputUpper] = useState('');
  const [userInputLow, setUserInputLow] = useState('');

  const urlImages = 'https://api.memegen.link/images/';

  return (
    <div className="App">
      <div>{/*   */}</div>
      <div style={{ marginTop: '100px' }}>
        <h1>This is an H1 </h1>

        <form>
          <label htmlFor="Meme template">meme gen first </label>
          <input
            id="Meme template"
            placeholder="type doge"
            onChange={(event) => setMemeGen(event.currentTarget.value)}
          />
          <br />
          <br />
          <br />
          <label htmlFor="Top text">Upper Input</label>
          <input
            value={userInputUpper}
            id="Top text"
            onChange={(event) => setUserInputUpper(event.currentTarget.value)}
          />
          <br />

          <br />
          <label htmlFor="Bottom text">Lower Input</label>
          <input
            value={userInputLow}
            id="Bottom text"
            onChange={(event) => setUserInputLow(event.currentTarget.value)}
          />
          <br />
          <br />

          <button>Generate meme</button>
          <br />
          <br />
          {memeGen && memeGen.length ? (
            <img
              htmlFor="generated-image"
              style={{ height: '150px' }}
              src={`${urlImages}${memeGen}.jpg`}
              alt="meme-image"
            />
          ) : (
            <img
              htmlFor="preview-image"
              style={{ height: '150px' }}
              src="https://api.memegen.link/images/slap/example/preview.png?api_key=myapikey42&watermark=upleveled.com"
              alt="meme-image"
            />
          )}
        </form>
        <br />
        <br />
        <button>Download</button>
        {/* <div>
          Hello again
          {image.map((imageItem) => {
            return (
              <div key={`my data item is-${imageItem.id}`}>
                <img src={imageItem.blank} alt={imageItem.name} />
              </div>
            );
          })}
        </div> */}
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
