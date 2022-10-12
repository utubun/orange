import { ComponentStory, ComponentMeta } from "@storybook/react";
import PathwayCard, { IPathwayCard } from "./PathwayCard";
import { mockPathwayCardProps } from "./PathwayCard.mocks";

export default {
    title: 'cards/pathwayCard',
    component: PathwayCard,
    argTypes: {},
} as ComponentMeta<typeof PathwayCard>;

const Template: ComponentStory<typeof PathwayCard> = (args) => (
    <PathwayCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
    ...mockPathwayCardProps.base,
} as IPathwayCard;