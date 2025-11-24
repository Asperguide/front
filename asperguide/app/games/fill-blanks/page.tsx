'use client';

import { useState } from 'react';

interface Question {
  sentence: string;
  answer: string;
}

export default function FillBlanksPage() {
  const questions: Question[] = [
    {
      sentence: "Quand quelqu’un te parle, tu dois ___.",
      answer: "écouter",
    },
    {
      sentence: "Quand tu veux traverser la rue, tu dois d’abord ___.",
      answer: "regarder",
    },
    {
      sentence: "Si tu veux jouer avec quelqu’un, tu dois lui ___.",
      answer: "demander",
    },
    {
      sentence: "Quand tu es en colère, il vaut mieux ___.",
      answer: "respirer",
    },
    {
      sentence: "Quand quelqu’un te prête un objet, tu dois dire ___.",
      answer: "merci",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [ended, setEnded] = useState(false);

  const currentQuestion = questions[current];

  function validate() {
    if (input.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setFeedback("✅ Correct !");
      setScore(score + 1);
    } else {
      setFeedback("❌ Mauvaise réponse !");
    }
  }

  function next() {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setInput('');
      setFeedback('');
    } else {
      setEnded(true);
    }
  }

  function restart() {
    setCurrent(0);
    setInput('');
    setScore(0);
    setFeedback('');
    setEnded(false);
  }

  return (
    <main className="quiz-container">
      <div className="quiz-board">
        <h1 className="quiz-title">Complète la phrase</h1>

        {!ended ? (
          <>
            <div className="score">Score : {score} / {questions.length}</div>
            <div className="question-count">Question : {current + 1} / {questions.length}</div>

            <p className="question-text">{currentQuestion.sentence.replace("___", "_____")}</p>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Votre réponse..."
              className="text-input"
            />

            {!feedback && (
              <button className="btn-next" onClick={validate}>
                Valider
              </button>
            )}

            {feedback && <p className="feedback">{feedback}</p>}

            {feedback && (
              <button className="btn-next" onClick={next}>
                Suivant
              </button>
            )}

            <button className="btn-back" onClick={() => (window.location.href = '/games')}>
              ⬅ Retour
            </button>
          </>
        ) : (
          <>
            <h3 className="quiz-end">Jeu terminé 🎉</h3>
            <p className="score">Votre score : {score} / {questions.length}</p>

            <button className="btn-restart" onClick={restart}>Rejouer</button>
            <button className="btn-back" onClick={() => (window.location.href = '/games')}>
              Retour au menu
            </button>
          </>
        )}
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

        .score, .question-count {
          font-size: 16px;
          margin-bottom: 8px;
          font-weight: 600;
          color: #3A63B7;
        }

        .question-text {
          font-size: 18px;
          margin: 20px 0;
          font-weight: 500;
        }

        .text-input {
          width: 80%;
          padding: 10px;
          border: 2px solid #3A63B7;
          border-radius: 8px;
          font-size: 16px;
          margin-bottom: 12px;
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

        .btn-next {
          background: #3A63B7;
          color: white;
        }

        .btn-next:hover {
          background: #34529a;
        }

        .btn-restart {
          background: #3A63B7;
          color: white;
        }

        .btn-back {
          background: #999;
          color: white;
        }

        .feedback {
          font-weight: 600;
          margin-top: 12px;
          font-size: 16px;
        }
      `}</style>
    </main>
  );
}
