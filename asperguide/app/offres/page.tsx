'use client';

import Link from 'next/link';

export default function OffresPage() {
  return (
    <div className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Nos Offres d&apos;Abonnement</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Carte Offre Basique */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <h5 className="text-xl font-semibold mb-3">Offre Basique</h5>
            <p className="text-gray-600 mb-4">
              Accès aux fonctionnalités principales et au guide pré-diagnostique.
            </p>
            <h6 className="text-lg font-bold mb-4">10€/mois</h6>
            <Link
              href="#"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
            >
              S&apos;abonner
            </Link>
          </div>

          {/* Carte Offre Standard */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <h5 className="text-xl font-semibold mb-3">Offre Standard</h5>
            <p className="text-gray-600 mb-4">
              Toutes les fonctionnalités du Basique + jeux et animations interactives.
            </p>
            <h6 className="text-lg font-bold mb-4">20€/mois</h6>
            <Link
              href="#"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
            >
              S&apos;abonner
            </Link>
          </div>

          {/* Carte Offre Premium */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <h5 className="text-xl font-semibold mb-3">Offre Premium</h5>
            <p className="text-gray-600 mb-4">
              Accès complet à tout le contenu, suivi personnalisé et supports avancés.
            </p>
            <h6 className="text-lg font-bold mb-4">30€/mois</h6>
            <Link
              href="#"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
            >
              S&apos;abonner
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
