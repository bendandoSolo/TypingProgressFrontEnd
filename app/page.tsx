"use client"

import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {

  const [data, setData] = useState([]);

  const getAll = async () => {
    const response = await fetch("https://localhost:7015/typingData");
    const data = await response.json();
    console.log(data);
    alert(JSON.stringify(data));
    setData(data);
  };

  return (
    <main className={styles.main}>
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
  );
}
