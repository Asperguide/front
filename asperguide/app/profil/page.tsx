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
* LAST Modified: 10:11:57 16-10-2025
* DESCRIPTION: 
* profil page
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: profil
* // AR
* +==== END AsperHeader =================+
*/

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    const stored = localStorage.getItem("user");
    if (!auth || auth !== "true" || !stored) {
      router.push("/login");
      return;
    }

    try {
      const parsed: User = JSON.parse(stored);
      setUser(parsed);
      setFormData(parsed);
    } catch {
      localStorage.removeItem("auth");
      localStorage.removeItem("user");
      router.push("/login");
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      alert("Merci de remplir au moins le prénom, le nom et l'email.");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));
    localStorage.setItem("auth", "true");
    setUser(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    if (user) setFormData(user);
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (!user) return null;

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-900 py-12">
      <div className="w-full">
        <div className="flex items-center justify-between mb-8 px-6">
          <h1 className="text-3xl font-semibold">Mon profil</h1>
          <div className="flex gap-3">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Modifier
              </button>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition"
                >
                  Sauvegarder
                </button>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition"
                >
                  Annuler
                </button>
              </>
            )}
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-md bg-red-500 text-white font-medium hover:bg-red-600 transition"
            >
              Déconnexion
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {/* Left column */}
          <div className="col-span-1 bg-white rounded-lg shadow p-6 h-full">
            <h2 className="text-lg font-medium mb-2">À propos</h2>
            <p className="text-sm text-gray-600 mb-4">Information de compte et sécurité.</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500">Prénom</p>
                <p className="font-medium">{user.firstName || <span className="text-gray-400">Non renseigné</span>}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Nom</p>
                <p className="font-medium">{user.lastName || <span className="text-gray-400">Non renseigné</span>}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="font-medium">{user.email || <span className="text-gray-400">Non renseigné</span>}</p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            {/* Personal info */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium mb-4">Infos personnelles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                  <input
                    name="firstName"
                    value={formData.firstName || ""}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="Prénom"
                    className={`w-full px-4 py-2 rounded-md border ${
                      isEditing ? "border-gray-300" : "border-transparent"
                    } bg-gray-50 focus:outline-none`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input
                    name="lastName"
                    value={formData.lastName || ""}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="Nom"
                    className={`w-full px-4 py-2 rounded-md border ${
                      isEditing ? "border-gray-300" : "border-transparent"
                    } bg-gray-50 focus:outline-none`}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="exemple@mail.com"
                    className={`w-full px-4 py-2 rounded-md border ${
                      isEditing ? "border-gray-300" : "border-transparent"
                    } bg-gray-50 focus:outline-none`}
                  />
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium mb-4">Sécurité</h2>
              <div className="grid grid-cols-1 gap-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
                  <div className="relative w-full">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password || ""}
                      onChange={handleChange}
                      readOnly={!isEditing}
                      placeholder={isEditing ? "Entrez un nouveau mot de passe" : "••••••••"}
                      className={`w-full px-4 py-2 rounded-md border ${
                        isEditing ? "border-gray-300" : "border-transparent"
                      } bg-gray-50 focus:outline-none`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-2 top-2 text-sm font-medium text-gray-600"
                    >
                      {showPassword ? "Masquer" : "Afficher"}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {isEditing
                      ? "Changez votre mot de passe si vous voulez le mettre à jour."
                      : "Vous pouvez afficher ou masquer votre mot de passe actuel."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
