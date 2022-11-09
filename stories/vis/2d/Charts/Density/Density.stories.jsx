import React from 'react';
import Density from './Density';
//import { bar } from '../../../../assets/data/charts';

const density = (length = 100) => ({
  data: Array.from({ length: length }, () => ({
    x: Math.floor(Math.random() * 100),
  })),
  annotation: {
    title: 'Density plot',
    axes: {
      x: 'X axis title',
      y: 'Y axis title',
    },
  },
  dim: {
    width: 300,
    height: 300,
    margin: {
      top: 20,
      right: 15,
      bottom: 20,
      left: 60,
    },
  },
});

const Template = (args) => <Density {...args} />;

const props = density();

export const Densityplot = Template.bind({});

Densityplot.args = {
  ...props,
};

export default {
  title: 'Visualizations/2D/Densityplot',
  component: Density,
};
