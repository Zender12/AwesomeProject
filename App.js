import React, { Component } from 'react';
import {Platform, StyleSheet, View, ImageBackground, TextInput} from 'react-native';
import { Root } from "native-base";
import LoginScreen from './Login'
import HomeScreen from './Home'



type Props = {};
export default class App extends Component<Props> {
     render() {
        return (
            <LoginScreen />
    );
  }
}

