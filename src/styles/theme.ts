// types object for theme

export type Palette = {
  purple: string,
  green: string,
  red: string,
  black: string,
  white: string,
}

interface Theme {
  colors: {
    background: string,
    foreground: string,
    primary: string,
    success: string,
    danger: string,
    failure: string,
  },
  spacing: {
    s: number,
    m: number,
    l: number,
    xl: number,
  },
  textVariants: {
    header: {
      fontFamily: string,
      fontSize: number,
      fontWeight: string,
    },
    body: {
      fontFamily: string,
      fontSize: number,
    },
  }
}[] //  remove the array symbol


//  export type StyleGuide = Theme[]

//  import { StyleGuide, Palate } from '../types'

const palette: Palate = {
  purple: '#5A31F4',
  green: '#0ECD9D',
  red: '#CD0E61',
  black: '#0B0B0B',
  white: '#F0F2F3',
}

export const theme: Theme = {
  colors: {
    background: palette.white,
    foreground: palette.black,
    primary: palette.purple,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
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