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
* FILE: OfferSection.tsx
* CREATION DATE: 14-10-2025
* LAST Modified: 13:22:31 15-10-2025
* DESCRIPTION: 
* OfferSection component
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: OfferSection
* // AR
* +==== END AsperHeader =================+
*/ 

import Link from "next/link";
import Button from "./Button";

interface OfferSectionProps {
    title: string;
    price: string;
    href: string;
    id?: string;
}

export default function OfferSection({ title, price, href, id }: OfferSectionProps) {
  return (
    <div
      id={id}
      className="border rounded-lg p-6 shadow text-center bg-white"
    >
      <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
      <p className="text-2xl font-bold mb-4 text-black">{price}</p>
        <Button href={href}>
          Voir les détails
        </Button>
    </div>
  );
}

