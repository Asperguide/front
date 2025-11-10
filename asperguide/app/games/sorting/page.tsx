'use client';
import { useState, useEffect } from 'react';

interface Phrase {
  text: string;
  type: 'appropriate' | 'inappropriate';
}

export default function SortingGamePage() {
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

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDrop = (targetType: 'appropriate' | 'inappropriate') => {
    if (draggedIndex === null) return;
    const phrase = phrases[draggedIndex];
    const correct = phrase.type === targetType;

    if (correct) {
      setScore((s) => s + 1);
      setFeedback('✅ Bonne réponse !');
    } else {
      setFeedback('❌ Mauvaise réponse.');
    }

    setTimeout(() => {
      const remaining = phrases.filter((_, i) => i !== draggedIndex);
      setPhrases(remaining);
      setFeedback('');
      setDraggedIndex(null);

      if (remaining.length === 0) {
        setEnded(true);
      }
    }, 800);
  };

  const restartGame = () => initGame();

  return (
    <main className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card p-4 shadow text-center"
        style={{ maxWidth: '600px', background: 'gainsboro' }}
      >
        <h2 className="text-teal fw-bold mb-3">
          Jeu de tri : Actions appropriées ou non
        </h2>

        <div className="fw-bold text-teal mb-3">
          Score : {score} / {allPhrases.length}
        </div>

        {!ended ? (
          <>
            <p className="text-muted">
              Fais glisser chaque phrase dans la colonne correspondante :
              <br />
              <em>Approprié ou Inapproprié</em>
            </p>

            <div
              className="d-flex justify-content-center gap-4 mb-4"
              style={{ flexWrap: 'wrap' }}
            >
              <div
                className="p-3 rounded-4 shadow-sm"
                style={{
                  width: '220px',
                  minHeight: '260px',
                  background: '#fff',
                }}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop('appropriate')}
              >
                <h5>✅ Approprié</h5>
              </div>

              <div
                className="p-3 rounded-4 shadow-sm"
                style={{
                  width: '220px',
                  minHeight: '260px',
                  background: '#fff',
                }}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop('inappropriate')}
              >
                <h5>❌ Inapproprié</h5>
              </div>
            </div>

            <div className="d-flex flex-column align-items-center">
              {phrases.map((p, i) => (
                <div
                  key={i}
                  className="phrase p-2 mb-2 rounded text-white fw-bold"
                  style={{
                    background: 'teal',
                    width: '80%',
                    cursor: 'grab',
                    userSelect: 'none',
                  }}
                  draggable
                  onDragStart={() => handleDragStart(i)}
                >
                  {p.text}
                </div>
              ))}
            </div>

            {feedback && <div className="mt-3 fw-bold">{feedback}</div>}

            <button
              className="btn btn-secondary mt-4 w-75"
              onClick={() => (window.location.href = '/games')}
            >
              ⬅ Retour
            </button>
          </>
        ) : (
          <>
            <h5 className="text-teal fw-bold">
              Score final : {score} / {allPhrases.length}
            </h5>
            <p>Bravo, tu as terminé le jeu de tri !</p>

            <button className="btn btn-primary w-75 mt-3" onClick={restartGame}>
              Rejouer
            </button>

            <button
              className="btn btn-secondary mt-3 w-75"
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
