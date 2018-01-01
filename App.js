import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import TarsierScreen from './TarsierScreen.js';
import WebTestScreen from './WebTestScreen.js';

const RootNavigator = StackNavigator(
  {
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
  },
  {
    navigationOptions: ({ navigation, screenProps }) => ({
      headerStyle: [styles.navigationPadding],
    })
  }

);

const styles = StyleSheet.create({
  navigationPadding: {
    ...Platform.select({
      ios: {
        // pass
      },
      android: {
        paddingTop: Expo.Constants.statusBarHeight,
        height: Expo.Constants.statusBarHeight + 56,
      },
    })
  }
});

export default RootNavigator;
