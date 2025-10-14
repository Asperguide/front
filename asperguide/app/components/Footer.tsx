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
* CREATION DATE: 14-10-2025
* LAST Modified: 9:48:6 14-10-2025
* DESCRIPTION: 
* Footer component
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: footer
* // AR
* +==== END AsperHeader =================+
*/ 

"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-300 py-6 px-8 text-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo / Nom */}
        <div className="text-lg font-bold">
          Asperguide
        </div>

        {/* Liens */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm">
          <li>
            <Link href="/about">À propos</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Asperguide. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
