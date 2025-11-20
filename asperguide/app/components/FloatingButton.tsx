'use client';
import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import { createPortal } from 'react-dom';

// Les matrices pour chaque type de daltonisme
const baseFilters = {
  normal: [
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
  ],
  deuteranopia: [
    [0.8, 0.2, 0, 0, 0],
    [0.258, 0.742, 0, 0, 0],
    [0, 0.142, 0.858, 0, 0],
    [0, 0, 0, 1, 0],
  ],
  protanopia: [
    [0.567, 0.433, 0, 0, 0],
    [0.558, 0.442, 0, 0, 0],
    [0, 0.242, 0.758, 0, 0],
    [0, 0, 0, 1, 0],
  ],
  tritanopia: [
    [1, 0, 0, 0, 0],
    [0, 0.9, 0.1, 0, 0],
    [0, 0.5, 0.5, 0, 0],
    [0, 0, 0, 1, 0],
  ],
  monochromacy: [
    [0.33, 0.33, 0.33, 0, 0],
    [0.33, 0.33, 0.33, 0, 0],
    [0.33, 0.33, 0.33, 0, 0],
    [0, 0, 0, 1, 0],
  ],
};

// Matrice identité
const identityMatrix = [
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
];

export default function AccessibilityButton() {
  const [open, setOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<keyof typeof baseFilters>('normal');
  const [intensity, setIntensity] = useState(100);
  const [transparency, setTransparency] = useState(100);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Injection des filtres SVG
  useEffect(() => {
    if (!document.getElementById('daltonism-svg')) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.id = 'daltonism-svg';
      svg.style.position = 'absolute';
      svg.style.width = '0';
      svg.style.height = '0';
      svg.style.overflow = 'hidden';

      (Object.keys(baseFilters) as (keyof typeof baseFilters)[]).forEach(name => {
        const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
        filter.id = `filter-${name}`;

        const feColorMatrix = document.createElementNS('http://www.w3.org/2000/svg', 'feColorMatrix');
        feColorMatrix.setAttribute('type', 'matrix');
        feColorMatrix.setAttribute('values', baseFilters[name].flat().join(' '));

        filter.appendChild(feColorMatrix);
        svg.appendChild(filter);
      });

      document.body.appendChild(svg);
    }

    applyMatrix();
  }, [activeFilter, intensity, transparency]);

  const applyMatrix = () => {
    const base = baseFilters[activeFilter];
    const i = intensity / 100;
    const t = transparency / 100;

    const finalMatrix = base.map((row, r) =>
      row.map((val, c) => (c === 3 ? val * t : val * i + identityMatrix[r][c] * (1 - i)))
    );

    const filterElement = document.querySelector(`#filter-${activeFilter} feColorMatrix`);
    if (filterElement) filterElement.setAttribute('values', finalMatrix.flat().join(' '));

    document.body.style.filter = `url(#filter-${activeFilter})`;
  };

  const content = (
    <>
      <style jsx global>{`
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
      
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 999999
      }}>
        {/* Floating button */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-blue-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
          aria-label="Filtre daltonien"
        >
          <Eye className="w-7 h-7" />
        </button>

        {/* DaltonismFilter flottant */}
        {/* {open && (
          <div className="absolute bottom-full right-0 mb-4 w-80 p-4 bg-white border rounded-xl shadow-2xl animate-fade-slide-up">
            <p className="font-semibold mb-2">Filtres Daltonisme</p>

            <div className="flex flex-wrap gap-2 mb-2">
              {(Object.keys(baseFilters) as (keyof typeof baseFilters)[]).map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3 py-1 rounded cursor-pointer transition-colors ${
                    activeFilter === f ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>

            <div className="mb-2">
              <label className="text-sm font-medium">Intensité: {intensity}%</label>
              <input
                type="range"
                min="0"
                max="100"
                value={intensity}
                onChange={e => setIntensity(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="mb-2">
              <label className="text-sm font-medium">Transparence: {transparency}%</label>
              <input
                type="range"
                min="0"
                max="100"
                value={transparency}
                onChange={e => setTransparency(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <p className="text-xs text-gray-500">Filtre actif: {activeFilter}</p>
          </div>
        )} */}
      </div>
    </>
  );

  if (!mounted) return null;

  return createPortal(content, document.body);
}