import * as ss from 'simple-statistics'

import React from 'react';

const WPMvsAccuracyCorrelation = ({data : any}) => {



    // const wpmValues = data.map(item => item.wpm);
    // const accuracyValues = data.map(item => parseFloat(item.accuracy)); 
    // const correlation = ss.sampleCorrelation(wpmValues, accuracyValues);

    const validData = data.filter(item => 
        typeof item.wpm === 'number' && 
        !isNaN(parseFloat(item.accuracy))
    );

    const wpmValues = validData.map(item => item.wpm);
const accuracyValues = validData.map(item => parseFloat(item.accuracy)); // Convert accuracy to number


    const correlation = ss.sampleCorrelation(wpmValues, accuracyValues);


    return (
        <div>
            `The correlation between WPM and Accuracy is: ${correlation}`
        </div>
    );
};

export default WPMvsAccuracyCorrelation;