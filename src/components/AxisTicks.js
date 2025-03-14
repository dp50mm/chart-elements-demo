import React from "react";

const AxisTicks = ({
    width = 200,
    height = 20,
    tickCount = 5,
    color = "black"
}) => {
    const tickSpacing = width / (tickCount - 1);
    return (
        <svg width={width} height={height}>
            {Array.from({ length: tickCount }).map((_, i) => (
                <React.Fragment key={i}>
                    <line
                        x1={i * tickSpacing}
                        y1={height - 10}
                        x2={i * tickSpacing}
                        y2={height}
                        stroke={color}
                        strokeWidth={2}
                    />
                    <text
                        x={i * tickSpacing}
                        y={height + 5}
                        alignmentBaseline="hanging"
                        fill={color}
                        fontSize={10}
                        textAnchor="middle"
                    >
                        {i}
                    </text>
                </React.Fragment>
            ))}
            <line
                x1={0}
                y1={height - 10}
                x2={width}
                y2={height - 10}
                stroke={color}
                strokeWidth={1}
            />
        </svg>
    );
};

export default AxisTicks;
