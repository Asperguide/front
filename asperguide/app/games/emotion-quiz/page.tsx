'use client';

import { useState } from 'react';

interface Question {
  question: string;
  answers: string[];
  correct: number;
}

export default function EmotionQuizPage() {
  const questions: Question[] = [
    {
      question: "Quelle émotion ressentez-vous lorsque vous gagnez un concours ?",
      answers: ["Tristesse", "Colère", "Joie", "Peur"],
      correct: 2,
    },
    {
      question: "Quelle émotion ressentez-vous lorsque vous perdez quelque chose d’important ?",
      answers: ["Joie", "Tristesse", "Sérénité", "Excitation"],
      correct: 1,
    },
    {
      question: "Quelle émotion est souvent associée à un danger soudain ?",
      answers: ["Peur", "Dégoût", "Bonheur", "Fatigue"],
      correct: 0,
    },
    {
      question: "Quelle émotion ressentez-vous lorsqu’un ami vous trahit ?",
      answers: ["Amour", "Colère", "Joie", "Soulagement"],
      correct: 1,
    },
    {
      question: "Quelle émotion peut être causée par une mauvaise odeur ?",
      answers: ["Dégoût", "Peur", "Tristesse", "Joie"],
      correct: 0,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [ended, setEnded] = useState(false);

  const currentQuestion = questions[current];

  function selectAnswer(index: number) {
    if (selected !== null) return; 

    setSelected(index);

    if (index === currentQuestion.correct) {
      setFeedback("✅ Correct !");
      setScore(score + 1);
    } else {
      setFeedback("❌ Mauvaise réponse !");
    }
  }

  function next() {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
      setFeedback('');
    } else {
      setEnded(true);
    }
  }

  function restart() {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFeedback('');
    setEnded(false);
  }

  return (
    <main className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card p-4 shadow text-center"
        style={{ maxWidth: '450px', background: 'gainsboro' }}
      >
        <h1 className="text-teal fw-bold">Quiz des émotions</h1>

        {!ended ? (
          <>
            <div className="fw-bold text-teal mt-2">
              Score : {score}/{questions.length}
            </div>

            <div className="small text-secondary mb-3">
              Question : {current + 1}/{questions.length}
            </div>

            <p className="fw-bold">{currentQuestion.question}</p>

            <div className="d-flex flex-column align-items-center">
              {currentQuestion.answers.map((answer, i) => {
                const isCorrect = i === currentQuestion.correct;
                const isWrong = selected === i && selected !== currentQuestion.correct;

                return (
                  <button
                    key={i}
                    onClick={() => selectAnswer(i)}
                    className="mb-2"
                    style={{
                      width: '80%',
                      padding: '10px',
                      borderRadius: 6,
                      background:
                        selected === null
                          ? 'teal'
                          : isCorrect
                          ? '#011635'
                          : isWrong
                          ? '#F44336'
                          : 'teal',
                      color: 'white',
                      cursor: selected === null ? 'pointer' : 'default',
                    }}
                  >
                    {answer}
                  </button>
                );
              })}
            </div>

            {feedback && <p className="mt-2 fw-bold">{feedback}</p>}

            {selected !== null && (
              <button className="btn btn-dark mt-3 w-50" onClick={next}>
                Suivant 
              </button>
            )}

            <button
              className="btn btn-secondary mt-4 w-75"
              onClick={() => (window.location.href = '/games')}
            >
              ⬅ Retour
            </button>
          </>
        ) : (
          <>
            <h3 className="text-teal fw-bold">Quiz terminé 🎉</h3>
            <p>Votre score : {score} / {questions.length}</p>

            <button className="btn btn-primary w-75" onClick={restart}>
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
