'use client';

import React, {useContext} from 'react';
import { DataContext } from '../_components/DataContext';
import LinePlot from '../_components/LinePlot';

const NormalPage = () => {

    const typingData = useContext(DataContext);

    const normalData = typingData.filter((data: any) => data.type === 'normal');

    return (
        <>
            <p>{JSON.stringify(normalData)}</p>
           
            <LinePlot data={normalData} />
        </>
    );
};


const DataDispayer = (data: any) => {
    return (
       <p>{JSON.stringify(data)}</p>
    );
}



export default NormalPage;