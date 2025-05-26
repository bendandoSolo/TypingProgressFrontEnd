'use client';

import styles from './page.module.css';
import { useEffect, useState, useContext } from 'react';
import LinePlot from './_components/LinePlot';
import ScatterPlot from './_components/ScatterPlot';

//we should not be importing and exporting this from layout!
import { DataContext } from './_components/DataContext';

export default function Home() {
  const [data, setData] = useState([]);
  const contextData = useContext(DataContext);

  useEffect(() => {
    data.length === 0 && getAll();
  }, []);

  const getAll = async (): Promise<void> => {
    const response = await fetch('https://localhost:7015/typingData');
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  return (
    <>
      <main className={styles.main}>
        <h1>Graphing tests still in progress, D3 vs @observablehq/plot vs Simple</h1>
        <hr style={{ color: '#000000', width: '100%' }} />
        <ScatterPlot data={data} valueToGraph="wpm" title="all test WPM" />

        <hr style={{ color: '#000000', width: '100%' }} />

        <ul>
          <li>WIP Hide and Show data sections with accordion</li>
          <li>WIP Graph results</li>
          <li>Use a table to display data</li>
          <li>Basic stats analysis over data</li>
        </ul>
        <br />
        <br />
        <div className={styles.description}>
          <ul>
            {data.map((item: any) => (
              <li key={item.id}>{JSON.stringify(item)}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
