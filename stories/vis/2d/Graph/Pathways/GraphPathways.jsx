import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import './GraphPathways.module.css';

const GraphPathways = ({ data, width, height, r }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    // create reference
    const svg = d3
      .select(d3Container.current)
      .attr('viewBox', [0, 0, width, height]);

    // clean all children on update
    svg.selectAll('*').remove();

    // create group for plotting
    const view = svg.append('g');

    function setNodeId(node) {
      return node.id;
    }

    // run the force simulation
    const simulation = d3
      .forceSimulation(data.nodes)
      .force('charge', d3.forceManyBody().strength(-9.5))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force(
        'collision',
        d3.forceCollide().radius((d) => 10)
      )
      .force(
        'link',
        d3
          .forceLink()
          .links(data.links)
          .id((d) => setNodeId(d))
          .strength((d) => d.weight)
      )
      .on('tick', ticked);

    // define function updating the simulation
    function ticked() {
      updateLinks();
      updateNodes();
      updateNodeLabels();
    }

    // bind to boundaries
    const boundaries = (x, left, right) => d3.max([left, d3.min([right, x])]);

    // define function to update existing nodes
    const updateNodes = () => {
      const node = view
        .selectAll('circle')
        .data(data.nodes)
        .join('circle')
        .attr('class', '.node')
        .attr('r', r) //(d) => d.r)
        .attr('cx', (d) => boundaries(d.x, r, width - r))
        .attr('cy', (d) => boundaries(d.y, r, height - r))
        .attr('fill', 'red')
        .call(drag(simulation))
        .exit()
        .remove();
    };

    // define the function to update existing node labels
    const updateNodeLabels = () => {
      view
        .selectAll('text')
        .data(data.nodes)
        .join('text')
        .attr('class', 'node--label')
        .attr('x', (d) => boundaries(d.x, r, width - r))
        .attr('y', (d) => boundaries(d.y, r, height - r))
        .text((d) => d.id)
        .call(drag(simulation));
    };

    // define function to update existing links
    const updateLinks = () => {
      view
        .selectAll('line')
        .data(data.links)
        .join('line')
        //.classed('edge', true)
        .attr('x1', (d) => boundaries(d.source.x, r, width - r))
        .attr('x2', (d) => boundaries(d.target.x, r, width - r))
        .attr('y1', (d) => boundaries(d.source.y, r, height - r))
        .attr('y2', (d) => boundaries(d.target.y, r, height - r))
        .attr('stroke-width', '0.5pt')
        .attr('stroke', 'gray');
    };

    // drug
    function drag(simulation) {
      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }

      return d3
        .drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
    }

    // remove view
    //view.exit().remove();
  }, [data, d3Container.current]);

  return <svg width={width} height={height} ref={d3Container} />;
};

export default GraphPathways;
