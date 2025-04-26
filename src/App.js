import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [question, setQuestion] = useState([]);
  const [reponse, setReponse] = useState("");
  const [tempsDebut, setTempsDebut] = useState(Date.now());
  const [temps, setTemps] = useState(0);
  const [tempsTotal, setTempsTotal] = useState(0);
  const [iteration, setIteration] = useState(0);
  const [fini, setFini] = useState(false);

  useEffect(() => {
    if (fini) {
      return;
    }
    setTempsDebut(Date.now());
    setReponse("");
    setQuestion([
      Math.floor(2 + Math.random() * 9),
      Math.floor(2 + Math.random() * 9),
    ]);
    const interval = setInterval(() => {
      setTemps((Date.now() - tempsDebut) / 1000);
    }, 20);
    return () => {
      clearInterval(interval);
    };
  }, [tempsDebut, fini]);

  function verifie(e) {
    if (e.key === "Enter") {
      if (reponse === "" + question[0] * question[1] && !fini) {
        setReponse("");
        setTempsTotal((prev) => prev + temps);
        setIteration((prev) => {
          if (prev + 1 >= 10) {
            setFini(true);
            return prev;
          } else {
            setTempsDebut(Date.now());
            setQuestion([
              Math.floor(2 + Math.random() * 9),
              Math.floor(2 + Math.random() * 9),
            ]);
            return prev + 1;
          }
        });
      } else {
        setReponse("");
      }
    } else if (e.key === "Escape") {
      reset();
    }
  }

  function reset() {
    setReponse("");
    setTempsTotal(0);
    setIteration(0);
    setFini(false);
    setTempsDebut(Date.now());
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>itération : {iteration + 1}</p>
        <p>temps total : {tempsTotal.toFixed(2)}s</p>
        <p>temps moyen : {(tempsTotal / iteration).toFixed(2)}s</p>
        <p>temps : {temps.toFixed(2)}s</p>
        {!fini ? (
          <>
            <p>
              {question[0]}×{question[1]}
            </p>
            <p>
              <input
                className="grand-input"
                value={reponse}
                onChange={(e) => setReponse(e.target.value)}
                onKeyUp={verifie}
              />
            </p>
          </>
        ) : (
          <p>🎉 Bravo, tu as terminé !</p>
        )}
        <p>multiplication</p>
        <button onClick={reset}>Réinitialiser</button>
      </header>
    </div>
  );
}

export default App;
