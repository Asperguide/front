'use client';

import { useState } from 'react';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import Link from 'next/link';
>>>>>>> dev

type Game = {
  title: string;
  description: string;
  category: string;
  link: string;
};

const games: Game[] = [
<<<<<<< HEAD
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
=======
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
    link: '/games/emotion-quiz',
  },
  {
    title: 'Vrai ou Faux',
    description: 'Détermine si les comportements sont appropriés.',
    category: 'social',
    link: '/games/true-false',
>>>>>>> dev
  },
];

export default function GamesPage() {
  const [filter, setFilter] = useState('all');

  const filteredGames = filter === 'all' ? games : games.filter(game => game.category === filter);

  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> dev
              >
                {cat === 'all' ? 'Tous' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
<<<<<<< HEAD
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
=======
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
>>>>>>> dev
          </div>
        </div>
      </section>
    </main>
  );
}