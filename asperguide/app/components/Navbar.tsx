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
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href={logoLink} className="flex items-center gap-2">
          <Image
            src="/Asperguide_logo_3.png"
            width={30}
            height={30}
            alt="Logo AsperGuide"
          />
          <span className="font-semibold">AsperGuide</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                pathname === link.href ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop profile*/}
        <div className="hidden lg:flex items-center gap-4">
          {isLoggedIn ? (
            <Link
              href="/profil"
              className="px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-900 dark:border-gray-900 dark:hover:bg-gray-900 dark:hover:text-white transition"
            >
              Profil
            </Link>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-900 dark:border-gray-900 dark:hover:bg-gray-900 dark:hover:text-white transition"
            >
              Connexion
            </Link>
          )}
        </div>

        {/* Burger button */}
        <button
          className="lg:hidden flex flex-col gap-1"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden bg-gray-900 transition-all duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-3 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block ${
                pathname === link.href ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-3 flex flex-col gap-2">
            {isLoggedIn ? (
              <Link
                href="/profil"
                className="px-4 py-2 border border-white rounded inline-block hover:bg-white hover:text-gray-900 dark:border-gray-900 dark:hover:bg-gray-900 dark:hover:text-white"
              >
                Profil
              </Link>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 border border-white rounded inline-block hover:bg-white hover:text-gray-900 dark:border-gray-900 dark:hover:bg-gray-900 dark:hover:text-white"
              >
                Connexion
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}