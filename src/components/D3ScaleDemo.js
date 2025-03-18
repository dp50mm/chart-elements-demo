import React from "react";
import * as d3 from "d3";

const ScatterPlotPoints = ({
    width = 100,
    height = 100,
    points = [
        { param1: 2000, param2: 0.2, radius: 5, color: "red" },
        { param1: 5000, param2: 0.7, radius: 10, color: "blue" },
        { param1: 8000, param2: 0.5, radius: 7, color: "green" },
        { param1: 3000, param2: 0.9, radius: 12, color: "purple" }
    ]
}) => {
    // Define scales
    const xScale = d3.scaleLinear()
        .domain([0, 10000]) // input range
        .range([0, width]); // output range

    const yScale = d3.scaleLinear()
        .domain([0, 1]) // input range
        .range([height, 0]); // output range (inverted for SVG coordinate system)

    return (
        <svg width={width} height={height}>
            {points.map((point, index) => (
                <circle
                    key={index}
                    cx={xScale(point.param1)}
                    cy={yScale(point.param2)}
                    r={point.radius}
                    fill={point.color}
                />
            ))}
        </svg>
    );
};

export default ScatterPlotPoints;
