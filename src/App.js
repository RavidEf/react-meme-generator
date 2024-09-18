import './App.css';
import axios from 'axios';
import { useState } from 'react';
import logo from './logo.svg';

export default function App() {
  const [data, setData] = useState([]);
  // const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [userInputUpper, setUserInputUpper] = useState('');
  const [userInputLow, setUserInputLow] = useState('');

  const fetchTemplates = () => {
    axios
      .get('https://api.memegen.link/templates/')
      .then((response) => {
        // Step 3: Store the fetched data in state
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching templates:', error);
      });
  };

  fetchTemplates();

  return (
    <div className="App">
      <div>
        Hello again
        {data.map((dataItem) => {
          return (
            <div key={`my data item is-${dataItem.id}`}>
              <img src={dataItem.blank} alt={dataItem.name} />
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: '100px' }}>
        <h1>Hello world </h1>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            setUserInputUpper(userInputUpper);
            setUserInputLow(userInputLow);
          }}
        >
          <label htmlFor="upperField">New Input</label>
          <input
            value={userInputUpper}
            id="upperField"
            onChange={(event) => setUserInputUpper(event.currentTarget.value)}
          />
          <br />

          <br />
          <label htmlFor="lowerField">New Input</label>
          <input
            value={userInputLow}
            id="lowerField"
            onChange={(event) => setUserInputLow(event.currentTarget.value)}
          />
          <br />
          <br />

          <button>Submit</button>
        </form>

        <div></div>
      </div>
    </div>
  );
}
