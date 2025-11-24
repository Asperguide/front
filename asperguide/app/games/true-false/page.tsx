'use client';

import { useState } from 'react';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
=======
>>>>>>> dev

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
<<<<<<< HEAD

  const checkAnswer = (answer: boolean) => {
=======
  const [answered, setAnswered] = useState(false);

  const checkAnswer = (answer: boolean) => {
    if (answered) return;
    setAnswered(true);

>>>>>>> dev
    const correct = questions[current].correct;
    if (answer === correct) {
      setResult('✅ Bonne réponse !');
      setScore(score + 1);
    } else {
      setResult('❌ Mauvaise réponse.');
    }
<<<<<<< HEAD

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setResult('');
      } else {
        setFinished(true);
      }
    }, 1200);
=======
  };

  const next = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setResult('');
      setAnswered(false);
    } else {
      setFinished(true);
    }
>>>>>>> dev
  };

  const restartGame = () => {
    setCurrent(0);
    setScore(0);
    setResult('');
    setFinished(false);
<<<<<<< HEAD
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
=======
    setAnswered(false);
  };

  return (
    <main className="quiz-container">
      <div className="quiz-board">
        <h2 className="quiz-title">Vrai ou Faux</h2>

        {!finished ? (
          <>
            <div className="score">Score : {score} / {questions.length}</div>
            <p className="question-text">{questions[current].text}</p>

            <div className="answers-list">
              <button
                className="answer-btn"
                onClick={() => checkAnswer(true)}
                disabled={answered}
              >
                Vrai
              </button>
              <button
                className="answer-btn"
                onClick={() => checkAnswer(false)}
                disabled={answered}
              >
>>>>>>> dev
                Faux
              </button>
            </div>

<<<<<<< HEAD
            {result && (
              <p className="mt-3 fw-semibold" style={{ color: result.includes('✅') ? 'green' : 'red' }}>
                {result}
              </p>
=======
            {result && <p className={`feedback ${result.includes('✅') ? 'correct' : 'wrong'}`}>{result}</p>}

            {answered && (
              <button className="btn-next" onClick={next}>
                Suivant
              </button>
>>>>>>> dev
            )}
          </>
        ) : (
          <>
<<<<<<< HEAD
            <p className="fw-bold mt-3 text-teal">
              Score final : {score} / {questions.length}
            </p>
            <p>Bravo, vous avez terminé le jeu ! 🎉</p>
            <button className="btn btn-primary w-75 mt-2" onClick={restartGame}>
=======
            <h3 className="quiz-end">Quiz terminé 🎉</h3>
            <p className="score">Score final : {score} / {questions.length}</p>
            <button className="btn-restart" onClick={restartGame}>
>>>>>>> dev
              🔄 Rejouer
            </button>
          </>
        )}

<<<<<<< HEAD
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
=======
        <button className="btn-back" onClick={() => (window.location.href = '/games')}>
          ⬅ Retour au menu
        </button>
      </div>

      <style jsx>{`
        .quiz-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 50px 20px;
          min-height: 100vh;
          background: #f0f2f5;
        }

        .quiz-board {
          background: #ffffff;
          max-width: 500px;
          width: 100%;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          text-align: center;
        }

        .quiz-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #3A63B7;
        }

        .score {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #3A63B7;
        }

        .question-text {
          font-size: 18px;
          margin: 20px 0;
          font-weight: 500;
        }

        .answers-list {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .answer-btn {
          width: 80%;
          padding: 12px;
          border-radius: 8px;
          border: none;
          background: #3A63B7;
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .answer-btn:hover {
          opacity: 0.9;
        }

        .answer-btn:disabled {
          cursor: default;
          opacity: 0.7;
        }

        .feedback {
          font-weight: 600;
          margin-top: 12px;
          font-size: 16px;
        }

        .feedback.correct {
          color: green;
        }

        .feedback.wrong {
          color: red;
        }

        .btn-next, .btn-restart, .btn-back {
          display: block;
          margin: 15px auto 0 auto;
          padding: 10px 25px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .btn-next, .btn-restart {
          background: var(--primary);
          color: white;
        }

        .btn-next:hover, .btn-restart:hover {
          background: #34529a;
        }

        .btn-back {
          background: #999;
          color: white;
          margin-top: 10px;
        }

        .btn-back:hover {
          background: #777;
        }

        .quiz-end {
          color: #3A63B7;
          font-weight: 700;
          margin-bottom: 10px;
        }
      `}</style>
    </main>
  );
}
>>>>>>> dev
