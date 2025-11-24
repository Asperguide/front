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
* CREATION DATE: 24-11-2025
* LAST Modified: 19:3:55 24-11-2025
* DESCRIPTION: 
* Games Page
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: Displaying all the games available
* // AR
* +==== END AsperHeader =================+
*/ 
'use client';

import { useState } from 'react';
import Link from 'next/link';

type Game = {
  title: string;
  description: string;
  category: string;
  link: string;
};

const games: Game[] = [
  {
    title: 'Tri des actions',
    description: 'Apprends à reconnaître les comportements appropriés ou non.',
    category: 'social',
    link: '/games/sorting',
  },
  {
    title: 'Modulation émotionnelle',
    description: 'Ajuste l’intensité d’une émotion selon la situation.',
    category: 'social',
    link: '/games/emotion-slider',
  },
  {
    title: 'Quiz des émotions',
    description: 'Réponds aux questions liées aux émotions.',
    category: 'social',
    link: '/games/emotion-qui',
  },
  {
    title: 'Vrai ou Faux',
    description: 'Détermine si les comportements sont appropriés.',
    category: 'social',
    link: '/games/true-fals',
  },
  {
  title: 'Complète la phrase',
  description: 'Remplis les phrases avec le bon comportement.',
  category: 'social',
  link: '/games/fill-blanks',
},  
{
  title: 'Simulation sociale',
  description: 'Fais le bon choix!',
  category: 'social',
  link: '/games/RP',
},
];

export default function GamesPage() {
  const [filter, setFilter] = useState('all');

  const filteredGames = filter === 'all' ? games : games.filter(game => game.category === filter);

  return (
    <main className="p-6">
      <section className="py-8" aria-label="Liste des jeux disponibles">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Nos Jeux Disponibles</h2>

          {/* Filtrage */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-8"
            role="group"
            aria-label="Filtrer les jeux par catégorie"
          >
            {['all', 'social'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition cursor-pointer
                  ${filter === cat ? 'bg-primary text-white' : 'bg-white border border-primary text-primary hover:bg-primary hover:text-white'}`}
                aria-pressed={filter === cat}
                aria-label={cat === 'all' ? 'Afficher tous les jeux' : `Afficher les jeux ${cat}`}
              >
                {cat === 'all' ? 'Tous' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Liste des jeux */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredGames.map((game, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-xl transition"
                role="region"
                aria-label={`Jeu : ${game.title}`}
              >
                <div>
                  <h5 className="text-xl font-semibold mb-2 text-center">{game.title}</h5>
                  <p className="text-gray-600 text-center">{game.description}</p>
                </div>
                <div className="text-center mt-4">
                  <Link href={game.link}>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
                      Jouer
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}