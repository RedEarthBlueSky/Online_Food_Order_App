// types object for theme
import { ReactChildren, ReactChild } from 'react'

export type Palette = {
  purple: string,
  green: string,
  red: string,
  black: string,
  white: string,
  lightblue: string,
  magenta: string,
  grey: string,
}

interface Theme {
  colors: {
    background: string,
    foreground: string,
    primary: string,
    success: string,
    danger: string,
    failure: string,
    header: string,
    footer: string,
    body: string,
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
}

interface LandingPage {
  container: {
    flex: number,
    backgroundColor: string,
  },
  navigation: {
    flex: number,
    backgroundColor: string,
  },
  body: {
    flex:number,
    justifyContent: string,
    alignItems: string,
    backgroundColor: string,
  },
  footer: {
    flex: number,
    backgroundColor: string,
  },
  header: {
    fontSize: number,
    fontWeight: string,
  }
}

interface AuxProps {
  children: ReactChild | ReactChildren
}

export type StyleGuide = Theme
export type Landing = LandingPage
export type Children = AuxProps