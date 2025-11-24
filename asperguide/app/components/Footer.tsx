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
* FILE: Footer.tsx
* CREATION DATE: 22-11-2025
* LAST Modified: 16:36:1 22-11-2025
* DESCRIPTION: 
* footer component
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: this is the component for the footer
* // AR
* +==== END AsperHeader =================+
*/ 

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="bg-gray-900 text-white text-center py-6 mt-10"
      role="contentinfo"
      aria-label="Pied de page"
    >
      <div className="max-w-6xl mx-auto px-4">
        <p className="mb-2">&copy; 2025 AsperGuide. Tous droits réservés.</p>

        <p className="space-x-4">
          <Link
            href="/politique"
            className="text-gray-300 hover:text-white transition"
            aria-label="Voir la politique de confidentialité"
          >
            Politique de confidentialité
          </Link>

          <Link
            href="/contact"
            className="text-gray-300 hover:text-white transition"
            aria-label="Aller à la page contact"
          >
            Contact
          </Link>
        </p>
      </div>
    </footer>
  );
}