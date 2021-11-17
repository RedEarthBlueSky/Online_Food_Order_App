import * as React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const HomeScreen: React.FC = () => {
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

export default HomeScreen