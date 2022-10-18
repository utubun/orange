import React from 'react';
import Histogram from './Histogram';

const data = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

const margin = {
    top: 20,
    right: 5,
    bottom: 30,
    left: 40,
}

const Template = (args) => <Histogram {...args} />;

export const SimpleHistogram = Template.bind({});

SimpleHistogram.args = {
    data: data,
    width: 300,
    height: 300,
    margin: margin
}

export default {
    title: 'Visualizations/2D/SimpleHistogram',
    component: SimpleHistogram
};
