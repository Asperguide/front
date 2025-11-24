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
* LAST Modified: 18:32:48 24-11-2025
* DESCRIPTION: 
* Social situations
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: Find the right word to use
* // AR
* +==== END AsperHeader =================+
*/ 
'use client';

import { useState } from 'react';

type Choice = {
  id: number;
  text: string;
  feedback: string;
  correct?: boolean;
};

type Scenario = {
  id: number;
  prompt: string;
  choices: Choice[];
};

type Level = {
  name: string;
  description: string;
  scenarios: Scenario[];
};

export default function ConversationSimPage() {
  const levels: Level[] = [
    {
      name: 'Niveau 1 — Débutant',
      description: 'Situations simples : se présenter, dire merci, s’excuser.',
      scenarios: [
        {
          id: 1,
          prompt: "Tu vois quelqu’un de nouveau à l’école. Que fais-tu pour démarrer une conversation ?",
          choices: [
            { id: 0, text: "Lui demander son nom et comment il va.", feedback: "Bien joué — poser une question ouverte aide à démarrer la conversation.", correct: true },
            { id: 1, text: "Le regarder sans parler.", feedback: "Cela risque de sembler étrange et rendre l’autre mal à l’aise." },
            { id: 2, text: "Dire seulement 'Salut' puis partir.", feedback: "Un peu court — essaie d’ajouter une question pour engager." },
          ],
        },
        {
          id: 2,
          prompt: "Tu marches et tu marches sur le pied de quelqu’un par accident. Que dis-tu ?",
          choices: [
            { id: 0, text: "Rien, continuer à marcher.", feedback: "Ignorer n’est pas poli et peut blesser la personne." },
            { id: 1, text: "Excusez-moi, ça va ?", feedback: "Bonne réaction : s’excuser et vérifier si la personne va bien.", correct: true },
            { id: 2, text: "C’était ta faute.", feedback: "Accuser augmente le conflit — mieux vaut s’excuser si c’est un accident." },
          ],
        },
        {
          id: 3,
          prompt: "Un camarade te prête un crayon. Quelle réponse est appropriée ?",
          choices: [
            { id: 0, text: "Merci beaucoup !", feedback: "Exact — la politesse renforce les relations.", correct: true },
            { id: 1, text: "Donne-le-moi.", feedback: "Cela sonne impoli. Un 'merci' est préférable." },
            { id: 2, text: "Je te le rends plus tard.", feedback: "Dire que tu le rends plus tard est utile, mais n’oublie pas le 'merci'." },
          ],
        },
      ],
    },
    {
      name: 'Niveau 2 — Intermédiaire',
      description: 'Scénarios un peu plus compliqués : inviter, gérer un malentendu.',
      scenarios: [
        {
          id: 4,
          prompt: "Tu veux inviter un camarade à jouer mais il semble occupé. Que dis-tu ?",
          choices: [
            { id: 0, text: "Tu dois jouer maintenant.", feedback: "Trop direct et autoritaire — ça peut repousser la personne." },
            { id: 1, text: "Tu veux jouer plus tard ? Dis-moi quand tu es libre.", feedback: "Bonne idée : proposer et laisser le choix de la personne." , correct: true},
            { id: 2, text: "Si tu veux pas, tant pis.", feedback: "Cette réponse peut blesser la personne et fermer la porte." },
          ],
        },
        {
          id: 5,
          prompt: "Un ami a mal compris quelque chose que tu as dit et est fâché. Que fais-tu ?",
          choices: [
            { id: 0, text: "Laisse-le fâché, il se calmera.", feedback: "Ignorer le problème ne le résoudra pas." },
            { id: 1, text: "Explique calmement ce que tu as voulu dire et écoute.", feedback: "Très bien — expliquer et écouter aide à résoudre les malentendus.", correct: true },
            { id: 2, text: "Crier jusqu’à ce qu’il comprenne.", feedback: "La colère risque d’empirer la situation." },
          ],
        },
        {
          id: 6,
          prompt: "Tu as fini le sandwich de ton frère sans demander. Que dis-tu ?",
          choices: [
            { id: 0, text: "C’est bon, mange autre chose.", feedback: "Mauvaise approche — mieux vaut s’excuser et proposer de remplacer." },
            { id: 1, text: "Désolé, je te rembourse ou j’en prends un autre ?", feedback: "Bonne réaction — tu assumes et proposes une solution.", correct: true },
            { id: 2, text: "Je l’ai mangé parce que j’avais faim.", feedback: "Expliquer n’est pas mauvais, mais il faut s’excuser d’abord." },
          ],
        },
      ],
    },
    {
      name: 'Niveau 3 — Avancé',
      description: 'Conflits délicats, négociation, garder son calme.',
      scenarios: [
        {
          id: 7,
          prompt: "Deux amis se disputent et te demandent de choisir un camp. Que fais-tu ?",
          choices: [
            { id: 0, text: "Je prends le camp de celui qui crie le plus fort.", feedback: "Prendre parti sans comprendre peut aggraver le conflit." },
            { id: 1, text: "Je propose qu’on parle calmement pour comprendre les deux côtés.", feedback: "Excellent : favoriser le dialogue aide à résoudre le conflit.", correct: true },
            { id: 2, text: "Je pars et ne m’en occupe pas.", feedback: "Parfois partir peut calmer, mais ne résout pas le conflit si on peut aider." },
          ],
        },
        {
          id: 8,
          prompt: "Un collègue te critique devant les autres. Tu veux répondre. Que fais-tu ?",
          choices: [
            { id: 0, text: "Je réponds avec insulte pour me défendre.", feedback: "Répondre par l’insulte escalade le conflit." },
            { id: 1, text: "Je demande à parler en privé pour comprendre et expliquer.", feedback: "Bonne stratégie : préserver l’estime et résoudre calmement.", correct: true },
            { id: 2, text: "Je rigole pour cacher que ça m’a blessé.", feedback: "Cacher ses émotions n’aide pas forcément à régler le problème." },
          ],
        },
        {
          id: 9,
          prompt: "Ton ami te confie un secret fragile. Que fais-tu ?",
          choices: [
            { id: 0, text: "Je raconte à un autre ami pour conseil.", feedback: "Révéler un secret sans permission brise la confiance." },
            { id: 1, text: "Je respecte la confiance et ne le partage pas.", feedback: "Parfait — protéger la confidentialité renforce la relation.", correct: true },
            { id: 2, text: "Je le publie sur les réseaux.", feedback: "C’est une violation de confiance importante." },
          ],
        },
      ],
    },
  ];

  // state & progression (no persistent save)
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [unlockedLevels, setUnlockedLevels] = useState([true, false, false]);
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [ended, setEnded] = useState(false);

  const level = selectedLevel !== null ? levels[selectedLevel] : null;
  const scenarios = level?.scenarios ?? [];
  const scenario = scenarios[scenarioIndex];

  function choose(choice: Choice) {
    if (showFeedback) return; // prevent multiple clicks
    setSelectedChoice(choice.id);
    setShowFeedback(true);
    if (choice.correct) setScore((s) => s + 1);
  }

  function next() {
    if (!level) return;
    if (scenarioIndex < scenarios.length - 1) {
      setScenarioIndex((i) => i + 1);
      setSelectedChoice(null);
      setShowFeedback(false);
    } else {
      // level finished -> unlock next if any
      if (selectedLevel !== null && selectedLevel < levels.length - 1) {
        const copy = [...unlockedLevels];
        copy[selectedLevel + 1] = true;
        setUnlockedLevels(copy);
      }
      setEnded(true);
    }
  }

  function restartLevel() {
    setScenarioIndex(0);
    setSelectedChoice(null);
    setShowFeedback(false);
    setScore(0);
    setEnded(false);
  }

  function backToLevels() {
    setSelectedLevel(null);
    setScenarioIndex(0);
    setSelectedChoice(null);
    setShowFeedback(false);
    setScore(0);
    setEnded(false);
  }

  return (
    <main className="page">
      {/* level selection */}
      {selectedLevel === null && (
        <section className="panel level-panel">
          <h1 className="title">Simulations de conversation</h1>
          <p className="lead">Courtes situations réelles — fais les bons choix.</p>

          <div className="levels">
            {levels.map((lvl, i) => (
              <button
                key={i}
                disabled={!unlockedLevels[i]}
                className={`level-card ${unlockedLevels[i] ? '' : 'locked'}`}
                onClick={() => unlockedLevels[i] && setSelectedLevel(i)}
                aria-disabled={!unlockedLevels[i]}
              >
                <div className="lvl-head">
                  <strong>{lvl.name}</strong>
                </div>
                <p className="lvl-desc">{lvl.description}</p>
                {!unlockedLevels[i] && <div className="lock">🔒</div>}
              </button>
            ))}
          </div>

          <button className="btn-back" onClick={() => (window.location.href = '/games')}>⬅ Retour</button>
        </section>
      )}

      {/* scenario play */}
      {selectedLevel !== null && level && (
        <section className="panel play-panel">
          <div className="panel-header">
            <h2 className="panel-title">{level.name}</h2>
            <div className="small">Scénario {scenarioIndex + 1} / {scenarios.length}</div>
          </div>

          {!ended ? (
            <>
              <div className="scenario">
                <p className="prompt">{scenario.prompt}</p>

                <div className="choices">
                  {scenario.choices.map((c) => {
                    const isSelected = selectedChoice === c.id;
                    const showCorrect = showFeedback && c.correct;
                    const showWrong = showFeedback && isSelected && !c.correct;

                    return (
                      <button
                        key={c.id}
                        className={`choice ${isSelected ? 'selected' : ''} ${showCorrect ? 'correct' : ''} ${showWrong ? 'wrong' : ''}`}
                        onClick={() => choose(c)}
                        disabled={showFeedback}
                      >
                        <span className="choice-text">{c.text}</span>
                        {showFeedback && isSelected && <div className="choice-feedback">{c.feedback}</div>}
                        {showFeedback && showCorrect && <div className="choice-feedback">Bonne réponse</div>}
                      </button>
                    );
                  })}
                </div>

                <div className="controls">
                  <div className="score">Score : {score}</div>
                  <div className="spacer" />
                  <button className="btn-secondary" onClick={backToLevels}>⟵ Niveaux</button>
                  <button className="btn-primary" onClick={next} disabled={!showFeedback}>Suivant ➜</button>
                </div>

                <div className="progress-line">
                  <div className="progress-fill" style={{ width: `${((scenarioIndex + 1) / scenarios.length) * 100}%` }} />
                </div>
              </div>
            </>
          ) : (
            <div className="end-card">
              <h3>🎉 Niveau terminé</h3>
              <p>Score final : <strong>{score} / {scenarios.length}</strong></p>

              <div className="end-actions">
                <button className="btn-primary" onClick={restartLevel}>Rejouer</button>
                <button className="btn-secondary" onClick={backToLevels}>Choisir un niveau</button>
              </div>
            </div>
          )}
        </section>
      )}

      <style jsx>{`
        :root {
          --primary: #3A63B7;
          --primary-dark: #324f94;
          --bg: #eef2f6;
          --card: #ffffff;
          --muted: #9aa8c9;
        }

        .page {
          min-height: 100vh;
          background: var(--bg);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px;
        }

        .panel {
          width: 100%;
          max-width: 760px;
          background: var(--card);
          border-radius: 14px;
          padding: 20px 24px;
          box-shadow: 0 10px 30px rgba(10,20,40,0.08);
        }

        .level-panel { text-align: center; padding: 28px; }

        .title {
          color: var(--primary);
          margin: 8px 0 4px;
          font-size: 28px;
          font-weight: 700;
        }
        .lead { color: #445; margin-bottom: 18px; }

        .levels {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
          margin-bottom: 18px;
        }

        .level-card {
          background: linear-gradient(180deg, rgba(58,99,183,0.12), rgba(58,99,183,0.06));
          border: 1px solid rgba(58,99,183,0.12);
          padding: 16px;
          border-radius: 12px;
          text-align: left;
          cursor: pointer;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          position: relative;
          min-height: 100px;
        }

        .level-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(30,50,100,0.08); }

        .level-card.locked {
          background: linear-gradient(180deg, rgba(154,168,201,0.12), rgba(154,168,201,0.06));
          cursor: not-allowed;
          opacity: 0.8;
          transform: none;
          box-shadow: none;
        }

        .lvl-head { font-size: 16px; color: var(--primary-dark); margin-bottom: 8px; }
        .lvl-desc { color: #445; font-size: 13px; opacity: 0.9; }

        .lock { position: absolute; right: 12px; top: 12px; font-size: 18px; }

        .btn-back { background: #888; color: white; border: none; padding: 8px 14px; border-radius: 8px; margin-top: 8px; cursor: pointer; }

        /* Play panel */
        .play-panel { padding: 18px; }

        .panel-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 10px; }
        .panel-title { color: var(--primary); margin: 0; font-size: 20px; }
        .small { color: #667; font-size: 13px; }

        .scenario { padding: 8px 0 0; }
        .prompt { font-size: 18px; margin-bottom: 14px; color: #223; }

        .choices { display: grid; gap: 10px; grid-template-columns: 1fr; margin-bottom: 14px; }
        .choice {
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid rgba(30,40,80,0.06);
          background: linear-gradient(180deg,#fff,#fafcff);
          text-align: left;
          cursor: pointer;
          transition: transform 0.14s ease, box-shadow 0.14s ease;
        }
        .choice:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(30,40,80,0.06); }

        .choice.selected { outline: 2px solid rgba(58,99,183,0.14); }
        .choice.correct { border-color: rgba(46,125,50,0.18); background: linear-gradient(180deg,#f0fff4,#eefbf0); }
        .choice.wrong { border-color: rgba(244,67,54,0.12); background: linear-gradient(180deg,#fff6f6,#fff0f0); }

        .choice-text { display: block; font-size: 15px; color: #112; margin-bottom: 6px; }
        .choice-feedback { font-size: 13px; color: #444; opacity: 0.95; }

        .controls { display:flex; gap:12px; align-items:center; margin-top:10px; }
        .score { font-weight: 700; color: var(--primary-dark); }
        .spacer { flex:1; }

        .btn-secondary, .btn-primary {
          padding: 10px 14px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: 600;
        }
        .btn-secondary { background: #f3f6fb; color: #334; border: 1px solid rgba(30,40,80,0.06); }
        .btn-primary { background: var(--primary); color: white; box-shadow: 0 8px 20px rgba(58,99,183,0.16); }

        .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }

        .progress-line {
          height: 8px;
          background: #e6ecf8;
          border-radius: 999px;
          margin-top: 14px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: var(--primary);
          width: 0%;
          transition: width 0.32s ease;
        }

        .end-card { text-align:center; padding: 18px; }
        .end-actions { display:flex; gap:12px; justify-content:center; margin-top:12px; }

        /* responsive */
        @media (max-width: 640px) {
          .panel { padding: 16px; }
          .levels { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}