import { sampleCorrelation } from 'simple-statistics';

//const WPMvsAccuracyCorrelation = (wpmArray: number[], accuracy: number[]) => {

const WPMvsAccuracyCorrelation = (data: any) => {
  let wpm: number[] = [];
  let accuracy: number[] = [];
  let correlation: number = 0;

  if (data.data.length > 0) {
    //console.log('data', data.data);
    data.data.forEach((d: any) => {
      if (d.wpm != null && !isNaN(d.wpm) && d.accuracy != null && !isNaN(d.accuracy)) {
        wpm.push(d.wpm);
        accuracy.push(parseInt(d.accuracy));
      }
    });
    correlation = sampleCorrelation(wpm, accuracy);
  }

  return (
    <div style={{ margin: '0 auto', width: '600px' }}>
      <h3>Correlation between WPM and Accuracy: {correlation}</h3>
      <table>
        <thead>
          <tr>
            <th>Absolute Value of r (|r|)</th>
            <th>Interpretation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&lt; 0.3</td>
            <td>Weak or negligible correlation</td>
          </tr>
          <tr>
            <td>0.3 to 0.5</td>
            <td>Moderate correlation</td>
          </tr>
          <tr>
            <td>0.5 to 0.7</td>
            <td>Strong correlation</td>
          </tr>
          <tr>
            <td>&gt; 0.7</td>
            <td>Very strong correlation</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WPMvsAccuracyCorrelation;
