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
* LAST Modified: 16:34:3 22-11-2025
* DESCRIPTION: 
* dashboard page
* /STOP
* COPYRIGHT: (c) Asperguide
* PURPOSE: this page is for display information and stats of user
* // AR
* +==== END AsperHeader =================+
*/ 

'use client';

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function DashboardPage() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  const labels = ['Semaine 1', 'Semaine 2', 'Semaine 3', 'Semaine 4'];
  const dataPoints = [20, 40, 55, 75];

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Progression (%)',
              data: dataPoints,
              backgroundColor: 'rgba(58, 99, 183, 0.2)',
              borderColor: '#3A63B7',
              borderWidth: 2,
              tension: 0.4,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: '#171717',
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: '#171717',
              },
              grid: {
                color: 'rgba(0,0,0,0.05)',
              },
            },
            y: {
              beginAtZero: true,
              max: 100,
              ticks: {
                color: '#171717',
              },
              grid: {
                color: 'rgba(0,0,0,0.05)',
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Graphique de progression</h2>
      <div className="bg-white shadow rounded-lg p-4">
        <canvas ref={chartRef} className="w-full h-64"></canvas>
      </div>
    </div>
  );
}
