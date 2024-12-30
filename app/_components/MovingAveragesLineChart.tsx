'use client';
import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const movingAverageCalculator = (data: number[], windowSize: number) => {
  let movingAverage: number[] = [];
  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    if (i >= windowSize) {
      //wait until we have enough data points to calculate the moving average
      let sum = 0;
      for (let j = i - windowSize; j < i; j++) {
        // if (typeof data[j] === 'string') {
        //   sum += parseInt(data[j]);
        // } else {
        sum += data[j];
        //}
      }
      movingAverage.push(sum / windowSize);
    }
  }
  return movingAverage;
};

const LineChart1 = (data: any) => {
  const lineChart1 = useRef(null);
  let chart: any = null;

  const movingAverageDays = 10;

  useEffect(() => {
    if (lineChart1.current) {
      if (chart) {
        chart.destroy();
      }

      let date = data.data.map((d: any) => d.date);
      let wpm = data.data.map((d: any) => d.wpm);
      let accuracy = data.data.map((d: any) => d.accuracy);

      let movingWPM = movingAverageCalculator(wpm, 10);

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
              },
              {
                label: 'WPM Moving Average' + movingAverageDays + ' days',
                data: movingWPM,
                fill: false,
                borderColor: 'rgb(255, 0, 192)',
                tension: 0.1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                // beginAtZero: true,
                // min: 60,
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

export default LineChart1;
