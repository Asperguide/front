'use client';
import { useState, useEffect } from 'react';

export default function EmotionSliderPage() {
  const situations = [
    {
      text: "Tu as perdu ton jouet préféré.",
      emotion: "Tristesse",
      expected: 7,
      help: "Il est normal de ressentir de la tristesse, mais pas forcément au maximum.",
    },
    {
      text: "Un ami te fait une surprise pour ton anniversaire.",
      emotion: "Joie",
      expected: 8,
      help: "La joie peut être forte dans ce cas, mais chacun réagit différemment.",
    },
    {
      text: "Quelqu’un te bouscule sans faire exprès dans la cour.",
      emotion: "Colère",
      expected: 3,
      help: "Un peu de colère est normale, mais il n’est pas nécessaire de réagir fortement.",
    },
    {
      text: "Tu entends un bruit étrange la nuit.",
      emotion: "Peur",
      expected: 6,
      help: "La peur peut être présente, mais il est utile de relativiser.",
    },
    {
      text: "Tu goûtes un aliment que tu n’aimes pas.",
      emotion: "Dégoût",
      expected: 5,
      help: "Le dégoût peut être modéré, il n’est pas obligatoire de réagir très fort.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [sliderValue, setSliderValue] = useState(5);
  const [feedback, setFeedback] = useState('');
  const [ended, setEnded] = useState(false);

  const currentSituation = situations[current];

  useEffect(() => {
    setFeedback('');
  }, [current]);  

  const validate = () => {
    const expected = currentSituation.expected;
    const diff = Math.abs(sliderValue - expected);
    let message = '';
    let points = 0;

    if (diff === 0) {
      message = "✅ Parfait ! Tu as bien modulé l’intensité.";
      points = 1;
    } else if (diff <= 2) {
      message = "🟢 Presque parfait ! C’est une bonne modulation.";
      points = 0.5;
    } else {
      message = "🟡 Essaie de réfléchir à l’intensité la plus adaptée à la situation.";
    }

    setFeedback(message);
    setScore(score + points);

    setTimeout(() => {
      if (current < situations.length - 1) {
        setCurrent(current + 1);
        setSliderValue(5);
      } else {
        setEnded(true);
      }
    }, 1200);
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setSliderValue(5);
    setEnded(false);
    setFeedback('');
  };

  return (
    <main className="slider-container">
      <div className="slider-board">
        <h2 className="slider-title">Modulation émotionnelle</h2>

        {!ended ? (
          <>
            <p className="instructions">
              Ajuste le curseur pour indiquer l’intensité de l’émotion.<br />
              <em>Essaie d’imaginer la réaction la plus adaptée.</em>
            </p>

            <div className="score">Score : {score} / {situations.length}</div>

            <div className="situation-text">{currentSituation.text}</div>
            <div className="slider-label">Émotion : <strong>{currentSituation.emotion}</strong></div>

            <input
              type="range"
              min="0"
              max="10"
              value={sliderValue}
              onChange={(e) => setSliderValue(parseInt(e.target.value))}
              className="slider-input"
            />

            <div className="slider-scale">
              <span>Pas du tout</span>
              <span>Très fort</span>
            </div>

            <button className="btn-validate" onClick={validate}>Valider</button>

            {feedback && <div className="feedback">{feedback}</div>}

            <div className="help-text">{currentSituation.help}</div>

            <button className="btn-back" onClick={() => (window.location.href = '/games')}>
              ⬅ Retour
            </button>
          </>
        ) : (
          <>
            <h3 className="quiz-end">Bravo ! 🎉</h3>
            <p className="score">Score final : {score} / {situations.length}</p>
            <button className="btn-validate" onClick={restart}>Rejouer</button>
            <button className="btn-back" onClick={() => (window.location.href = '/games')}>Retour au menu</button>
          </>
        )}
      </div>

      <style jsx>{`
        .slider-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 50px 20px;
          min-height: 100vh;
          background: #f0f2f5;
        }

        .slider-board {
          background: #ffffff;
          max-width: 500px;
          width: 100%;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          text-align: center;
        }

        .slider-title {
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #3A63B7;
        }

        .instructions {
          font-size: 14px;
          color: #555;
          margin-bottom: 15px;
        }

        .score {
          font-weight: 600;
          margin-bottom: 15px;
          color: #3A63B7;
        }

        .situation-text {
          font-size: 18px;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .slider-label {
          margin-bottom: 8px;
          font-weight: 600;
          color: #3A63B7;
        }

        .slider-input {
          width: 80%;
          margin: 0 auto 5px auto;
        }

        .slider-scale {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #666;
          margin-bottom: 15px;
          width: 80%;
          margin-left: auto;
          margin-right: auto;
        }

        .btn-validate {
          display: block;
          margin: 15px auto 0 auto;
          padding: 10px 25px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          background: #3A63B7;
          color: white;
          cursor: pointer;
        }

        .btn-validate:hover {
          background: #5B85CF;
        }

        .feedback {
          font-weight: 600;
          margin-top: 12px;
          font-size: 16px;
        }

        .help-text {
          font-size: 12px;
          color: #666;
          margin-top: 10px;
        }

        .btn-back {
          display: block;
          margin: 15px auto 0 auto;
          padding: 10px 25px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          background: #999;
          color: white;
          cursor: pointer;
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
