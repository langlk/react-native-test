import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class WebTestScreen extends React.Component {

  render() {

    return (
      <WebView
        source={{uri: 'https://planning-fallacy.herokuapp.com/'}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
