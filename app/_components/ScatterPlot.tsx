import React from 'react';
import PlotFigure from "./PlotFigure.js";
import * as Plot from "@observablehq/plot";


const ScatterPlot = ({data}) => {
    return (
        <>
        <h1>Plot + React</h1>
      <h2>Penguins scatterplot</h2>
      <PlotFigure
        options={{
          marks: [
            Plot.dot(data, { x: "date", y: "wpm" })
          ]
        }}
      />
      </>
    );
};

export default ScatterPlot;