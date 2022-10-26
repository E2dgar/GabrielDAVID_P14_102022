import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Datatable } from './DataTable';

export default {
    title: 'Datatable',
    component: Datatable
} as ComponentMeta<typeof Datatable>;

const Template: ComponentStory<typeof Datatable> = (args) => (
    <Datatable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    title: 'Datatable'
};
