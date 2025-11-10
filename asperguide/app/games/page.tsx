'use client';

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

type Game = {
  title: string;
  description: string;
  category: string;
  link: string;
};

const games: Game[] = [
  { 
    title: '🧠 Approprié ou non ?', 
    description: 'Classez les actions selon qu’elles soient appropriées ou non.', 
    category: 'social', 
    link: '/games/sorting' 
  },
  { 
    title: '✅ Vrai ou Faux', 
    description: 'Répondez à des questions sociales simples pour tester vos réflexes.', 
    category: 'social', 
    link: '/games/true-false' 
  },
  { 
    title: '😊 Quiz des émotions', 
    description: 'Testez votre capacité à reconnaître les émotions dans différentes situations.', 
    category: 'social', 
    link: '/games/emotion-quiz' 
  },
  { 
    title: '🎚️ Modulation émotionnelle', 
    description: 'Ajustez l’intensité d’une émotion selon la situation proposée.', 
    category: 'social', 
    link: '/games/emotion-slider' 
  },
  { 
    title: '🧩 Puzzle des formes', 
    description: 'Améliore la logique et la reconnaissance des formes.', 
    category: 'logique', 
    link: '/games/puzzle' 
  },
  { 
    title: '🎨 Couleurs et sons', 
    description: 'Activité sensorielle pour développer la perception auditive et visuelle.', 
    category: 'sensoriel', 
    link: '/games/colors-sounds' 
  },
  { 
    title: '🔄 Labyrinthe', 
    description: 'Renforce la logique et la planification.', 
    category: 'logique', 
    link: '/games/labyrinthe' 
  },
  { 
    title: '🤝 Jeu du partage', 
    description: 'Apprendre les notions de partage et de coopération.', 
    category: 'social', 
    link: '/games/sharing' 
  },
];

export default function GamesPage() {
  const [filter, setFilter] = useState('all');

  const filteredGames = filter === 'all' ? games : games.filter(game => game.category === filter);

  return (
    <main className="p-5 bg-light min-vh-100">
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: 'teal', fontWeight: 'bold' }}>
            🎲 Espace Jeux - Asperboard
          </h2>
          <p className="text-center mb-5">Apprenez à reconnaître les émotions et comportements à travers ces mini-jeux !</p>

          {/* Filtrage par catégorie */}
          <div className="text-center mb-5 flex flex-wrap justify-center gap-3">
            {['all', 'logique', 'social', 'sensoriel'].map((cat) => (
              <button
                key={cat}
                className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setFilter(cat)}
              >
                {cat === 'all' ? 'Tous' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Liste des jeux */}
          <div className="row g-4 justify-content-center">
            {filteredGames.map((game, index) => (
              <div key={index} className="col-md-3">
                <div className="card p-4 h-100 shadow" style={{ backgroundColor: 'gainsboro', borderRadius: '16px' }}>
                  <div className="card-body text-center">
                    <h5 className="card-title" style={{ color: 'teal', fontWeight: 'bold' }}>
                      {game.title}
                    </h5>
                    <p className="card-text">{game.description}</p>
                    <a href={game.link} className="btn btn-primary">
                      Jouer
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <a href="/" className="btn btn-secondary" style={{ backgroundColor: 'dimgray', border: 'none' }}>
              ⬅ Retour à l’accueil
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}