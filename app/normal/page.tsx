'use client';

import React, { useContext } from 'react';
import { DataContext } from '../_components/DataContext';
// D3 old graphs
// import LinePlot from '../_components/LinePlot';
// import ScatterPlot from '../_components/ScatterPlot';
// import AverageValues from '../_components/AverageValues';
import LineChart1 from '../_components/LineChart1';
import MultiAxisChart from '../_components/MultiAxisChart';
import MovingAveragesLineChart from '../_components/MovingAveragesLineChart';
import MovingAveragesLineChart2 from '../_components/MovingAveragesLineChart2';
import LargeSpace from '../_components/layout/LargeSpace';
import MeanMedianMode from '../_components/statistics/MeanMedianMode';

import WPMvsAccuracyCorrelation from '../_components/statistics/WPMvsAccuracyCorrelation';

const NormalPage = ({}) => {
  const typingData = useContext(DataContext);

  const normalData = typingData.filter((data: any) => data.type.trim().toLowerCase() === 'normal');

  return (
    <div style={{ padding: '20px 120px' }}>
      <h1>TODO: Be more accurate as data shows leads to more speed!</h1>

      <MovingAveragesLineChart data={normalData} />
      <MovingAveragesLineChart2 data={normalData} />

      <MultiAxisChart data={normalData} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row', // default direction is row, but good to be explicit
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: '1rem',
          border: '2px solid #ccc',
          padding: '10px',
          margin: '20px',
        }}
      >
        <WPMvsAccuracyCorrelation data={normalData} />
        <MeanMedianMode data={normalData} field="wpm" />
        <MeanMedianMode data={normalData} field="accuracy" />
      </div>
      <LargeSpace />
      {/* TODO: ignore or fix loading D$ lineplot not working  */}
      {/* <LinePlot data={normalData} /> */}
      <LineChart1 data={normalData} />
      <br />
      <br />
      <br />
      <hr />
      {/* <ScatterPlot data={normalData} title="normal data" valueToGraph="wpm" />
      <AverageValues dataArray={[]} />
      <ScatterPlot data={normalData} title="normal data" valueToGraph="accuracy" color="#ff00ff" reverse={true} /> */}
      {/* <WPMvsAccuracyCorrelation data={normalData} /> */}
      <p>{JSON.stringify(normalData)}</p>
    </div>
  );
};

const DataDispayer = (data: any) => {
  return <p>{JSON.stringify(data)}</p>;
};

export default NormalPage;
