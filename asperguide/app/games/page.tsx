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
    <>
      <main className="p-5">
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">Nos Jeux Disponibles</h2>

            {/* Filtrage par catégorie */}
            <div className="text-center mb-5">
              {['all', 'logique', 'social', 'sensoriel'].map(cat => (
                <button
                  key={cat}
                  className={`btn me-2 ${filter === cat ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat === 'all' ? 'Tous' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            {/* Liste des jeux */}
            <div className="row g-4">
              {filteredGames.map((game, index) => (
                <div key={index} className="col-md-4">
                  <div className="card h-100 shadow">
                    <div className="card-body text-center">
                      <h5 className="card-title">{game.title}</h5>
                      <p className="card-text">{game.description}</p>
                      <a href="#" className="btn btn-primary">Jouer</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
