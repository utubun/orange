import React from 'react';
import SimpleBarplot from './SimpleBarplot';

const data = [
    {
        x: 'a',
        y: 100
    },
    {
        x: 'b',
        y: 75
    },
    {
        x: 'c',
        y: 33
    },
    {
        x: 'd',
        y: 13
    },
    {
        x: 'e',
        y: 22
    }
];

const margin = {
    top: 20,
    right: 5,
    bottom: 30,
    left: 40,
}

const Template = (args) => <SimpleBarplot {...args} />;

export const Barplot = Template.bind({});

Barplot.args = {
    data: data,
    width: 300,
    height: 300,
    margin: margin
}

export default {
    title: 'Visualizations/2D/SimpleBarplot',
    component: SimpleBarplot
};
