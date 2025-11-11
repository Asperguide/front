'use client';
import { useState, useEffect, useRef } from 'react';
import { Eye, Type, Contrast, Palette } from 'lucide-react';

export default function AccessibilityButton() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen(!open);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Bouton flottant */}
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        onKeyDown={handleKeyDown}
        className="bg-primary text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
        aria-label="Ouvrir le menu d’accessibilité"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <Eye className="w-6 h-6" />
      </button>

      {/* Menu déroulant */}
      {open && (
        <div
          ref={menuRef}
          className="absolute bottom-full mb-3 right-0 bg-white rounded-xl shadow-xl w-64 overflow-hidden border border-gray-100 animate-fade-slide-up"
          role="menu"
          aria-label="Options d’accessibilité"
        >
          <ul className="flex flex-col text-gray-700 divide-y divide-gray-100">
            <li
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition"
              role="menuitem"
              tabIndex={0}
              aria-label="Activer le filtre daltonien"
            >
              <Palette className="w-5 h-5 text-primary" />
              <span>Activer le filtre daltonien</span>
            </li>
            <li
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition"
              role="menuitem"
              tabIndex={0}
              aria-label="Augmenter le contraste"
            >
              <Contrast className="w-5 h-5 text-primary" />
              <span>Augmenter le contraste</span>
            </li>
            <li
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition"
              role="menuitem"
              tabIndex={0}
              aria-label="Augmenter la taille du texte"
            >
              <Type className="w-5 h-5 text-primary" />
              <span>Texte plus grand</span>
            </li>
          </ul>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide-up {
          animation: fade-slide-up 0.25s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
