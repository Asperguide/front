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
* FILE: Navbar.tsx
* CREATION DATE: 13-10-2025
* LAST Modified: 16:11:42 14-10-2025
* DESCRIPTION: 
* navbar component
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: navbar
* // AR
* +==== END AsperHeader =================+
*/

"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full border-b border-black-200 px-8 py-5 bg-black">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold">Asperguide</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-8 text-white-700 font-medium">
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/dashboard">Tableau de bord</Link>
        </li>
        <li>
          <Link href="/games">Jeux</Link>
        </li>
        <li>
          <Link href="/price">Prix</Link>
        </li>
        <li>
          <Link href="/profil">Profile</Link>
        </li>
        <li>
          <Link href="/guide">Guide</Link>
        </li>
        <li>
          <Link href="/rewards">Récompense</Link>
        </li>
      </ul>

      {/* Actions button rigth */}
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
        >
          Connexion
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
