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
* LAST Modified: 16:31:28 22-11-2025
* DESCRIPTION: 
* login page
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: this page is for connection to user account
* // AR
* +==== END AsperHeader =================+
*/ 

'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simuler la connexion
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/home');
  };

  return (
    <section
      className="flex justify-center items-center min-h-[70vh] px-4"
      aria-label="Page de connexion"
    >
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h3 className="text-2xl font-semibold text-center mb-6">Connexion</h3>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-4"
          aria-label="Formulaire de connexion"
        >
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              placeholder="Votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              aria-required="true"
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition cursor-pointer"
            aria-label="Se connecter au compte"
          >
            Se connecter
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Pas encore de compte ?{' '}
          <Link href="/register" className="text-primary font-medium hover:underline" aria-label="Aller à la page d'inscription">
            Inscrivez-vous
          </Link>
        </p>
      </div>
    </section>
  );
}
