import React from 'react';
import { mean, median, mode } from 'simple-statistics';

//cleanup fix having two variables called data
type MeanMedianModeProps = {
  data: { data: [] }; // Adjust the inner type to match your data structure
  field: string;
};

const MeanMedianMode: React.FC<MeanMedianModeProps> = ({ data, field }) => {
  if (!data && !field) {
    return <div>pass in data and string to be searched</div>;
  }

  let Values: number[] = [];

  if (data) {
    /* tslint:disable-next-line */
    data?.forEach((d: any) => {
      if (d[field] != null && !isNaN(d[field])) {
        Values.push(parseInt(d[field]));
      }
    });
  }

  return (
    <>
      <h3>{field}</h3>
      <p>Mean {mean(Values).toString()}</p>
      <p>Median {median(Values).toString()}</p>
      <p>Mode {mode(Values).toString()}</p>
    </>
  );
};

export default MeanMedianMode;
