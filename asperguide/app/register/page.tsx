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
* LAST Modified: 16:29:42 22-11-2025
* DESCRIPTION: 
* register page
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: this page is for create an account
* // AR
* +==== END AsperHeader =================+
*/ 

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Inscription simulée
    router.push('/home');
  };

  return (
    <section className="flex justify-center items-center min-h-[70vh] p-5">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h3 className="text-center text-2xl font-semibold mb-6">Créer un compte</h3>

        <form onSubmit={handleRegister} className="space-y-4" aria-label="Formulaire d'inscription">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">Nom complet</label>
            <input
              type="text"
              id="name"
              aria-label="Nom complet"
              placeholder="Votre nom complet"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              aria-label="Adresse email"
              placeholder="Votre email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-medium mb-1">Mot de passe</label>
            <input
              type="password"
              id="password"
              aria-label="Mot de passe"
              placeholder="Votre mot de passe"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block font-medium mb-1">Confirmer le mot de passe</label>
            <input
              type="password"
              id="confirm-password"
              aria-label="Confirmer le mot de passe"
              placeholder="Confirmer le mot de passe"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            S'inscrire
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Vous avez déjà un compte ? <a href="/login" className="text-primary font-medium hover:underline">Connexion</a>
        </p>
      </div>
    </section>
  );
}
