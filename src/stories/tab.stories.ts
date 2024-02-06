import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from '../components';


const meta: any = {
  title: 'Example/Tab',
  component: Tab,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    headers: ['Deneme1', 'Deneme2', 'Deneme3']
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Version2: Story = {
  args: {
    headers: ['Deneme1']
  },
};
