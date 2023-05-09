import './App.css';
import { useState } from 'react';
import logo from './logo.svg';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeText, setMemeText] = useState('');
  return (
    <>
      <form>
        <label>
          Top Text:
          <input
            value={topText}
            onChange={(event) => {
              setTopText(event.currentTarget.value);
            }}
          />
        </label>
        <br />
        <label>
          Bottom Text:
          <input
            value={bottomText}
            onChange={(event) => {
              setBottomText(event.currentTarget.value);
            }}
          />
        </label>

        <br />
        <label>
          Meme Text:
          <input
            value={memeText}
            onChange={(event) => {
              setMemeText(event.currentTarget.value);
            }}
          />
        </label>

        <br />
        <br />
      </form>

      <button> Download</button>

      <img
        src={`https://api.memegen.link/images/${memeText}/${topText}/${bottomText}.png`}
        alt="Girl in a jacket"
      />
    </>
  );
}
