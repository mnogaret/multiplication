import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [question, setQuestion] = useState([7,9]);
  const [reponse, setReponse] = useState("");
  function verifie(e) {
    if (e.key === 'Enter' && reponse === "" + (question[0]*question[1]) ) {
      setReponse("");
      setQuestion([Math.floor(2+Math.random()*9),Math.floor(2+Math.random()*9)]);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {question[0]}×{question[1]}=<input value={reponse} onChange={e => setReponse(e.target.value)} onKeyUp={verifie}/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
