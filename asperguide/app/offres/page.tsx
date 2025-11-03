export default function OffresPage() {
  return (
    <div className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Nos Offres d&apos;Abonnement</h2>

        <div className="row g-4">
          {/* Carte Offre Basique */}
          <div className="col-md-4">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Offre Basique</h5>
                <p className="card-text">
                  Accès aux fonctionnalités principales et au guide pré-diagnostique.
                </p>
                <h6 className="card-price">10€/mois</h6>
                <a href="#" className="btn btn-primary mt-3">
                  S&apos;abonner
                </a>
              </div>
            </div>
          </div>

          {/* Carte Offre Standard */}
          <div className="col-md-4">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Offre Standard</h5>
                <p className="card-text">
                  Toutes les fonctionnalités du Basique + jeux et animations interactives.
                </p>
                <h6 className="card-price">20€/mois</h6>
                <a href="#" className="btn btn-primary mt-3">
                  S&apos;abonner
                </a>
              </div>
            </div>
          </div>

          {/* Carte Offre Premium */}
          <div className="col-md-4">
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Offre Premium</h5>
                <p className="card-text">
                  Accès complet à tout le contenu, suivi personnalisé et supports avancés.
                </p>
                <h6 className="card-price">30€/mois</h6>
                <a href="#" className="btn btn-primary mt-3">
                  S&apos;abonner
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
