import React from "react";

const ScatterPlotPoints = ({
    width = 100,
    height = 100,
    points = [
        { cx: 20, cy: 30, radius: 5, color: "red" },
        { cx: 50, cy: 70, radius: 10, color: "blue" },
        { cx: 80, cy: 50, radius: 7, color: "green" },
        { cx: 30, cy: 90, radius: 12, color: "purple" }
    ]
}) => {
    return (
        <svg width={width} height={height}>
            {points.map((point, index) => (
                <circle
                    key={index}
                    cx={point.cx}
                    cy={point.cy}
                    r={point.radius}
                    fill={point.color}
                />
            ))}
        </svg>
    );
};

export default ScatterPlotPoints;
