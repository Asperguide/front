import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Section Hero */}
      <section
        className="bg-gray-100 text-center py-16"
        aria-label="Section d'accueil"
      >
        <div className="max-w-4xl mx-auto px-4 text-gray-900">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bienvenue sur votre espace AsperGuide
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Accédez rapidement à vos guides, vos offres et vos ressources personnalisées.
          </p>
          <Link
            href="/games"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition"
            aria-label="Découvrir nos jeux AsperGuide"
          >
            Découvrir nos jeux
          </Link>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <section
        className="py-16"
        aria-label="Fonctionnalités principales"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fonctionnalités principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105"
              role="region"
              aria-label="Guide interactif"
            >
              <h5 className="text-xl font-semibold mb-3">Guides interactifs</h5>
              <p className="text-gray-700">
                Suivez des guides adaptés aux besoins des enfants et adolescents atteints du syndrome d&apos;Asperger.
              </p>
            </div>
            <div
              className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105"
              role="region"
              aria-label="Animations et jeux"
            >
              <h5 className="text-xl font-semibold mb-3">Animations et jeux</h5>
              <p className="text-gray-700">
                Des contenus ludiques et éducatifs pour aider à la compréhension et au développement social.
              </p>
            </div>
            <div
              className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105"
              role="region"
              aria-label="Suivi personnalisé"
            >
              <h5 className="text-xl font-semibold mb-3">Suivi personnalisé</h5>
              <p className="text-gray-700">
                Un suivi adapté à chaque utilisateur pour optimiser l’accompagnement et le développement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Call-to-Action */}
      <section
        className="bg-primary text-white text-center py-16"
        aria-label="Appel à l'action pour découvrir les ressources"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Prêt à découvrir toutes nos ressources ?
          </h2>
          <Link
            href="#"
            className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition"
            aria-label="Découvrir toutes les ressources AsperGuide"
          >
            Découvrir
          </Link>
        </div>
      </section>
    </>
  );
}
