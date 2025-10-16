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
* FILE: OffersSection.tsx
* CREATION DATE: 14-10-2025
* LAST Modified: 17:33:20 14-10-2025
* DESCRIPTION: 
* OffersSection component
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: OffersSection
* // AR
* +==== END AsperHeader =================+
*/ 
import OfferSection from "./OfferSection";

export default function OffersSection() {
    return (
        <section className="min-h-screen w-full bg-gray-300 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Nos offres</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <OfferSection title="Offre Basic" price="10€" href="/price#basic" />
            <OfferSection title="Offre Standard" price="20€" href="/price#standard" />
            <OfferSection title="Offre Premium" price="30€" href="/price#premium" />
        </div>
        </section>
    );
}
