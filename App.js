import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import TarsierScreen from './TarsierScreen.js';

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
});

export default RootNavigator;
