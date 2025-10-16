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
* LAST Modified: 9:36:56 16-10-2025
* DESCRIPTION: 
* register page
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: register
* // AR
* +==== END AsperHeader =================+
*/ 

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Lastname:", lastname);
    console.log("Firstname:", firstname);
    console.log("Email:", email);
    console.log("Password:", password);

    const user = {lastname, firstname, email};

    localStorage.setItem("auth", "true");
    localStorage.setItem("user", JSON.stringify(user));
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Inscription</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* lastName */}
          <div>
            <label className="block mb-1 font-medium">Nom</label>
            <input
              type="lastName"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          
          {/* firstName */}
          <div>
            <label className="block mb-1 font-medium">Prenom</label>
            <input
              type="firstName"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>

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
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}
