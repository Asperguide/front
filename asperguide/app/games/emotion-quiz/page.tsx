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
    <main className="quiz-container">
      <div className="quiz-board">
        <h1 className="quiz-title">Quiz des émotions</h1>

        {!ended ? (
          <>
            <div className="score">Score : {score} / {questions.length}</div>
            <div className="question-count">Question : {current + 1} / {questions.length}</div>
            <p className="question-text">{currentQuestion.question}</p>

            <div className="answers-list">
              {currentQuestion.answers.map((answer, i) => {
                const isCorrect = i === currentQuestion.correct;
                const isWrong = selected === i && selected !== currentQuestion.correct;

                return (
                  <button
                    key={i}
                    onClick={() => selectAnswer(i)}
                    className={`answer-btn ${selected !== null ? (isCorrect ? 'correct' : isWrong ? 'wrong' : '') : ''}`}
                    disabled={selected !== null}
                  >
                    {answer}
                  </button>
                );
              })}
            </div>

            {feedback && <p className="feedback">{feedback}</p>}

            {selected !== null && (
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
            <h3 className="quiz-end">Quiz terminé 🎉</h3>
            <p className="score">Votre score : {score} / {questions.length}</p>

            <button className="btn-restart" onClick={restart}>Rejouer</button>
            <button className="btn-back" onClick={() => (window.location.href = '/games')}>Retour au menu</button>
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

        .answers-list {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .answer-btn {
          width: 80%;
          padding: 12px;
          border-radius: 8px;
          border: none;
          background: #3A63B7;
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .answer-btn:hover {
          opacity: 0.9;
        }

        .answer-btn.correct {
          background: #011635;
        }

        .answer-btn.wrong {
          background: #F44336;
        }

        .answer-btn:disabled {
          cursor: default;
        }

        .feedback {
          font-weight: 600;
          margin-top: 12px;
          font-size: 16px;
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

        .btn-restart:hover {
          background: #34529a;
        }

        .btn-back {
          background: #999;
          color: white;
          margin-top: 10px;
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
