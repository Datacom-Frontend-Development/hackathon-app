import type { Meta, StoryObj } from '@storybook/react';

import LoginPage from '../pages/login';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof LoginPage> = {
  title: 'Authentication/Login',
  component: LoginPage,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Page: Story = {
  args: {
  },
};

