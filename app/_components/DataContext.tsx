
import { createContext, useState, useEffect, ReactNode } from 'react';

export const DataContext = createContext<any>(null);  // Adjust the type as needed

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<any[]>([]);

  const getAll = async () => {
    const response = await fetch("https://localhost:7015/typingData");
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    getAll();  // Fetch the data on mount
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};
