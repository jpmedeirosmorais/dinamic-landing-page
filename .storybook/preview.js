import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import { GlobalStyles } from '../src/styles/global';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'gray',
    values: [
      {
        name: 'white',
        value: theme.colors.white,
      },
      {
        name: 'black',
        value: theme.colors.black,
      },
      {
        name: 'gray',
        value: theme.colors.darkGray,
      }
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
];
