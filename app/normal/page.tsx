'use client';

import React, { useContext } from 'react';
import { DataContext } from '../_components/DataContext';
import LinePlot from '../_components/LinePlot';
import ScatterPlot from '../_components/ScatterPlot';
import WPMvsAccuracyCorrelation from '../_components/WPMvsAccuracyCorrelation';
import AverageValues from '../_components/AverageValues';
import LineChart1 from '../_components/LineChart1';
import MultiAxisChart from '../_components/MultiAxisChart';

const NormalPage = ({}) => {
  const typingData = useContext(DataContext);

  const normalData = typingData.filter((data: any) => data.type.trim().toLowerCase() === 'normal');

  return (
    <div style={{ padding: '20px 120px' }}>
      <h1>TODO: Be more accurate as data shows leads to more speed!</h1>

      <MultiAxisChart data={normalData} />
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
