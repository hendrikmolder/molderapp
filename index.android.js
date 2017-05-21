import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import * as firebase from 'firebase';

import Splash from './components/Splash'
import Login from './components/Login'

import AppView from './components/AppView'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  storageBucket: "<your-storage-bucket>"
}
const firebaseApp = firebase.initializeApp(firebaseConfig)

const MolderApp = StackNavigator({
  Main: {screen: Splash},
  Login: {screen: Login}
})

AppRegistry.registerComponent('MolderApp', () => MolderApp)
