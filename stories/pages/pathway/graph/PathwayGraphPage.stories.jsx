import React from 'react';

import { PathwayGraphPage } from './PathwayGraphPage';

const data = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

const margin = {
  top: 20,
  right: 5,
  bottom: 30,
  left: 40,
};

const Template = (args) => <PathwayGraphPage {...args} />;

export const PathwayPage = Template.bind({});

PathwayPage.args = {
  data: data,
  width: 300,
  height: 300,
  margin: margin,
};

export default {
  title: 'Pages/Pathway',
  component: PathwayPage,
  parameters: {
    layout: 'fullscreen',
  },
};
