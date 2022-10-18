import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './SimpleBarplot.css';

const SimpleBarplot = ({ data, width, height, margin }) => {

    const d3Container = useRef(null);

    useEffect(
        () => {
            const svg = d3.select(d3Container.current)
              .attr('viewBox', [0, 0, width,, height]);

            const view = svg
              .append('g')
              .attr('width', width)
              .attr('height', height);

            const x = d3.scaleBand()
              .domain(data.map((d) => d.x))
              .rangeRound([ margin.left, width - margin.right ])
              .padding(0.1);

            const y = d3.scaleLinear()
              .domain([0, d3.max(data, d => d.y)])
              .range([height - margin.bottom, margin.top]);

            view
              .append('g')
              .attr('transform', `translate(0, ${height - margin.bottom})`)
              .call(d3.axisBottom(x));
            
            view
              .append('g')
              .attr('transform', `translate(${margin.left},0)`)
              .call(d3.axisLeft(y));

            view.selectAll('rect')
              .data(data)
              .join('rect')
                .attr('class', 'bar')
                .attr('x', (d) => x(d.x))
                .attr('y', (d) => y(d.y))
                .attr('height', (d) => y(0) - y(d.y))
                .attr('width', x.bandwidth());

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

export default SimpleBarplot;