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
* CREATION DATE: 13-10-2025
* LAST Modified: 0:14:47 16-10-2025
* DESCRIPTION: 
* login page
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: login
* // AR
* +==== END AsperHeader =================+
*/

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    const user = {email, password};

    localStorage.setItem("auth", "true");
    localStorage.setItem("user", JSON.stringify(user));
    console.log("localstorage update a true");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Connexion</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="exemple@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Mot de passe</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded font-semibold"
          >
            Se connecter
          </button>
        </form>

        {/* Divider */}
        <div className="mt-6 flex items-center justify-center gap-2 text-gray-400">
          <span className="h-px bg-gray-700 w-1/4"></span>
          <span>ou</span>
          <span className="h-px bg-gray-700 w-1/4"></span>
        </div>

        {/* Register Button */}
        <div className="mt-6 text-center">
          <p className="mb-2">Pas encore de compte ?</p>
          <Link
            href="/register"
            className="w-full inline-block bg-gray-700 hover:bg-gray-600 transition px-4 py-2 rounded font-semibold"
          >
            Créer un compte
          </Link>
        </div>
      </div>
    </div>
  );
}
