import React from 'react';
import Bar from './Bar';
//import { bar } from '../../../../assets/data/charts';

const bar = (length = 10) => ({
  data: Array.from({ length: length }, () => ({
    x: Math.random().toString(36).slice(2, 7),
    y: Math.floor(Math.random() * 100),
  })),
  annotation: {
    title: 'Barplot',
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
  order: 'none',
});

const Template = (args) => <Bar {...args} />;

const props = bar();

export const Barplot = Template.bind({});

Barplot.args = {
  ...props,
};

export default {
  title: 'Visualizations/2D/Barplot',
  component: Bar,
};
