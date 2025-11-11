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
    <main className="flex justify-center items-center p-5 min-h-[70vh]">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h3 className="text-center text-2xl font-semibold mb-6">Profil</h3>

        <ul className="divide-y divide-gray-200 mb-6">
          <li className="py-2">
            <span className="font-semibold">Nom :</span> {user.name}
          </li>
          <li className="py-2">
            <span className="font-semibold">Email :</span> {user.email}
          </li>
        </ul>

        <button
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
          onClick={handleLogout}
        >
          Se déconnecter
        </button>
      </div>
    </main>
  );
}
