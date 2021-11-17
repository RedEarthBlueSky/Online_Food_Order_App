import React, 
{ 
  createContext, 
  useContext, 
  useState, 
  ReactChild,
  ReactChildren
} from 'react'

// import { theme, darkTheme, LandingPage } from '../styles/theme'
import { Children } from '../types/styles'

const ThemeContext = createContext<string | null>(null)

const ThemeContextProvider = ({children}: Children) => {
  return (
    <ThemeContext.Provider value="Context String Value">
      {children}
    </ThemeContext.Provider> 
  )
}

export default ThemeContextProvider

