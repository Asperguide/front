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
* FILE: HeroSection.tsx
* CREATION DATE: 14-10-2025
* LAST Modified: 17:29:12 14-10-2025
* DESCRIPTION: 
* HeroSection component
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: HeroSection
* // AR
* +==== END AsperHeader =================+
*/ 

import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="h-screen w-full flex flex-col md:flex-row items-center justify-center px-8 bg-gray-100">
        {/* Image à gauche */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Image
            src="/placeholder.jpg" // Mets ton image dans /public/
            alt="Image d'accueil"
            width={400}
            height={400}
            className="rounded-lg shadow"
            />
        </div>

        {/* Texte à droite */}
        <div className="md:w-1/2 text-center md:text-left md:pl-12 text-black">
            <h1 className="text-4xl font-bold mb-4">Bienvenue sur notre site</h1>
            <p className="text-lg">
            Découvrez nos solutions adaptées à vos besoins.
            </p>
        </div>
        </section>
    );
}
