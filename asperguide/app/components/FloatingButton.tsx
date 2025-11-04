'use client';
import { useState, useEffect, useRef } from 'react';

export default function FloatingButton() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50" ref={buttonRef}>
      {/* Bouton rond avec important pour forcer le border-radius */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-primary text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition"
        style={{ borderRadius: '9999px', padding: 0, minWidth: '56px', minHeight: '56px' }}
      >
        ☰
      </button>

      {/* Menu déroulant absolument positionné */}
      {open && (
        <div className="absolute bottom-full mb-2 right-0 bg-white rounded-lg shadow-lg w-48 text-black">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}
