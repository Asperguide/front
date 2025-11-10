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
    <main className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow text-center" style={{ maxWidth: '450px', background: 'gainsboro' }}>
        <h2 className="text-teal fw-bold mb-3">Modulation émotionnelle</h2>

        {!ended ? (
          <>
            <p className="text-muted">
              Pour chaque situation, ajuste le curseur pour indiquer à quel point l’émotion devrait être ressentie.<br />
              <em>Essaye d’imaginer la réaction la plus adaptée.</em>
            </p>

            <div className="fw-bold text-teal mb-2">Score : {score} / {situations.length}</div>

            <div className="mb-3">{currentSituation.text}</div>
            <div className="slider-label fw-bold text-teal mb-2">
              Émotion : {currentSituation.emotion}
            </div>

            <input
              type="range"
              min="0"
              max="10"
              value={sliderValue}
              onChange={(e) => setSliderValue(parseInt(e.target.value))}
              className="form-range"
            />

            <div className="d-flex justify-content-between text-muted small">
              <span>Pas du tout</span>
              <span>Très fort</span>
            </div>

            <button className="btn btn-primary mt-3 w-75" onClick={validate}>
              Valider
            </button>

            {feedback && <div className="mt-3">{feedback}</div>}

            <div className="mt-3 text-secondary small">{currentSituation.help}</div>

            <button
              className="btn btn-secondary mt-4 w-75"
              onClick={() => (window.location.href = '/games')}
            >
              ⬅ Retour
            </button>
          </>
        ) : (
          <>
            <h5>Score final : {score} / {situations.length}</h5>
            <p>Bravo, tu as terminé le jeu de modulation émotionnelle !</p>
            <button className="btn btn-primary w-75" onClick={restart}>
              Rejouer
            </button>
            <button
              className="btn btn-secondary mt-2 w-75"
              onClick={() => (window.location.href = '/games')}
            >
              Retour au menu
            </button>
          </>
        )}
      </div>
    </main>
  );
}
