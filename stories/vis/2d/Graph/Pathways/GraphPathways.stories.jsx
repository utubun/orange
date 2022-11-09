import React from 'react';
import GraphPathways from './GraphPathways';
import { pathways } from '../../../../assets/data/graph/path_by_module';

const weightFactor = pathways.links.reduce((n, l) => n + l.weight, 0);
pathways.links = pathways.links.map((l) => ({
  ...l,
  ...{ weight: l.weight / weightFactor },
}));

const margin = {
  top: 20,
  right: 5,
  bottom: 30,
  left: 40,
};

const Template = (args) => <GraphPathways {...args} />;

export const Pathways = Template.bind({});

Pathways.args = {
  data: pathways,
  width: 800,
  height: 800,
  r: 5,
};

export default {
  title: 'Visualizations/2D/Graph/Pathways',
  component: GraphPathways,
};
