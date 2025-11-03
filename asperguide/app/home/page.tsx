import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Section Hero */}
      <section className="bg-light text-center py-5">
        <div className="container text-black">
          <h1 className="display-4 mb-3">Bienvenue sur votre espace AsperGuide</h1>
          <p className="lead mb-4">
            Accédez rapidement à vos guides, vos offres et vos ressources personnalisées.
          </p>
          <Link href="/games" className="btn btn-primary btn-lg">
            Découvrir nos jeux
          </Link>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Fonctionnalités principales</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Guides interactifs</h5>
                  <p className="card-text">
                    Suivez des guides adaptés aux besoins des enfants et adolescents atteints du syndrome d&apos;Asperger.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Animations et jeux</h5>
                  <p className="card-text">
                    Des contenus ludiques et éducatifs pour aider à la compréhension et au développement social.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Suivi personnalisé</h5>
                  <p className="card-text">
                    Un suivi adapté à chaque utilisateur pour optimiser l’accompagnement et le développement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Call-to-Action */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h2 className="mb-3">Prêt à découvrir toutes nos ressources ?</h2>
          <Link href="#" className="btn btn-light btn-lg">
            Découvrir
          </Link>
        </div>
      </section>
    </>
  );
}
