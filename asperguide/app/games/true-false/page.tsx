'use client';

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TrueFalseGame() {
  const questions = [
    { text: "Il est acceptable de couper la parole à quelqu’un quand on est excité.", correct: false },
    { text: "Il est poli de dire merci après avoir reçu de l’aide.", correct: true },
    { text: "Crier sur un ami quand on est en colère est une bonne solution.", correct: false },
    { text: "C’est gentil de tenir la porte à quelqu’un.", correct: true },
    { text: "On peut ignorer quelqu’un qui nous parle si on n’a pas envie de répondre.", correct: false },
    { text: "S’excuser après une erreur est un comportement approprié.", correct: true },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState('');
  const [finished, setFinished] = useState(false);

  const checkAnswer = (answer: boolean) => {
    const correct = questions[current].correct;
    if (answer === correct) {
      setResult('✅ Bonne réponse !');
      setScore(score + 1);
    } else {
      setResult('❌ Mauvaise réponse.');
    }

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setResult('');
      } else {
        setFinished(true);
      }
    }, 1200);
  };

  const restartGame = () => {
    setCurrent(0);
    setScore(0);
    setResult('');
    setFinished(false);
  };

  return (
    <main className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', backgroundColor: 'gainsboro', borderRadius: '16px' }}>
        <h2 style={{ color: 'teal', fontWeight: 'bold' }}>Vrai ou Faux</h2>

        {!finished ? (
          <>
            <div id="score" className="fw-bold text-teal mt-2">
              Score : {score} / {questions.length}
            </div>
            <p className="mt-3">{questions[current].text}</p>

            <div>
              <button className="btn w-75 mt-2" style={{ backgroundColor: 'teal', color: 'white' }} onClick={() => checkAnswer(true)}>
                Vrai
              </button>
              <button className="btn w-75 mt-2" style={{ backgroundColor: 'teal', color: 'white' }} onClick={() => checkAnswer(false)}>
                Faux
              </button>
            </div>

            {result && (
              <p className="mt-3 fw-semibold" style={{ color: result.includes('✅') ? 'green' : 'red' }}>
                {result}
              </p>
            )}
          </>
        ) : (
          <>
            <p className="fw-bold mt-3 text-teal">
              Score final : {score} / {questions.length}
            </p>
            <p>Bravo, vous avez terminé le jeu ! 🎉</p>
            <button className="btn btn-primary w-75 mt-2" onClick={restartGame}>
              🔄 Rejouer
            </button>
          </>
        )}

        <button
          className="btn btn-secondary w-75 mt-3"
          onClick={() => (window.location.href = '/games')}
          style={{ backgroundColor: 'dimgray', border: 'none' }}
        >
          ⬅ Retour au menu
        </button>
      </div>
    </main>
  );
}
