import React from "react";
import { arc } from "d3-shape";
import * as d3 from "d3";

const SunburstChart = ({ width = 200, height = 200, colors = ["#ffcc00", "#ff6600", "#ff3300", "#cc0000"] }) => {
    const radius = Math.min(width, height) / 2;
    const segments = colors.length;
    const angleStep = (2 * Math.PI) / segments;

    const getRandomPercentage = () => Math.random();

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${width / 2}, ${height / 2})`}>
                {colors.map((color, i) => {
                    const pieArc = arc()
                        .innerRadius(radius / 2)
                        .outerRadius(radius)
                        .startAngle(i * angleStep)
                        .endAngle((i + 1) * angleStep);
                    const randomPercentage = getRandomPercentage();
                    const innerArc = arc()
                        .innerRadius(radius / 2)
                        .outerRadius(radius / 2 + (radius / 2) * randomPercentage)
                        .startAngle(i * angleStep)
                        .endAngle((i + 1) * angleStep);
                    const outerArc = arc()
                        .innerRadius(radius / 2 + (radius / 2) * randomPercentage)
                        .outerRadius(radius)
                        .startAngle(i * angleStep)
                        .endAngle((i + 1) * angleStep);

                    const brighterColor = d3.color(color).brighter(5).toString();
                    
                    return (
                        <g key={i}>
                            <path d={pieArc()} fill={color} stroke="#fff" strokeWidth={1} />
                            <path d={innerArc()} fill={color} opacity={0.7} stroke="#fff" strokeWidth={1} />
                            <path d={outerArc()} fill={brighterColor} opacity={0.3} stroke="#fff" strokeWidth={1} />
                        </g>
                    );
                })}
            </g>
        </svg>
    );
};

export default SunburstChart;
