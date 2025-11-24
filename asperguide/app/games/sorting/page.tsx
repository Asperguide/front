/* 
* +==== BEGIN AsperHeader =================+
* LOGO: 
* ..........####...####..........
* ......###.....#.#########......
* ....##........#.###########....
* ...#..........#.############...
* ...#..........#.#####.######...
* ..#.....##....#.###..#...####..
* .#.....#.##...#.##..##########.
* #.....##########....##...######
* #.....#...##..#.##..####.######
* .#...##....##.#.##..###..#####.
* ..#.##......#.#.####...######..
* ..#...........#.#############..
* ..#...........#.#############..
* ...##.........#.############...
* ......#.......#.#########......
* .......#......#.########.......
* .........#####...#####.........
* /STOP
* PROJECT: AsperHeader
* FILE: page.tsx
* CREATION DATE: 24-11-2025
* LAST Modified: 18:57:37 24-11-2025
* DESCRIPTION: 
* Sorting Game – nouvelle DA
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: Appropriate or inappropriate?
* // AR
* +==== END AsperHeader =================+
*/

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

    setFeedback(correct ? '✅ Bonne réponse !' : '❌ Mauvaise réponse.');
    if (correct) setScore((s) => s + 1);

    setTimeout(() => {
      const remaining = phrases.filter((_, i) => i !== draggedIndex);
      setPhrases(remaining);
      setDraggedIndex(null);
      if (remaining.length === 0) setEnded(true);
    }, 400);
  };

  return (
    <main className="container force-center">
      <div className="board">
        <h2 className="title">Approprié ou Non ?</h2>
        <p className="score">Score : {score} / {allPhrases.length}</p>
        {!ended && <p className="subtitle">Glisse chaque phrase dans la bonne colonne.</p>}

        <div className="columns">
          <div
            className="column"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop('appropriate')}
          >
            <div className="column-title good">Approprié ✔</div>
          </div>

          <div
            className="column"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop('inappropriate')}
          >
            <div className="column-title bad">Inapproprié ✖</div>
          </div>
        </div>

        <div className="phrases">
          {phrases.map((p, i) => (
            <div
              key={i}
              className="phrase"
              draggable
              onDragStart={() => handleDragStart(i)}
            >
              {p.text}
            </div>
          ))}
        </div>

        {feedback && <p className="feedback">{feedback}</p>}

        {ended && (
          <>
            <h3 className="end">🎉 Jeu terminé</h3>
            <p className="score">Score final : {score} / {allPhrases.length}</p>
            <button className="btn-primary" onClick={initGame}>Rejouer</button>
          </>
        )}

        <button className="btn-back" onClick={() => (window.location.href = '/games')}>
          ⬅ Retour
        </button>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: #eef2f6;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
          width: 100%;
        }

        .board {
          background: #ffffffdd;
          backdrop-filter: blur(8px);
          padding: 30px;
          width: 100%;
          max-width: 900px;
          border-radius: 20px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
          animation: fadeIn .3s ease;
          text-align: center;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .title {
          font-size: 32px;
          font-weight: 700;
          color: #3A63B7;
          margin-bottom: 10px;
        }

        .subtitle {
          color: #555;
          margin-bottom: 25px;
        }

        .columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }

        .column {
          border: 3px dashed #c7cce3;
          background: #f6f7fb;
          border-radius: 14px;
          padding: 20px;
          min-height: 220px;
        }

        .column-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .good { color: #2a7a2a; }
        .bad { color: #c20000; }

        .phrases {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .phrase {
          background: #3A63B7;
          color: white;
          padding: 14px 18px;
          font-size: 17px;
          border-radius: 12px;
          cursor: grab;
          width: 80%;
          transition: transform .15s, opacity .15s;
        }

        .phrase:hover {
          transform: scale(1.03);
          opacity: .9;
        }

        .feedback {
          margin-top: 20px;
          font-size: 18px;
          font-weight: 700;
        }

        .end {
          color: #3A63B7;
          font-size: 24px;
          margin-top: 10px;
        }

        .btn-primary, .btn-back {
          margin-top: 20px;
          padding: 12px 25px;
          border-radius: 10px;
          border: none;
          font-size: 16px;
          cursor: pointer;
          color: white;
        }

        .btn-primary {
          background: #3A63B7;
        }
        .btn-primary:hover {
          background: #2f4e8d;
        }

        .btn-back {
          background: #888;
          margin-top: 15px;
        }
        .btn-back:hover {
          background: #666;
        }
        .force-center {
          width: 100%;
          max-width: 100%;
          margin: 0 auto !important;
          padding: 0 !important;
          display: flex;
          justify-content: center;
        }

      `}</style>
    </main>
  );
}