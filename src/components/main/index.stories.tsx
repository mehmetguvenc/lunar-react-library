import type { Meta, StoryObj } from '@storybook/react';

import Main from '.';

const meta: Meta<typeof Main> = {
    title: 'Stories/Main',
    component: Main,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Loading: Story = {
    parameters: {
        layout: "fullscreen",
    },
    args: {}
};
