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
    <>
      <main className="p-5 d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
        <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
          <h3 className="text-center mb-4">Profil</h3>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item"><strong>Nom :</strong> {user.name}</li>
            <li className="list-group-item"><strong>Email :</strong> {user.email}</li>
          </ul>
          <div className="d-grid">
            <button className="btn btn-danger" onClick={handleLogout}>Se déconnecter</button>
          </div>
        </div>
      </main>
    </>
  );
}
