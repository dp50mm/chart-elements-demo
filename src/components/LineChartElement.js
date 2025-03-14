import React from "react";

const LineChartElement = ({ width = 200, height = 100, color = "black" }) => {
  const points = [
    [10, 80],
    [50, 60],
    [90, 40],
    [130, 50],
    [170, 20]
  ]
    .map(p => p.join(","))
    .join(" ");

  return (
    <svg width={width} height={height}>
      <polyline points={points} fill="none" stroke={color} strokeWidth={2} />
    </svg>
  );
};

export default LineChartElement;
