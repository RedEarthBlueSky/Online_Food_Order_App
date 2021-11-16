import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

import ThemeContextProvider from './src/contexts/ThemeContext'
import LandingScreen from './src/screens/LandingScreen'


export default function App() {
  return (
    <ThemeContextProvider>
      <LandingScreen />
    </ThemeContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
