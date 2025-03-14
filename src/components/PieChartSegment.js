import React from "react";
import { arc } from "d3-shape";

const PieChartSegment = ({ width = 100, height = 100, startAngle = 0, endAngle = Math.PI / 2, color = "tomato" }) => {
  const radius = Math.min(width, height) / 2;
  const pieArc = arc()
    .innerRadius(0)
    .outerRadius(radius)
    .startAngle(startAngle)
    .endAngle(endAngle);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        <path d={pieArc()} fill={color} />
      </g>
    </svg>
  );
};

export default PieChartSegment;
