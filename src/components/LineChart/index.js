import React, { Component } from 'react';
import { extent as d3ArrayExtent } from 'd3-array';
import { axisBottom as d3AxisBottom, axisLeft as d3AxisLeft } from 'd3-axis';
import {
    scaleLinear as d3ScaleLinear,
    scaleTime as d3ScaleTime,
} from 'd3-scale';
import { select as d3Select } from 'd3-selection';
import { line as d3Line } from 'd3-shape';
import './index.css';
import SVGWithMargin from '../SVGWithMargin';

class LineChart extends Component {
    render() {
        const {
            payload: { values: data },
            height,
            selectX,
            selectY,
            width,
            margin,
        } = this.props;
        const xScale = d3ScaleTime()
            .domain(d3ArrayExtent(data, selectX))
            .range([0, width]);
        const yScale = d3ScaleLinear()
            .domain(d3ArrayExtent(data, selectY))
            .range([height, 0]);

        const xAxis = d3AxisBottom()
            .scale(xScale)
            .ticks(data.length / 2);
        const yAxis = d3AxisLeft()
            .scale(yScale)
            .ticks(3);

        const selectScaledX = datum => xScale(selectX(datum));
        const selectScaledY = datum => yScale(selectY(datum));

        const sparkLine = d3Line()
            .x(selectScaledX)
            .y(selectScaledY);

        const linePath = sparkLine(data);
        const circlePoints = data.map(datum => ({
            x: selectScaledX(datum),
            y: selectScaledY(datum),
        }));

        return (
            <SVGWithMargin
                className="container"
                contentContainerBackgroundRectClassName="contentContainerBackgroundRect"
                contentContainerGroupClassName="contentContainer"
                height={height}
                margin={margin}
                width={width}
            >
                <g
                    className="xAxis"
                    ref={node => d3Select(node).call(xAxis)}
                    style={{
                        transform: `translateY(${height}px)`,
                    }}
                />
                <g className="yAxis" ref={node => d3Select(node).call(yAxis)} />
                <g className="line">
                    <path d={linePath} />
                </g>
                <g className="scatter">
                    {circlePoints.map((circlePoint, index) => (
                        <circle
                            cx={circlePoint.x}
                            cy={circlePoint.y}
                            key={`${circlePoint.x},${index}`}
                            r={4}
                        />
                    ))}
                </g>
            </SVGWithMargin>
        );
    }
}

export default LineChart;
