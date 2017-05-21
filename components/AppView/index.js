import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import Splash from '../Splash'
import Login from '../Login'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default class AppView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Splash />
      </View>
    )
  }
}