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
* FILE: layout.tsx
* CREATION DATE: 22-11-2025
* LAST Modified: 16:28:18 22-11-2025
* DESCRIPTION: 
* layout
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: the layout of the project
* // AR
* +==== END AsperHeader =================+
*/ 

import type { Metadata } from 'next';
import './globals.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

export const metadata: Metadata = {
  title: 'AsperGuide',
  description: 'Plateforme pour accompagner les enfants et parents concernés par le syndrome d’Asperger.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning={true}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute top-0 left-0 bg-primary text-white p-2 z-50">
          Aller au contenu
        </a>

        <header>
          <Navbar aria-label="Navigation principale" />
        </header>

        <main id="main-content" className="p-5">
          {children}
        </main>

        <footer aria-label="Pied de page">
          <Footer />
        </footer>

        <FloatingButton aria-label="Bouton flottant d'action" />
      </body>
    </html>
  );
}