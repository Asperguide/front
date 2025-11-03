'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  let navLinks = [];
  if (pathname.startsWith('/home') || pathname.startsWith('/games') || pathname.startsWith('/guide') || pathname.startsWith('/dashboard') || pathname.startsWith('/rewards')) {
    navLinks = [
      { label: 'Home', href: '/home' },
      { label: 'Game', href: '/games' },
      { label: 'Guide', href: '/guide' },
      { label: 'Tableau de bord', href: '/dashboard' },
      { label: 'Récompenses', href: '/rewards' },
    ];
  } else {
    navLinks = [
      { label: 'Accueil', href: '/' },
      { label: 'Nos offres', href: '/offres' },
      { label: 'Contact', href: '/contact' },
    ];
  }

  const logoLink = isLoggedIn ? '/home' : '/';

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <Link className="navbar-brand d-flex align-items-center" href={logoLink}>
          <Image
            src="/Asperguide_logo_3.png"
            width={30}
            height={30}
            alt="Logo AsperGuide"
            className="me-2"
          />
          <span>AsperGuide</span>
        </Link>

        <ul className="navbar-nav flex-row gap-3">
          {navLinks.map(link => (
            <li key={link.href} className="nav-item">
              <Link
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bouton Connexion ou Profil */}
        {isLoggedIn ? (
          <Link href="/profil" className="btn btn-outline-light">
            Profil
          </Link>
        ) : (
          <Link href="/login" className="btn btn-outline-light">
            Connexion
          </Link>
        )}
      </div>
    </nav>
  );
}
