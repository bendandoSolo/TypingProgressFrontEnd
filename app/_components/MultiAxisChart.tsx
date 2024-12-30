'use client';
import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const MultiAxisChart = (data: any) => {
  const lineChart1 = useRef(null);
  let chart: any = null;

  useEffect(() => {
    if (lineChart1.current) {
      if (chart) {
        chart.destroy();
      }

      let date = data.data.map((d: any) => d.date);
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
                label: 'WPM',
                data: wpm,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                yAxisID: 'y',
              },
              {
                label: 'accuracy',
                data: accuracy,
                fill: false,
                borderColor: 'rgb(255, 0, 192)',
                tension: 0.1,
                yAxisID: 'y1',
              },
            ],
          },
          options: {
            responsive: true,
            interaction: {
              mode: 'index',
              intersect: false,
            },
            //stacked: false,
            plugins: {
              title: {
                display: true,
                text: 'Correlation between WPM and Accuracy',
              },
            },
            scales: {
              y: {
                type: 'linear',
                display: true,
                position: 'left',
              },
              y1: {
                type: 'linear',
                display: true,
                position: 'right',

                // grid line settings
                grid: {
                  drawOnChartArea: false, // only want the grid lines for one axis to show up
                },
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
    </>
  );
};

export default MultiAxisChart;
