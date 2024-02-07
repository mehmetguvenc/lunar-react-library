import type { Meta, StoryObj } from '@storybook/react';

import Tab from '.';

const meta: Meta<typeof Tab> = {
  title: 'Main/Components',
  component: Tab,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    items: { control: 'object' },
    isLarge: { control: 'boolean' },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Tabs: Story = {
  parameters: {
    layout: "fullscreen",
  },
  args: {
    items: [
      {
        title: "Title 1",
        content: "Content 1"
      },
      {
        title: "Title 2",
        content: "Content 2"
      },
      {
        title: "Title 3",
        content: "Content 3"
      },
      {
        title: "Title 4",
        content: "Content 4"
      }
    ],
    isLarge: true
  }
};
