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
* CREATION DATE: 22-11-2025
* LAST Modified: 16:32:36 22-11-2025
* DESCRIPTION: 
* home page (not connected)
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: present and explain the web site
* // AR
* +==== END AsperHeader =================+
*/ 

'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState<boolean[]>([false, false, false, false]);
  const refs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.findIndex((r) => r.current === entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisible((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Bienvenue sur AsperGuide</h1>
          <p className="text-lg mt-4">
            Votre guide pour accompagner les enfants et adolescents atteints du syndrome d&apos;Asperger.
          </p>
          <Link href="/register" className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-lg mt-6">
            Commencer
          </Link>
        </div>
      </section>

      {/* Section 4 colonnes */}
      <section className="py-40">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <Image src="/left_back_people.png" width={150} height={150} alt="Adulte adossé" className="mx-auto mb-4" />
            <p className="font-semibold">Pourquoi mon enfant a-t-il des difficultés à s'intégrer à l'école ?</p>
          </div>

          <div>
            <Image src="/right_back_people.png" width={150} height={150} alt="Enfant adossé" className="mx-auto mb-4" />
            <p className="font-semibold">Pourquoi ai-je du mal à me faire des amis à l'école ?</p>
          </div>

          <div>
            <Image src="/old_people_diag.png" width={150} height={150} alt="Adulte diagnostique" className="mx-auto mb-4" />
            <p className="font-semibold">Un parcours clair vers le diagnostic.</p>
          </div>

          <div>
            <Image src="/young_people_diag.png" width={150} height={150} alt="Enfant diagnostique" className="mx-auto mb-4" />
            <p className="font-semibold">Comprendre ses différences pour mieux avancer.</p>
          </div>
        </div>
      </section>

      {/* Section rectangles pleine largeur */}
      <section className="py-16 bg-gray-100" aria-labelledby="features-title">
        <div className="max-w-4xl mx-auto px-4 flex flex-col gap-8">
          <h2 id="features-title" className="sr-only">Fonctionnalités principales</h2>
          {[
            { title: "Outil éducatif", desc: "Des ressources adaptées pour accompagner l'enfant." },
            { title: "Suivi personnalisé", desc: "Un parcours clair et structuré." },
            { title: "Guides experts", desc: "Des explications simples et accessibles." },
            { title: "Accompagnement familial", desc: "Des conseils pour le quotidien." },
          ].map((item, index) => (
            <div
              key={index}
              ref={refs[index]}
              role="region"
              aria-label={`${item.title}: ${item.desc}`}
              className={`bg-primary text-white p-10 rounded-lg shadow-xl w-full text-center transform transition-all duration-700 ease-out
                ${visible[index] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
            >
              <h5 className="font-bold text-2xl mb-2">{item.title}</h5>
              <p className="text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
