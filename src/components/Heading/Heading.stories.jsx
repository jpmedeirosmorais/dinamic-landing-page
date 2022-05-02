import { Heading } from './Heading';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está claro',
    light: false,
  },
  argTypes: {
    children: { type: 'string' },
    light: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'black',
    },
  },
};

export const Light = (args) => <Heading {...args} light={true} />;

export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'white',
  },
};

Light.args = {
  children: 'O texto está escuro',
  light: true,
};
