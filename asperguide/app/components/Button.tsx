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
* FILE: Button.tsx
* CREATION DATE: 15-10-2025
* LAST Modified: 13:20:7 15-10-2025
* DESCRIPTION: 
* Button component
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: button
* // AR
* +==== END AsperHeader =================+
*/ 

import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
}

export default function Button({ children, href, className = "", ...props }: ButtonProps) {
  const baseClasses =
    "bg-blue-500 text-white px-4 py-2 rounded transition duration-200 hover:bg-blue-600 hover:scale-105 cursor-pointer";

  if (href) {
    return (
      <Link href={href}>
        <button className={`${baseClasses} ${className}`} {...props}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
