import React from "react";

const AnnotationOnPoint = ({ width = 200, height = 200, cx = 100, cy = 100, color = "red", label = "Important Point" }) => {
  return (
    <svg width={width} height={height}>
      <circle cx={cx} cy={cy} r={5} fill={color} />
      <line x1={cx} y1={cy} x2={cx + 50} y2={cy - 30} stroke="black" strokeWidth={1} />
      <text x={cx + 55} y={cy - 30} fontSize={12} fill="black">{label}</text>
    </svg>
  );
};

export default AnnotationOnPoint;
