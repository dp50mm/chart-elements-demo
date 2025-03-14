import React from "react";

const ColorScaleLegend = ({ width = 200, height = 30, colors = ["#f7fcf0", "#ccebc5", "#7bccc4", "#2b8cbe", "#084081"] }) => {
  const numColors = colors.length;
  const rectWidth = width / numColors;
  return (
    <svg width={width} height={height}>
      {colors.map((color, i) => (
        <rect key={i} x={i * rectWidth} y={0} width={rectWidth} height={height} fill={color} />
      ))}
    </svg>
  );
};

export default ColorScaleLegend;