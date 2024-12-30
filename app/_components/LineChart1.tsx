'use client';
import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const LineChart1 = (data: any) => {
  const lineChart1 = useRef(null);
  let chart: any = null;

  useEffect(() => {
    if (lineChart1.current) {
      if (chart) {
        chart.destroy();
      }

      let date = data.data.map((d: any) => d.date);
      console.log(JSON.stringify(data.data));
      let wpm = data.data.map((d: any) => d.wpm);
      let accuracy = data.data.map((d: any) => d.accuracy);
      // only draw chart once date is loaded
      if (!!data.data && data.data.length > 0) {
        chart = new Chart(lineChart1.current, {
          type: 'line',
          data: {
            labels: date,
            datasets: [
              {
                label: 'My First Dataset',
                data: wpm,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
              },
              {
                label: 'My First Dataset',
                data: accuracy,
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
    }
  }, [data]);

  return (
    <>
      <canvas id="myChart1" ref={lineChart1}></canvas>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default LineChart1;
