/* 
* +==== BEGIN AsperHeader =================+
* LOGO: 
* ..........####...####..........
* ......###.....#.#########......
* ....##........#.###########....
* ...#..........#.############...
* ...#..........#.#####.######...
* ..#.....##....#.###..#...####..
* .#.....#.##...#.##..##########.
* #.....##########....##...######
* #.....#...##..#.##..####.######
* .#...##....##.#.##..###..#####.
* ..#.##......#.#.####...######..
* ..#...........#.#############..
* ..#...........#.#############..
* ...##.........#.############...
* ......#.......#.#########......
* .......#......#.########.......
* .........#####...#####.........
* /STOP
* PROJECT: AsperHeader
* FILE: page.tsx
* CREATION DATE: 22-11-2025
* LAST Modified: 16:30:40 22-11-2025
* DESCRIPTION: 
* offres page
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: this is page is for describe and access to the abonnement offer
* // AR
* +==== END AsperHeader =================+
*/ 

'use client';

import Link from 'next/link';

export default function OffresPage() {
  const offres = [
    {
      title: 'Offre Basique',
      description: 'Accès aux fonctionnalités principales et au guide pré-diagnostique.',
      price: '10€/mois',
    },
    {
      title: 'Offre Standard',
      description: 'Toutes les fonctionnalités du Basique + jeux et animations interactives.',
      price: '20€/mois',
    },
    {
      title: 'Offre Premium',
      description: 'Accès complet à tout le contenu, suivi personnalisé et supports avancés.',
      price: '30€/mois',
    },
  ];

  return (
    <div className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Nos Offres d&apos;Abonnement</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offres.map((offre, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
              aria-label={`${offre.title} à ${offre.price}: ${offre.description}`}
            >
              <h5 className="text-xl font-semibold mb-3">{offre.title}</h5>
              <p className="text-gray-600 mb-4">{offre.description}</p>
              <h6 className="text-lg font-bold mb-4">{offre.price}</h6>
              <Link
                href="#"
                aria-label={`S'abonner à l'offre ${offre.title}`}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
              >
                S&apos;abonner
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
