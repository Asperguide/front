'use client';

import { useState } from 'react';

const conseils = [
  "Établissez une routine quotidienne stable pour votre enfant.",
  "Utilisez des supports visuels pour expliquer les activités et règles.",
  "Encouragez les interactions sociales en petits groupes.",
  "Reconnaissez et félicitez les efforts et progrès.",
  "Soyez patient face aux comportements répétitifs ou aux crises.",
  "Adaptez l'environnement sensoriel pour réduire le stress.",
  "Favorisez les activités basées sur les intérêts de votre enfant."
];

export default function GuidePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextTip = () => {
    if (currentIndex < conseils.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <main className="p-5">
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">Guide pour les parents</h2>
            <p className="text-center mb-4">Suivez les conseils étape par étape pour mieux accompagner votre enfant Asperger.</p>

            <div className="d-flex flex-column align-items-center gap-3">
              {conseils.slice(0, currentIndex).map((tip, idx) => (
                <div key={idx} className="card shadow p-3 w-100">
                  <div className="card-body">
                    <p className="card-text">{tip}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-4">
              <button
                className="btn btn-primary"
                onClick={handleNextTip}
                disabled={currentIndex >= conseils.length}
              >
                {currentIndex >= conseils.length ? "Tous les conseils ont été affichés" : "Prochain conseil"}
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
