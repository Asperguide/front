'use client';

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function DashboardPage() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: ['Semaine 1', 'Semaine 2', 'Semaine 3', 'Semaine 4'],
          datasets: [
            {
              label: 'Progression (%)',
              data: [20, 40, 55, 75],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 2,
              tension: 0.4,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
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
    <div>
      <h2>Graphique de progression</h2>
      <canvas ref={chartRef} height={200}></canvas>
    </div>
  );
}
