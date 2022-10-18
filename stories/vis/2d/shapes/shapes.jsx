import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Shapes = ({ data, width, height, margin }) => {

    const d3Container = useRef(null);

    useEffect(
        () => {
            const svg = d3.select(d3Container.current)
              .attr('width', width)
              .attr('height', height)
              .append('g')
                .attr('width', width - margin.left - margin.right)
                .attr('height', height - margin.top, margin.bottom)
                .attr(
                    'transform',
                    `translate(${margin.left}, ${margin.top})`
                );
            
            const update = svg
              .selectAll('circle')
              .data(data)
              .join('circle')
                .attr('r', (d) => d.r)
                .attr('cx', (d) => d.cx)
                .attr('cy', (d) => d.cy)
              .style('fill', (d) => (d.r % 2 ? 'orange' : '#eee'));

            update.exit()
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

export default Shapes;