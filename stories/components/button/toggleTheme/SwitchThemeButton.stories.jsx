import React from 'react';

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import { SwitchThemeButton } from './SwitchThemeButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tools/Buttons/SwitchThemeButton',
  component: SwitchThemeButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SwitchThemeButton {...args} />;

export const SwitchTheme = Template.bind({});

SwitchTheme.args = {
  dark: false
}