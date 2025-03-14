import React from "react";

const TrendLineTimeSeries = ({ width = 300, height = 150, color = "blue", trendColor = "green" }) => {
  const data = [10, 15, 18, 25, 30, 28, 26, 29, 32, 34, 33, 37];
  const scaleX = width / (data.length - 1);
  const scaleY = height / Math.max(...data);

  const linePath = data.map((d, i) => `${i * scaleX},${height - d * scaleY}`).join(" ");
  
  // Compute simple linear regression trend line
  const n = data.length;
  const sumX = data.reduce((sum, _, i) => sum + i, 0);
  const sumY = data.reduce((sum, y) => sum + y, 0);
  const sumXY = data.reduce((sum, y, i) => sum + i * y, 0);
  const sumX2 = data.reduce((sum, _, i) => sum + i * i, 0);
  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  const trendStart = `${0},${height - intercept * scaleY}`;
  const trendEnd = `${width},${height - (slope * (n - 1) + intercept) * scaleY}`;
  
  return (
    <svg width={width} height={height}>
      <polyline points={linePath} fill="none" stroke={color} strokeWidth={2} />
      <line x1={0} y1={trendStart.split(",")[1]} x2={width} y2={trendEnd.split(",")[1]} stroke={trendColor} strokeWidth={2} strokeDasharray="4,4" />
    </svg>
  );
};

export default TrendLineTimeSeries;
