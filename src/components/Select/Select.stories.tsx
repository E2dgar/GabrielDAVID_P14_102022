import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';

export default {
    title: 'Select',
    component: Select,
    label: 'Select'
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    labelBefore: 'Show',
    lableAfter: 'entries',
    options: [10, 25, 50, 100]
};
