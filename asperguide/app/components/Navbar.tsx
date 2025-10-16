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
* LAST Modified: 0:6:46 16-10-2025
* DESCRIPTION: 
* navbar component
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: navbar
* // AR
* +==== END AsperHeader =================+
*/

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Vérifier l'état d'authentification
    const auth = localStorage.getItem("auth");
    setIsAuthenticated(auth === "true");

    // Écoute les changements si besoin (login/logout dans un autre onglet)
    const handleStorageChange = () => {
      const authUpdated = localStorage.getItem("auth");
      console.log("check localstorage:", authUpdated);
      setIsAuthenticated(authUpdated === "true");
    };
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Si on ne sait pas encore si l'utilisateur est connecté, ne rien afficher
  if (isAuthenticated === null) return null;

  // Bouton "Connexion" sur ces pages
  const showLoginButton = ["/", "/login", "/register"].includes(pathname || "");

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
        {(!isAuthenticated || showLoginButton) ? (
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-black transition"
          >
            Connexion
          </Link>
        ) : (
          <Link
            href="/profil"
            className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition"
          >
            Profil
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
