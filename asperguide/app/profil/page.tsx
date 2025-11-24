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
* LAST Modified: 16:30:7 22-11-2025
* DESCRIPTION: 
* profil page
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: this page is for diapsly and edit user information
* // AR
* +==== END AsperHeader =================+
*/ 

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      router.push('/login');
    } else {
      setUser({
        name: 'Jean Dupont',
        email: 'jean.dupont@example.com',
      });
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/');
  };

  if (!user) return null;

  return (
    <main
      className="flex justify-center items-center p-5 min-h-[70vh]"
      aria-label="Page profil utilisateur"
    >
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h3 className="text-center text-2xl font-semibold mb-6">Profil</h3>

        <dl className="divide-y divide-gray-200 mb-6">
          <div className="py-2 flex justify-between">
            <dt className="font-semibold">Nom :</dt>
            <dd>{user.name}</dd>
          </div>
          <div className="py-2 flex justify-between">
            <dt className="font-semibold">Email :</dt>
            <dd>{user.email}</dd>
          </div>
        </dl>

        <button
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
          onClick={handleLogout}
          aria-label="Se déconnecter"
        >
          Se déconnecter
        </button>
      </div>
    </main>
  );
}
