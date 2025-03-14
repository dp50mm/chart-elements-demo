import React from "react";

const BarChartElement = ({
    width = 200,
    height = 100,
    barWidth = 30,
    barHeights = [80, 60, 40],
    color = "steelblue"
}) => {
    const barSpacing = 10;
    const bars = barHeights.map((barHeight, index) => (
        <rect
            key={index}
            x={(index * (barWidth + barSpacing)) + (width / 2 - (barHeights.length * (barWidth + barSpacing) - barSpacing) / 2)}
            y={height - barHeight}
            width={barWidth}
            height={barHeight}
            fill={color}
        />
    ));

    return (
        <svg
            width={width}
            height={height}
            >
            {bars}
        </svg>
    );
};

export default BarChartElement;
