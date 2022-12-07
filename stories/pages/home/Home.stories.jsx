import React from 'react';


import { Home } from './Home';

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Home {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Default = Template.bind({});