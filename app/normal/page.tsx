'use client';

import React, {useContext} from 'react';
import { DataContext } from '../_components/DataContext';
import LinePlot from '../_components/LinePlot';
import ScatterPlot from '../_components/ScatterPlot';
import WPMvsAccuracyCorrelation from '../_components/WPMvsAccuracyCorrelation';
import AverageValues from '../_components/AverageValues';

const NormalPage = () => {

    const typingData = useContext(DataContext);

    const normalData = typingData.filter((data: any) => data.type.trim().toLowerCase() === 'normal');

    return (
        <>
            <p>loading lineplot not working </p>
            {/* <LinePlot data={normalData} /> */}
            <ScatterPlot data={normalData} title="normal data" valueToGraph="wpm"/>
            <AverageValues dataArray={[]} />
            <ScatterPlot data={normalData} title="normal data" valueToGraph="accuracy" color="#ff00ff" reverse={true}/>
            {/* <WPMvsAccuracyCorrelation data={normalData} /> */}
            <p>{JSON.stringify(normalData)}</p>
        </>
    );
};


const DataDispayer = (data: any) => {
    return (
       <p>{JSON.stringify(data)}</p>
    );
}



export default NormalPage;