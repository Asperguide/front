'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  let navLinks = [];
  if (
    pathname?.startsWith('/home') ||
    pathname?.startsWith('/games') ||
    pathname?.startsWith('/guide') ||
    pathname?.startsWith('/dashboard') ||
    pathname?.startsWith('/rewards')
  ) {
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
    <>
      <nav className="navbar navbar-dark bg-dark py-2">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* 🟦 Logo à gauche */}
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

          {/* 🟩 Liens centrés sur desktop */}
          <div className="d-none d-lg-flex flex-grow-1 justify-content-center">
            <ul className="navbar-nav flex-row gap-4 mb-0">
              {navLinks.map((link) => (
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
          </div>

          {/* 🟧 Bouton burger visible seulement sur mobile */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* 🟧 Profil / Connexion à droite */}
          <div className="d-none d-lg-block">
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
        </div>

        {/* 🟩 Menu déroulant (mobile seulement) */}
        <div className={`collapse-custom ${open ? 'open' : ''} d-lg-none`}>
          <ul className="navbar-nav mb-2 ps-3">
            {navLinks.map((link) => (
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

          <div className="d-flex justify-content-end pe-3 pb-3">
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
        </div>
      </nav>

      <style jsx>{`
        .collapse-custom {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          background-color: #212529;
        }
        .collapse-custom.open {
          max-height: 500px;
        }
        @media (min-width: 992px) {
          .collapse-custom {
            display: none !important;
          }
        }
        .nav-link {
          color: rgba(255, 255, 255, 0.85);
          transition: color 0.2s ease;
        }
        .nav-link:hover,
        .nav-link.active {
          color: #fff;
        }
      `}</style>
    </>
  );
}
