'use client';

export default function RewardsPage() {
  return (
    <>
      <main className="p-5">
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">Récompenses et Badges</h2>
            <p className="text-center mb-5">
              Plus vous utilisez AsperGuide (jeux, vidéos, conseils), plus vous débloquez de récompenses !
            </p>

            {/* Progression */}
            <div className="mb-5 text-center">
              <h5>Progression générale : 45%</h5>
              <div className="progress" style={{ height: '25px' }}>
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: '45%' }}
                >
                  45%
                </div>
              </div>
            </div>

            {/* Liste des récompenses */}
            <div className="row g-4 text-center">
              <div className="col-md-3">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <h5 className="card-title">Badge Débutant</h5>
                    <p className="card-text">Inscription et première connexion au site.</p>
                    <span className="badge bg-success">Débloqué</span>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <h5 className="card-title">Badge Joueur</h5>
                    <p className="card-text">Avoir terminé 5 jeux différents.</p>
                    <span className="badge bg-secondary">Bloqué</span>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <h5 className="card-title">Badge Lecteur</h5>
                    <p className="card-text">Avoir consulté 10 conseils du guide.</p>
                    <span className="badge bg-secondary">Bloqué</span>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <h5 className="card-title">Badge Expert</h5>
                    <p className="card-text">Utilisation complète de toutes les fonctionnalités.</p>
                    <span className="badge bg-secondary">Bloqué</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
