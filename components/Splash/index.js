import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import TimerMixin from 'react-timer-mixin'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c0392b',
    width: '100%',
  },
  logo: {
    width: 300,
    resizeMode: 'contain'
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '100'
  }
})

export default class Splash extends Component {
  
  mixins: [TimerMixin]
  componentDidMount() {
    this.setTimeout( ()=> {

    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('./assets/logo.png')} />
          <Text style={styles.title}>molder app</Text>
        </View>
        
      </View>
    )
  }
}