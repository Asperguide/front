'use client';

import { useState } from 'react';

type Game = {
  title: string;
  description: string;
  category: string;
};

const games: Game[] = [
  { title: 'Puzzle des formes', description: 'Améliore la logique et la reconnaissance des formes.', category: 'logique' },
  { title: 'Jeu des émotions', description: 'Apprendre à identifier et comprendre les émotions des autres.', category: 'social' },
  { title: 'Couleurs et sons', description: 'Activité sensorielle pour développer la perception auditive et visuelle.', category: 'sensoriel' },
  { title: 'Labyrinthe', description: 'Renforce la logique et la planification.', category: 'logique' },
  { title: 'Jeu du partage', description: 'Apprendre les notions de partage et de coopération.', category: 'social' },
];

export default function GamesPage() {
  const [filter, setFilter] = useState('all');

  const filteredGames = filter === 'all' ? games : games.filter(game => game.category === filter);

  return (
    <main className="p-6">
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Nos Jeux Disponibles</h2>

          {/* Filtrage par catégorie */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['all', 'logique', 'social', 'sensoriel'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition cursor-pointer
                  ${filter === cat ? 'bg-primary text-white' : 'bg-white border border-primary text-primary hover:bg-primary hover:text-white'}`}
              >
                {cat === 'all' ? 'Tous' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Liste des jeux */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredGames.map((game, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-xl transition">
                <div>
                  <h5 className="text-xl font-semibold mb-2 text-center">{game.title}</h5>
                  <p className="text-gray-600 text-center">{game.description}</p>
                </div>
                <div className="text-center mt-4">
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
                    Jouer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
