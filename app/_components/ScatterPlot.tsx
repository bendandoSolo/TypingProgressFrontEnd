'use client';

import React from 'react';
import PlotFigure from './PlotFigure.js';
import * as Plot from '@observablehq/plot';

// Function to convert date from DD/MM/YYYY format to Date object
const parseBritishDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split('/');
  return new Date(`${year}-${month}-${day}`); // Format for JavaScript Date
};

type TypyingDataItem = {
  id?: number;
  date: string;
  type: string;
  wpm: number;
  percentage_Complete: string | null;
  accuracy: string | null;
};

interface ScatterPlotProps {
  data: TypyingDataItem[];
  title: string;
  valueToGraph: string;
  color?: string;
  reverse?: boolean;
}

const ScatterPlot: React.FC<ScatterPlotProps> = ({ data, title, valueToGraph, color, reverse }) => {
  const parsedData = data.map((item, index) => ({
    ...item,
    date: parseBritishDate(item.date), // Parse the date as before
    count: index + 1, // Add a count field starting from 1
  }));

  return (
    <>
      <h1>{title}</h1>
      <PlotFigure
        options={{
          width: 1500,
          height: 800,
          marks: [
            //Plot.dot(parsedData, { x: "date", y: "wpm" })
            Plot.line(parsedData, {
              //x: "date",
              x: 'count',
              y: valueToGraph,
              stroke: !!color ? color : '#0000ff', // Custom color for the line
              strokeWidth: 2, // Thickness of the line
            }),
            // Plot.line(parsedData, {
            //     x: "date",
            //     y: "accuracy",
            //     stroke: '#ff00ff', // Custom color for the line
            //     strokeWidth: 2, // Thickness of the line
            // }),
          ],
          y: {
            label: 'Words per minute (WPM) & Accuracy',
            reverse: reverse ? reverse : false, // Reverses the y-axis (higher values at the top)
          },
        }}
      />
      {/* <ul>
      {Array.isArray(data) && data.map((item) => (
        <li key={item.id}>{JSON.stringify(item)}</li>
      ))} 
    </ul>*/}
    </>
  );
};

export default ScatterPlot;
