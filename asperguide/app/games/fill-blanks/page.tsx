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
* LAST Modified: 18:33:51 24-11-2025
* DESCRIPTION: 
* Fill blanks
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: Find the right word
* // AR
* +==== END AsperHeader =================+
*/ 
'use client';

import { useState } from 'react';

interface Question {
  sentence: string;
  answer: string;
}

interface Level {
  name: string;
  questions: Question[];
}

export default function FillBlanksPage() {
  const levels: Level[] = [
    {
      name: "Niveau 1 : Facile",
      questions: [
        { sentence: "Quand quelqu’un te parle, tu dois ___.", answer: "écouter" },
        { sentence: "Quand tu veux traverser la rue, tu dois ___.", answer: "regarder" },
        { sentence: "Si tu veux jouer avec quelqu’un, tu dois lui ___.", answer: "demander" },
        { sentence: "Quand tu es fatigué, il faut ___.", answer: "dormir" },
        { sentence: "Quand quelqu’un te prête quelque chose, tu dois dire ___.", answer: "merci" },
      ],
    },
    {
      name: "Niveau 2 : Intermédiaire",
      questions: [
        { sentence: "Pour entrer dans une pièce, il faut d'abord ___.", answer: "frapper" },
        { sentence: "Quand quelqu’un te blesse sans le vouloir, tu peux lui dire ___.", answer: "ce n’est pas grave" },
        { sentence: "Si un ami est triste, tu peux essayer de l’___.", answer: "aider" },
        { sentence: "Quand tu veux poser une question en classe, tu dois ___.", answer: "lever la main" },
        { sentence: "Pour apprendre quelque chose, il faut ___.", answer: "pratiquer" },
      ],
    },
    {
      name: "Niveau 3 : Difficile",
      questions: [
        { sentence: "Quand tu fais une erreur, il est important de ___.", answer: "s'excuser" },
        { sentence: "Lorsque deux personnes parlent ensemble, il ne faut pas ___.", answer: "interrompre" },
        { sentence: "Pour éviter un conflit, il peut être utile de ___.", answer: "discuter" },
        { sentence: "Quand quelqu’un te critique, tu peux ___.", answer: "rester calme" },
        { sentence: "Quand tu promets quelque chose, tu dois ___.", answer: "tenir ta promesse" },
      ],
    },
  ];

  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [unlockedLevels, setUnlockedLevels] = useState([true, false, false]);

  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [ended, setEnded] = useState(false);

  const level = selectedLevel !== null ? levels[selectedLevel] : null;
  const questions = level?.questions ?? [];
  const currentQuestion = questions[current];

  function validate() {
    if (!currentQuestion) return;

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
      // Déblocage du niveau suivant
      if (selectedLevel !== null && selectedLevel < 2) {
        const newUnlocked = [...unlockedLevels];
        newUnlocked[selectedLevel + 1] = true;
        setUnlockedLevels(newUnlocked);
      }
      setEnded(true);
    }
  }

  function restart() {
    setCurrent(0);
    setScore(0);
    setInput('');
    setFeedback('');
    setEnded(false);
  }

  return (
    <main className="quiz-container">

      {/* Sélection des niveaux */}
      {selectedLevel === null && (
        <div className="level-select">
          <h1 className="quiz-title">Complète la phrase 🖊️</h1>
          <p className="subtitle">Choisis ton niveau pour commencer</p>

          <div className="level-grid">
            {levels.map((lvl, i) => (
              <button
                key={i}
                disabled={!unlockedLevels[i]}
                className={`level-btn ${unlockedLevels[i] ? "" : "locked"}`}
                onClick={() => unlockedLevels[i] && setSelectedLevel(i)}
              >
                {lvl.name}
              </button>
            ))}
          </div>

          <button className="btn-back" onClick={() => (window.location.href = '/games')}>
            ⬅ Retour
          </button>
        </div>
      )}

      {/* Jeu */}
      {selectedLevel !== null && (
        <div className="quiz-board">

          <h1 className="quiz-title">{level?.name}</h1>

          {!ended ? (
            <>
              <div className="progress-bar-container">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                />
              </div>

              <div className="score">Score : {score} / {questions.length}</div>
              <div className="question-count">Question : {current + 1} / {questions.length}</div>

              <p className="question-text">
                {currentQuestion.sentence.replace("___", "_____")}
              </p>

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="text-input"
                placeholder="Votre réponse..."
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

              <button className="btn-back" onClick={() => setSelectedLevel(null)}>
                ⬅ Retour niveaux
              </button>
            </>
          ) : (
            <>
              <h3 className="quiz-end">Niveau terminé 🎉</h3>
              <p className="score">Votre score : {score} / {questions.length}</p>

              <button className="btn-restart" onClick={restart}>Rejouer</button>
              <button className="btn-back" onClick={() => setSelectedLevel(null)}>Retour aux niveaux</button>
            </>
          )}
        </div>
      )}

      <style jsx>{`
        .quiz-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          min-height: 100vh;
          background: #eef2f6;
        }

        .level-select {
          background: white;
          padding: 25px;
          border-radius: 18px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          text-align: center;
          max-width: 400px;
          width: 100%;
        }

        .level-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20px;
        }

        .level-btn {
          background: #3A63B7;
          color: white;
          padding: 12px;
          border-radius: 10px;
          border: none;
          font-size: 18px;
          cursor: pointer;
          transition: 0.2s;
        }

        .level-btn.locked {
          background: #9aa8c9;
          cursor: not-allowed;
          opacity: 0.6;
        }

        .quiz-board {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.12);
          max-width: 500px;
          width: 100%;
          text-align: center;
        }

        .progress-bar-container {
          width: 100%;
          height: 10px;
          background: #d8dff2;
          border-radius: 8px;
          overflow: hidden;
          margin: 15px 0 20px;
        }

        .progress-bar-fill {
          height: 100%;
          background: #3A63B7;
          transition: width 0.3s ease;
        }

        .text-input {
          width: 80%;
          padding: 12px;
          border: 2px solid #3A63B7;
          border-radius: 10px;
          font-size: 16px;
        }

        .btn-next, .btn-restart, .btn-back {
          margin-top: 15px;
          padding: 12px 25px;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          cursor: pointer;
        }

        .btn-next, .btn-restart {
          background: #3A63B7;
          color: white;
        }

        .btn-back {
          background: #888;
          color: white;
        }

      `}</style>
    </main>
  );
}