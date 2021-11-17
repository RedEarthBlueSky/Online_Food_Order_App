import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { StyleSheet } from 'react-native'

import ThemeContextProvider from './src/contexts/ThemeContext'
import LandingScreen from './src/screens/LandingScreen'


export default function App() {
  return (
    <ThemeContextProvider>
      <LandingScreen />
    </ThemeContextProvider>
  )
}
