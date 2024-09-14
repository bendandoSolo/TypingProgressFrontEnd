'use client';

import React, {useContext} from 'react';
import { DataContext } from '../_components/DataContext';

const NormalPage = () => {

    const typingData = useContext(DataContext);

    const normalData = typingData.filter((data: any) => data.type === 'normal');

    return (
        <div>
            <p>{JSON.stringify(normalData)}</p>
            Here we are going to show the graph of the normal data..
        </div>
    );
};

export default NormalPage;