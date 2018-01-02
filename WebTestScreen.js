import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class WebTestScreen extends React.Component {

  urlChange(webViewState) {
    if (!webViewState.loading) {
      if (webViewState.url === "https://planning-fallacy.herokuapp.com/") {
        console.log(webViewState.url);
        this.props.navigation.navigate('Home');
      }
    }
  }

  render() {
    return (
      <WebView
        source={{uri: 'https://planning-fallacy.herokuapp.com/'}}
        onNavigationStateChange={this.urlChange.bind(this)}
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
