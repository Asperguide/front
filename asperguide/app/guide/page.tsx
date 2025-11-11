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
    <main className="p-6">
      <section className="py-8 max-w-3xl mx-auto" aria-label="Guide étape par étape pour les parents">
        <h2 className="text-3xl font-bold text-center mb-4">Guide pour les parents</h2>
        <p className="text-center text-gray-700 mb-6">
          Suivez les conseils étape par étape pour mieux accompagner votre enfant Asperger.
        </p>

        {/* Liste des conseils */}
        <div className="flex flex-col gap-4 mb-6">
          {conseils.slice(0, currentIndex).map((tip, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
              role="region"
              aria-label={`Conseil ${idx + 1} sur ${conseils.length}`}
            >
              <p className="text-gray-800">{tip}</p>
            </div>
          ))}
        </div>

        {/* Bouton */}
        <div className="text-center">
          <button
            className={`px-6 py-2 rounded-lg font-semibold transition cursor-pointer
              ${currentIndex >= conseils.length
                ? 'bg-gray-300 text-gray-700 cursor-not-allowed'
                : 'bg-primary text-white hover:bg-blue-700'
              }`}
            onClick={handleNextTip}
            disabled={currentIndex >= conseils.length}
            aria-label={currentIndex >= conseils.length
              ? "Tous les conseils ont été affichés"
              : "Afficher le prochain conseil"}
          >
            {currentIndex >= conseils.length
              ? "Tous les conseils ont été affichés"
              : "Prochain conseil"}
          </button>
        </div>
      </section>
    </main>
  );
}
