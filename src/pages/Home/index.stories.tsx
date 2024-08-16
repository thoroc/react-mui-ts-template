// External imports
import { Meta } from '@storybook/react';

// Local imports
import HomePage from '.';

// Story placement in the story list
export default {
  title: 'Pages/Home',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof HomePage>;

// Default export
export const Default = () => <HomePage />;
