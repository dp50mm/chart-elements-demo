import React from "react";

const StackedBarChart = ({ width = 300, height = 200, data = [[40, 30, 20], [50, 25, 15], [30, 50, 10]], colors = ["#4CAF50", "#FF9800", "#2196F3"] }) => {
  const barWidth = width / data.length - 10;
  
  return (
    <svg width={width} height={height}>
      {data.map((stack, i) => {
        let yOffset = height;
        return stack.map((value, j) => {
          const barHeight = (value / 100) * height;
          yOffset -= barHeight;
          return (
            <rect
              key={`${i}-${j}`}
              x={i * (barWidth + 10)}
              y={yOffset}
              width={barWidth}
              height={barHeight}
              fill={colors[j]}
            />
          );
        });
      })}
    </svg>
  );
};

export default StackedBarChart;
