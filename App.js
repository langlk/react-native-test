import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import TarsierScreen from './TarsierScreen.js';
import WebTestScreen from './WebTestScreen.js';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Tarsier: {
    screen: TarsierScreen,
    navigationOptions: {
      headerTitle: 'Tarsier',
    },
  },
  WebTest: {
    screen: WebTestScreen,
    navigationOptions: {
      headerTitle: 'WebTest',
    },
  },
});

export default RootNavigator;
