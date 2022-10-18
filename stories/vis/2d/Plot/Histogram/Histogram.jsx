import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './Histogram.css';

const Histogram = ({ data, width, height, margin }) => {

    const d3Container = useRef(null);

    useEffect(
        () => {

          // prepare the data
          const X = data;
          const W = data.map((d) => 1);
          const I = d3.range(X.length);

          // Compute bins
          const bins = d3.bin().thresholds(25).value(i => X[i])(I); // don't understand this line;
          // Compute Y values
          const Y = Array.from(bins, I => d3.sum(I, i => W[i]));

          // Default domains
          const xDomain = [bins[0].x0, bins[bins.length - 1].x1];
          const yDomain = [0, d3.max(Y)];

          // Ranges
          const xRange = [margin.left, width - margin.right];
          const yRange = [height - margin.bottom, margin.top]

          // Construct scales
          const xScale = d3.scaleLinear(xDomain, xRange);
          const yScale = d3.scaleLinear(yDomain, yRange);

          // Construct axes
          const xAxis = d3.axisBottom(xScale);
          const yAxis = d3.axisLeft(yScale);

          const svg = d3.select(d3Container.current)
            .attr('viewBox', [ 0, 0, width, height ]);

          const view = svg
            .append('g')
            .attr('width', width)
            .attr('height', height);
            
          view
            .append('g')
            .attr('transform', `translate(${margin.left},0)`)
            .call(yAxis);

          view
            .append('g')
            .attr('transform', `translate(0, ${height - margin.bottom})`)
            .call(xAxis);

          view
            .append('g')
            .selectAll('rect')
            .data(bins)
            .join('rect')
              .attr("x", d => xScale(d.x0) + 0.5)
              .attr("width", d => Math.max(0, xScale(d.x1) - xScale(d.x0) - 0.5 * 2))
              .attr('y', (d) => yScale(0))
              .transition(2000)
              .ease(d3.easeBounceInOut)
              .attr("y", (d, i) => yScale(Y[i]))
              .attr("height", (d, i) => yScale(0) - yScale(Y[i]))

          view.exit()
            .remove();

        },
        [ data, d3Container.current ]
    );

    return (
        <svg
          className = 'd3-component'
          width = { width }
          height = { height }
          ref = { d3Container }
        />
    )
};

export default Histogram;