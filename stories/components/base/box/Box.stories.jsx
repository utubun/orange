import React from 'react';

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import { Box } from './Box';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Elements/Box',
  component: Box,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    theme: { 
      name: 'theme',
      type: { name: 'string', required: true},
      defaultVlaue: 'bp4-light',
      description:  'Defines dark or light theme' 
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
    <Box {...args} />
  );

export const BaseBox = Template.bind({});

BaseBox.args = {
  theme: 'bp4-light'
}