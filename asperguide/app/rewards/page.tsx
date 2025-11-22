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
* LAST Modified: 16:28:51 22-11-2025
* DESCRIPTION: 
* rewards page
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: this page is for get and display rewards of games
* // AR
* +==== END AsperHeader =================+
*/ 

'use client';

import { useState } from 'react';

export default function RewardsPage() {
  const [shopOpen, setShopOpen] = useState(false);
  const [credits, setCredits] = useState(120);

  return (
    <main className="p-5">
      <section className="py-5" aria-labelledby="rewards-title">
        <div className="max-w-6xl mx-auto">

          <h2 id="rewards-title" className="text-center text-2xl font-semibold mb-4">
            Récompenses et Badges
          </h2>
          <p className="text-center mb-8 text-gray-600">
            Plus vous utilisez AsperGuide (jeux, vidéos, conseils), plus vous débloquez de récompenses !
          </p>

          {/* Progression */}
          <div className="mb-8 max-w-md mx-auto">
            <h5 className="text-center mb-2 font-medium">Progression générale : 45%</h5>
            <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
              <div
                className="bg-primary h-6 text-white flex items-center justify-center font-medium"
                style={{ width: '45%' }}
              >
                45%
              </div>
            </div>
          </div>

          {/* Liste des badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
            <div className="bg-white shadow rounded-lg p-4">
              <h5 className="text-lg font-semibold mb-2">Badge Débutant</h5>
              <p className="text-gray-600 mb-2">Inscription et première connexion au site.</p>
              <span className="inline-block bg-green-500 text-white text-sm px-3 py-1 rounded-full">Débloqué</span>
            </div>

            <div className="bg-white shadow rounded-lg p-4">
              <h5 className="text-lg font-semibold mb-2">Badge Joueur</h5>
              <p className="text-gray-600 mb-2">Avoir terminé 5 jeux différents.</p>
              <span className="inline-block bg-gray-400 text-white text-sm px-3 py-1 rounded-full">Bloqué</span>
            </div>

            <div className="bg-white shadow rounded-lg p-4">
              <h5 className="text-lg font-semibold mb-2">Badge Lecteur</h5>
              <p className="text-gray-600 mb-2">Avoir consulté 10 conseils du guide.</p>
              <span className="inline-block bg-gray-400 text-white text-sm px-3 py-1 rounded-full">Bloqué</span>
            </div>

            <div className="bg-white shadow rounded-lg p-4">
              <h5 className="text-lg font-semibold mb-2">Badge Expert</h5>
              <p className="text-gray-600 mb-2">Utilisation complète de toutes les fonctionnalités.</p>
              <span className="inline-block bg-gray-400 text-white text-sm px-3 py-1 rounded-full">Bloqué</span>
            </div>
          </div>

          {/* --- Grand rectangle de placement (Inventaire) --- */}
          <div className="relative max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-6 mt-16 h-[500px] border border-gray-200">

            {/* Crédit + bouton shop en haut à droite */}
            <div className="absolute top-4 right-4 flex items-center gap-3">

              {/* Crédit */}
              <div className="bg-yellow-400 text-black px-4 py-1 rounded-full font-semibold shadow-md">
                {credits} 💰
              </div>

              {/* Bouton Shop */}
              <button
                onClick={() => setShopOpen(!shopOpen)}
                className="bg-primary text-white px-4 py-1 rounded-lg shadow font-medium hover:opacity-80 transition"
              >
                Shop
              </button>
            </div>

            <h3 className="text-xl font-semibold mb-3">Espace d’inventaire</h3>
            <p className="text-gray-600 mb-4">
              Placez ici vos items gagnés.
            </p>

            {/* Zone de placement */}
            <div
              className="w-full h-[380px] bg-gray-100 rounded-xl border border-dashed border-gray-400"
            >
              {/* Ici seront placés les items (drag + drop plus tard) */}
            </div>

            {/* Menu shop flottant */}
            {shopOpen && (
              <div className="absolute top-16 right-4 w-52 bg-white shadow-lg rounded-lg border p-4 z-20">
                <h4 className="font-semibold mb-2">Boutique</h4>

                <button className="w-full bg-gray-100 hover:bg-gray-200 transition px-3 py-2 rounded text-left">
                  voiture — 80 crédits
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 transition px-3 py-2 rounded text-left mt-2">
                  chapeau — 50 crédits
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 transition px-3 py-2 rounded text-left mt-2">
                  Item surprise — 30 crédits
                </button>
              </div>
            )}

          </div>
        </div>
      </section>
    </main>
  );
}
