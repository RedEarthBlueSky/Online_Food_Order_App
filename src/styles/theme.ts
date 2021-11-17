//  start the theme object code
import { StyleGuide, Palette } from '../types/styles'

const palette: Palette = {
  purple: '#5A31F4',
  green: '#0ECD9D',
  red: '#E40C2B',
  black: '#0B0B0B',
  white: '#F0F2F3',
  lightblue: '#9CF6FB',
  magenta: '#161F6D',
  grey: '#7DA2A9',
}

export const theme: StyleGuide = {
  colors: {
    background: palette.white,
    foreground: palette.black,
    primary: palette.purple,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
    header: palette.lightblue,
    footer: palette.magenta,
    body: palette.grey,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontFamily: 'Raleway',
      fontSize: 36,
      fontWeight: 'bold',
    },
    body: {
      fontFamily: 'Merriweather',
      fontSize: 16,
    },
  }
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.black,
    foreground: palette.white,
  }
}

export const LandingPage = {
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  navigation: {
    flex: 1,
    backgroundColor: palette.lightblue,
  },
  body: {
    flex:9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.grey,
  },
  footer: {
    flex: 1,
    backgroundColor: palette.magenta,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  }
}