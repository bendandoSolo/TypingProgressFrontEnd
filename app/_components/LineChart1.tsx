// 'use client';
import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const LineChart1 = () => {
  const lineChart1 = useRef(null);
  let chart: any = null;

  useEffect(() => {
    if (lineChart1.current) {
      if (chart) {
        chart.destroy();
      }
      chart = new Chart(lineChart1.current, {
        type: 'line',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red'],
          datasets: [
            {
              label: 'My First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
            {
              label: 'My First Dataset',
              data: [67, 54, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: 'rgb(95, 192, 192)',
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, []);

  return <canvas id="myChart1" ref={lineChart1}></canvas>;
};

export default LineChart1;
