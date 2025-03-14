import React from "react";
import _ from "lodash";

const GridLines = ({ width = 200, height = 100, lineCount = 5, color = "darkgray" }) => {
  const horizontalSpacing = height / lineCount;
  const verticalSpacing = width / (lineCount * 2);
  return (
    <svg width={width} height={height}>
      {_.range(1, lineCount).map((i) => (
        <line
          key={`h-${i}`}
          x1={0}
          y1={i * horizontalSpacing}
          x2={width}
          y2={i * horizontalSpacing}
          stroke={color}
          strokeWidth={1}
        />
      ))}
      {_.range(1, lineCount * 2).map((i) => (
        <line
          key={`v-${i}`}
          x1={i * verticalSpacing}
          y1={0}
          x2={i * verticalSpacing}
          y2={height}
          stroke={i % 3 === 0 ? "black" : color}
          strokeWidth={i % 3 === 0 ? 2 : 1}
        />
      ))}
    </svg>
  );
};

export default GridLines;
