import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './Density.module.css';

// Function to compute density
function kernelDensityEstimator(kernel, X) {
  return function (V) {
    return X.map(function (x) {
      return [
        x,
        d3.mean(V, function (v) {
          return kernel(x - v);
        }),
      ];
    });
  };
}

function kernelEpanechnikov(k) {
  return function (v) {
    return Math.abs((v /= k)) <= 1 ? (0.75 * (1 - v * v)) / k : 0;
  };
}

const Density = (
  { data, annotation, dim: { width, height, margin } } = {
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
      .attr('y', height + margin.top + margin.bottom / 2)
      .text(annotation.axes.x);

    // append y-axis title
    view
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('x', -height / 2)
      .attr('y', margin.left / 4)
      .attr('transform', 'rotate(-90)')
      .text(annotation.axes.y);

    // define x scale
    const x = d3
      .scaleLinear()
      .domain(d3.extent(data.map((d) => d.x)))
      .range([margin.left, width - margin.right]);

    // estimate kernel density
    const kde = kernelDensityEstimator(kernelEpanechnikov(2), x.ticks(40));
    const density = kde(data.map((d) => d.x));

    // define y scale
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(density.map((d) => d[1]))])
      .range([height - margin.bottom, margin.top]);

    // append x scale
    view
      .append('g')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    // append y scale
    view
      .append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y));

    view
      .append('g')
      .append('path')
      .datum(density)
      .attr('fill', 'red')
      .attr(
        'd',
        d3
          .line()
          .curve(d3.curveBasis)
          .x(function (d) {
            return x(d[0]);
          })
          .y(function (d) {
            return y(d[1]);
          })
      );

    view.exit().remove();
  }, [data, d3Container.current]);

  return <svg className="d3" width={width} height={height} ref={d3Container} />;
};

export default Density;
