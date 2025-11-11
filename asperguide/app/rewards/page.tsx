'use client';

export default function RewardsPage() {
  return (
    <main className="p-5">
      <section className="py-5" aria-labelledby="rewards-title">
        <div className="max-w-6xl mx-auto">

          <h2 id="rewards-title" className="text-center text-2xl font-semibold mb-4">Récompenses et Badges</h2>
          <p className="text-center mb-8 text-gray-600">
            Plus vous utilisez AsperGuide (jeux, vidéos, conseils), plus vous débloquez de récompenses !
          </p>

          {/* Progression */}
          <div className="mb-8 max-w-md mx-auto" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} aria-label="Progression générale">
            <h5 className="text-center mb-2 font-medium">Progression générale : 45%</h5>
            <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
              <div
                className="bg-primary h-6 text-white flex items-center justify-center font-medium"
                style={{ width: '45%' }}
              >
                45%
              </div>
            </div>
          </div>

          {/* Liste des récompenses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white shadow rounded-lg p-4" role="region" aria-label="Badge Débutant : Débloqué">
              <h5 className="text-lg font-semibold mb-2">Badge Débutant</h5>
              <p className="text-gray-600 mb-2">Inscription et première connexion au site.</p>
              <span className="inline-block bg-green-500 text-white text-sm px-3 py-1 rounded-full">Débloqué</span>
            </div>

            <div className="bg-white shadow rounded-lg p-4" role="region" aria-label="Badge Joueur : Bloqué">
              <h5 className="text-lg font-semibold mb-2">Badge Joueur</h5>
              <p className="text-gray-600 mb-2">Avoir terminé 5 jeux différents.</p>
              <span className="inline-block bg-gray-400 text-white text-sm px-3 py-1 rounded-full">Bloqué</span>
            </div>

            <div className="bg-white shadow rounded-lg p-4" role="region" aria-label="Badge Lecteur : Bloqué">
              <h5 className="text-lg font-semibold mb-2">Badge Lecteur</h5>
              <p className="text-gray-600 mb-2">Avoir consulté 10 conseils du guide.</p>
              <span className="inline-block bg-gray-400 text-white text-sm px-3 py-1 rounded-full">Bloqué</span>
            </div>

            <div className="bg-white shadow rounded-lg p-4" role="region" aria-label="Badge Expert : Bloqué">
              <h5 className="text-lg font-semibold mb-2">Badge Expert</h5>
              <p className="text-gray-600 mb-2">Utilisation complète de toutes les fonctionnalités.</p>
              <span className="inline-block bg-gray-400 text-white text-sm px-3 py-1 rounded-full">Bloqué</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
