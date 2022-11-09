import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './Bar.module.css';

const Bar = (
  { data, annotation, dim: { width, height, margin }, order } = {
    annotation: {
      title: undefined,
      axes: {
        x: 'X',
        y: 'Y',
      },
    },
    dim: {
      width: 300,
      height: 300,
      margin: {
        top: 10,
        right: 10,
        bottom: 20,
        left: 60,
      },
    },
    order: 'none',
  }
) => {
  const d3Container = useRef(null);

  useEffect(() => {
    const svg = d3
      .select(d3Container.current)
      .attr('viewBox', [
        0,
        0,
        width + margin.left + margin.right,
        height + margin.top + margin.bottom,
      ]);

    // clean all children
    svg.selectAll('*').remove();

    const view = svg.append('g').attr('width', width).attr('height', height);

    // sort data
    const sortBars = () => {
      switch (order) {
        case 'desc':
          data.sort((a, b) => a.y - b.y);
          break;
        case 'asc':
          data.sort((a, b) => b.y - a.y);
          break;
        default:
          break;
      }
    };

    sortBars();

    // plot title

    if (annotation.title) {
      view
        .append('text')
        .attr('text-anchor', 'start')
        .attr('x', margin.left)
        .attr('y', 0)
        .text(annotation.title)
        .classed('chartTitle', true);
    }

    // append x-axis title;
    view
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('x', margin.left + width / 2)
      .attr('y', height + margin.top + margin.bottom)
      .text(annotation.axes.x);

    // append y-axis title
    view
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('x', -height / 2)
      .attr('y', margin.left / 2)
      .attr('transform', 'rotate(-90)')
      .text(annotation.axes.y);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.x))
      .rangeRound([margin.left, width + margin.left])
      .padding(0.05);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.y)])
      .range([height - margin.bottom, margin.top]);

    view
      .append('g')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    view
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    view
      .selectAll('bar')
      .data(data)
      .join('rect')
      .attr('x', (d) => x(d.x))
      .attr('width', x.bandwidth())
      .attr('y', (d) => y(0))
      .transition(2500)
      .ease(d3.easeBounce)
      .attr('y', (d) => y(d.y))
      .attr('height', (d) => y(0) - y(d.y));

    view.exit().remove();
  }, [data, d3Container.current]);

  return <svg className="d3" width={width} height={height} ref={d3Container} />;
};

export default Bar;
