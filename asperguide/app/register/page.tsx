'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // l'inscription simulée
    router.push('/home');
  };

  return (
    <section
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '70vh' }}
    >
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Créer un compte</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nom complet</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Votre nom complet"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Mot de passe</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label">Confirmer le mot de passe</label>
            <input
              type="password"
              className="form-control"
              id="confirm-password"
              placeholder="Confirmer le mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="button" className="btn btn-primary" onClick={handleRegister}>
              S'inscrire
            </button>
          </div>
        </form>

        <p className="text-center mt-3 mb-0">
          Vous avez déjà un compte ? <a href="/login">Connexion</a>
        </p>
      </div>
    </section>
  );
}
