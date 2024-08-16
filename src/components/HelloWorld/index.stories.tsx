/**
 * Storybook file for the HelloWorld component.
 */
import { Meta, StoryFn } from '@storybook/react';
import HelloWorld from '.';

// Story placement in the story list
export default {
  title: 'Components/HelloWorld',
  component: HelloWorld,
} as Meta<typeof HelloWorld>;

const Template: StoryFn<typeof HelloWorld> = (args) => <HelloWorld {...args} />;

// Story #1
export const Green = Template.bind({});
Green.args = {};

// Story #2
export const Red = Template.bind({});
Red.args = {
  alert: { severity: 'error' },
};
