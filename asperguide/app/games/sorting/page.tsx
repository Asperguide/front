'use client';

import React, { useState, useEffect } from "react";

interface Phrase {
  text: string;
  type: 'appropriate' | 'inappropriate';
}

export default function SortingGame() {
  const allPhrases: Phrase[] = [
    { text: 'Dire merci après avoir reçu de l’aide', type: 'appropriate' },
    { text: 'Couper la parole à quelqu’un', type: 'inappropriate' },
    { text: 'Attendre son tour pour parler', type: 'appropriate' },
    { text: 'Crier quand on est en colère', type: 'inappropriate' },
    { text: 'Demander poliment de l’aide', type: 'appropriate' },
    { text: 'Ignorer quelqu’un qui parle', type: 'inappropriate' },
    { text: 'S’excuser après une erreur', type: 'appropriate' },
    { text: 'Se moquer d’un camarade', type: 'inappropriate' },
  ];

  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [ended, setEnded] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    initGame();
  }, []);

  const shuffle = (arr: Phrase[]) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const initGame = () => {
    setScore(0);
    setEnded(false);
    setFeedback('');
    setPhrases(shuffle(allPhrases));
  };

  const handleDragStart = (index: number) => setDraggedIndex(index);

  const handleDrop = (targetType: 'appropriate' | 'inappropriate') => {
    if (draggedIndex === null) return;
    const phrase = phrases[draggedIndex];
    const correct = phrase.type === targetType;

    // Affichage instantané du feedback
    setFeedback(correct ? '✅ Bonne réponse !' : '❌ Mauvaise réponse.');

    if (correct) setScore((s) => s + 1);

    // Retirer la phrase après 400ms, feedback reste visible
    setTimeout(() => {
      const remaining = phrases.filter((_, i) => i !== draggedIndex);
      setPhrases(remaining);
      setDraggedIndex(null);

      // Si plus de phrases, fin du jeu
      if (remaining.length === 0) setEnded(true);
    }, 400);
  };

  return (
    <main className="sorting-container">
      <div className="sorting-board">
        <h2 className="title">Approprié ou Non</h2>
        <p className="score">Score : {score} / {allPhrases.length}</p>
        {!ended && <p className="subtitle">Fais glisser chaque phrase dans la bonne colonne.</p>}

        <div className="columns-wrapper">
          <div
            className="column"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop('appropriate')}
          >
            <div className="column-title">✅ Approprié</div>
          </div>

          <div
            className="column"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop('inappropriate')}
          >
            <div className="column-title inappropriate">❌ Inapproprié</div>
          </div>
        </div>

        <div className="items-list">
          {phrases.map((p, i) => (
            <div
              key={i}
              className="draggable-item"
              draggable
              onDragStart={() => handleDragStart(i)}
            >
              {p.text}
            </div>
          ))}
        </div>

        {feedback && <div className="feedback">{feedback}</div>}

        {ended && (
          <>
            <h5 className="score">Score final : {score} / {allPhrases.length}</h5>
            <button className="btn-primary" onClick={initGame}>Rejouer</button>
          </>
        )}
      </div>

      <style jsx>{`
        .sorting-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 40px 0;
          min-height: 100vh;
          background: #f0f2f5;
        }

        .sorting-board {
          width: 900px;
          background: #ffffff;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
        }

        .title {
          text-align: center;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .score {
          text-align: center;
          font-size: 18px;
          margin-bottom: 10px;
        }

        .subtitle {
          text-align: center;
          font-size: 15px;
          margin-bottom: 25px;
          color: #555;
        }

        .columns-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }

        .column {
          background: #f9f9f9;
          border: 2px solid #d1d1d1;
          padding: 20px;
          border-radius: 12px;
          min-height: 250px;
        }

        .column-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .inappropriate {
          color: #c20000;
        }

        .items-list {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .draggable-item {
          background: var(--primary);
          color: white;
          padding: 14px;
          border-radius: 10px;
          width: 80%;
          text-align: center;
          font-size: 17px;
          cursor: grab;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }

        .draggable-item:hover {
          transform: scale(1.02);
          opacity: 0.9;
        }

        .feedback {
          text-align: center;
          font-weight: 600;
          margin-top: 15px;
          font-size: 16px;
        }

        .btn-primary {
          display: block;
          margin: 20px auto 0 auto;
          padding: 10px 25px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          background: var(--primary);
          color: white;
          cursor: pointer;
        }

        .btn-primary:hover {
          background: #34529a;
        }
      `}</style>
    </main>
  );
}
