'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Bienvenue sur AsperGuide</h1>
          <p className="lead">
            Votre guide pour accompagner les enfants et adolescents atteints du syndrome d&apos;Asperger.
          </p>
          <Link href="/register" className="btn btn-light btn-lg mt-3">
            Commencer
          </Link>
        </div>
      </section>

      {/* Offres d'abonnement */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Nos Offres</h2>
          <div className="row g-4">
            {[
              {
                title: 'Offre Basique',
                desc: 'Accès aux fonctionnalités principales et au guide pré-diagnostique.',
                price: '10€/mois',
              },
              {
                title: 'Offre Standard',
                desc: 'Fonctionnalités du Basique + jeux et animations interactives.',
                price: '20€/mois',
              },
              {
                title: 'Offre Premium',
                desc: 'Accès complet, suivi personnalisé et supports avancés.',
                price: '30€/mois',
              },
            ].map((offer) => (
              <div className="col-md-4" key={offer.title}>
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <h5 className="card-title">{offer.title}</h5>
                    <p className="card-text">{offer.desc}</p>
                    <h6 className="card-price">{offer.price}</h6>
                    <Link href="/offres" className="btn btn-primary mt-3">
                      S&apos;abonner
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
