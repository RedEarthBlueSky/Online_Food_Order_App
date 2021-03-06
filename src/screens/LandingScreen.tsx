import React, {useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { ThemeContext } from 'react-navigation'

import { theme } from '../styles/theme'
const { colors, spacing, textVariants } = theme

const LandingScreen: React.FC = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text>Navigation</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.header}>The Landing Screen</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  navigation: {
    flex: 1,
    backgroundColor: `${colors.footer}`,
  },
  body: {
    flex:9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${colors.body}`,
  },
  footer: {
    flex: 1,
    backgroundColor: `${colors.header}`,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  }
})

export default LandingScreen