import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import LoginForm from '../components/LoginForm';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof LoginForm> = {
  title: 'Authentication/Login/Form',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'clicked' }
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Login: Story = {
  args: {
  },
};

