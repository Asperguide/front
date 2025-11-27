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
* CREATION DATE: 27-11-2025
* LAST Modified: 15:38:50 27-11-2025
* DESCRIPTION: 
* soting game page
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: sorting game
* // AR
* +==== END AsperHeader =================+
*/ 

'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

interface Phrase {
  text: string;
  type: 'appropriate' | 'inappropriate';
}

interface PlacedPhrase extends Phrase {
  correct: boolean;
}

export default function SortingGame() {
  const router = useRouter();

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
  const [placedPhrases, setPlacedPhrases] = useState<{appropriate: PlacedPhrase[]; inappropriate: PlacedPhrase[]}>({appropriate: [], inappropriate: []});

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
    setPlacedPhrases({appropriate: [], inappropriate: []});
  };

  const handleDragStart = (index: number) => setDraggedIndex(index);

  const handleDrop = (targetType: 'appropriate' | 'inappropriate') => {
    if (draggedIndex === null) return;
    const phrase = phrases[draggedIndex];
    const correct = phrase.type === targetType;

    // Affichage instantané du feedback
    setFeedback(correct ? '✅ Bonne réponse !' : '❌ Mauvaise réponse.');

    if (correct) setScore((s) => s + 1);

    const placed: PlacedPhrase = { ...phrase, correct };

    setPlacedPhrases((prev) => ({
      ...prev,
      [correct ? targetType : phrase.type]: [...prev[correct ? targetType : phrase.type], placed]
    }));

    setPhrases((prev) => prev.filter((_, i) => i !== draggedIndex));
    setDraggedIndex(null);

    if (phrases.length === 1) setEnded(true);
  };

  const handleQuit = () => {
    router.push('/games');
  };

  return (
    <main className="flex flex-col items-center py-10 min-h-screen bg-gray-100" aria-label="Jeu Approprié ou Non">
      <h2 className="text-3xl font-bold mb-2" aria-label="Titre du jeu">Approprié ou Non</h2>
      <p className="text-center text-lg mb-2" aria-label={`Score actuel ${score} sur ${allPhrases.length}`}>Score : {score} / {allPhrases.length}</p>
      {!ended && <p className="text-center text-sm mb-6 text-gray-600" aria-label="Instruction du jeu">Fais glisser chaque phrase dans la bonne colonne.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-6xl mt-8">
        <div
          className="flex flex-col items-center bg-gray-100 border-2 border-gray-300 p-5 rounded-lg min-h-[300px] sm:min-h-[400px]"
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop('appropriate')}
          aria-label="Colonne Approprié"
        >
          <div className="text-xl font-semibold mb-3">✅ Approprié</div>
          {placedPhrases.appropriate.map((p, i) => (
          <div
          key={i}
          className={`w-[90%] text-white text-center text-lg py-3 rounded-lg mb-2 ${p.correct ? 'bg-green-500' : 'bg-red-400'}`}
          aria-label={`Phrase ${p.text} ${p.correct ? 'correctement placée' : 'mal placée'}`}
          >{p.text}</div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4" aria-label="Phrases à trier">
          {phrases.map((p, i) => (
            <div
              key={i}
              draggable
              onDragStart={() => handleDragStart(i)}
              className="w-[90%] text-white text-center text-lg py-3 rounded-lg bg-primary cursor-grab mb-2"
              aria-label={`Phrase à déplacer: ${p.text}`}
            >{p.text}</div>
          ))}
        </div>

        <div
          className="flex flex-col items-center bg-gray-100 border-2 border-gray-300 p-5 rounded-lg min-h-[300px] sm:min-h-[400px]"
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop('inappropriate')}
          aria-label="Colonne Inapproprié"
        >
          <div className="text-xl font-semibold mb-3 text-red-700">❌ Inapproprié</div>
          {placedPhrases.inappropriate.map((p, i) => (
            <div
              key={i}
              className={`w-[90%] text-white text-center text-lg py-3 rounded-lg mb-2 ${p.correct ? 'bg-green-500' : 'bg-red-400'}`}
              aria-label={`Phrase ${p.text} ${p.correct ? 'correctement placée' : 'mal placée'}`}
            >{p.text}</div>
          ))}
        </div>
      </div>

      {feedback && <div className="text-center font-semibold mt-5 text-lg" aria-live="polite">{feedback}</div>}

      {ended && (
        <div className="flex flex-col sm:flex-row gap-4 mt-5" aria-label="Boutons de fin de jeu">
          <button onClick={initGame} className="px-6 py-2 bg-blue-600 text-white rounded-lg" aria-label="Rejouer le jeu">Rejouer</button>
          <button onClick={handleQuit} className="px-6 py-2 bg-red-600 text-white rounded-lg" aria-label="Quitter le jeu">Quitter le jeu</button>
        </div>
      )}
    </main>
  );
}