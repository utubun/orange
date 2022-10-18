import React from 'react';
import Shapes from './shapes';

const data = [
    {
        cx: 40,
        cy: 50,
        r: 10
    },
    {
        cx: 100,
        cy: 75,
        r: 21
    },
    {
        cx: 200,
        cy: 175,
        r: 74
    },
    {
        cx: 270,
        cy: 175,
        r: 23
    }
];

const margin = {
    left: 10,
    top: 15,
    right: 20,
    bottom: 15,
}

const Template = (args) => <Shapes {...args} />;

export const Circles = Template.bind({});

Circles.args = {
    data: data,
    width: 300,
    height: 300,
    margin: margin
}

export default {
    title: 'Visualizations/2D/Shapes',
    component: Shapes
};
