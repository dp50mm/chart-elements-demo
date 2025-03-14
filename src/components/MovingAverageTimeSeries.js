import React from "react";

const MovingAverageTimeSeries = ({ width = 300, height = 150, color = "blue", avgColor = "red" }) => {
  const data = [10, 15, 18, 25, 30, 28, 26, 29, 32, 34, 33, 37];
  const avgData = data.map((_, i, arr) => {
    if (i < 2) return arr[i];
    return (arr[i - 2] + arr[i - 1] + arr[i]) / 3;
  });
  
  const scaleX = width / (data.length - 1);
  const scaleY = height / Math.max(...data);

  const linePath = data.map((d, i) => `${i * scaleX},${height - d * scaleY}`).join(" ");
  const avgPath = avgData.map((d, i) => `${i * scaleX},${height - d * scaleY}`).join(" ");
  
  return (
    <svg width={width} height={height}>
      <polyline points={linePath} fill="none" stroke={color} strokeWidth={2} />
      <polyline points={avgPath} fill="none" stroke={avgColor} strokeWidth={2} strokeDasharray="5,5" />
    </svg>
  );
};

export default MovingAverageTimeSeries;
