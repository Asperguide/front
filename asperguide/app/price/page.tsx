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
* LAST Modified: 13:22:59 15-10-2025
* DESCRIPTION: 
* price page
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: price
* // AR
* +==== END AsperHeader =================+
*/

import Button from "../components/Button";

export default function PricePage() {
  return (
    <div className="w-full flex flex-col">
      {/* Offre Basic */}
      <section
        id="basic"
        className="h-screen flex flex-col items-center justify-center bg-gray-100 p-8"
      >
        <div className="border rounded-lg p-8 shadow bg-white text-black text-center max-w-md w-full">
          <h3 className="text-3xl font-bold mb-4">Offre Basic</h3>
          <p className="text-2xl font-semibold mb-6">10€ / mois</p>
          <ul className="text-left mb-6 space-y-2">
            <li>✅ Fonctionnalité 1</li>
            <li>✅ Fonctionnalité 2</li>
            <li>✅ Fonctionnalité 3</li>
          </ul>
         <Button>
            Choisir cette offre
          </Button>
        </div>
      </section>

      {/* Offre Standard */}
      <section 
        id="standard"
        className="h-screen flex flex-col items-center justify-center bg-gray-200 p-8"
      >
        <div className="border rounded-lg p-8 shadow bg-white text-black text-center max-w-md w-full">
          <h3 className="text-3xl font-bold mb-4">Offre Standard</h3>
          <p className="text-2xl font-semibold mb-6">20€ / mois</p>
          <ul className="text-left mb-6 space-y-2">
            <li>✅ Fonctionnalité 1</li>
            <li>✅ Fonctionnalité 2</li>
            <li>✅ Fonctionnalité 3</li>
            <li>✅ Fonctionnalité 4</li>
          </ul>
          <Button>
            Choisir cette offre
          </Button>
        </div>
      </section>

      {/* Offre Premium */}
      <section
        id="premium"
        className="h-screen flex flex-col items-center justify-center bg-gray-300 p-8"
      >
        <div className="border rounded-lg p-8 shadow bg-white text-black text-center max-w-md w-full">
          <h3 className="text-3xl font-bold mb-4">Offre Premium</h3>
          <p className="text-2xl font-semibold mb-6">30€ / mois</p>
          <ul className="text-left mb-6 space-y-2">
            <li>✅ Fonctionnalité 1</li>
            <li>✅ Fonctionnalité 2</li>
            <li>✅ Fonctionnalité 3</li>
            <li>✅ Fonctionnalité 4</li>
            <li>✅ Fonctionnalité 5</li>
          </ul>
          <Button>
            Choisir cette offre
          </Button>
        </div>
      </section>
    </div>
  );
}
