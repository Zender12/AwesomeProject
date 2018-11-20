import React, { Component } from 'react';
import {Platform, StyleSheet, View, ImageBackground, TextInput, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
//    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => alert(333)}
      />
    );
  }
}

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen }
});
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <HomeScreen />
    );
  }
}

