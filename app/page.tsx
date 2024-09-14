"use client"

import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    data.length === 0 && getAll();
  }, [data])
  

  const getAll = async (): Promise<void> => {
    const response = await fetch("https://localhost:7015/typingData");
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  return (
    <>
    <main className={styles.main}>
       <ul>
          <li>use MUI</li>
          <li>Separate out fetching data, to services, make it auto fetch, consider react query</li>
          <li>Hide and Show data sections with accordion</li>
          <li>Graph results</li>
          <li>Use a table to display data</li>
          <li>Basic stats analysis over data</li>
        </ul>
      <br />
      <br />
      <div className={styles.description}>
       
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <button onClick={getAll}>Connect to API</button>
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