import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import RootNavigator from './App.js';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: '' };
    navigator.geolocation.getCurrentPosition(
      (position) => {
        locationString = `${position.coords.latitude}, ${position.coords.longitude}`;
        this.setState({location: locationString});
      },
      (error) => {
        this.setState({location: "something went wrong"});
      }
    );
  }

  setLocation(position) {
    this.setState({ location: "got to callback!!"});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!!</Text>
        <Text>{this.state.location}</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Tarsier')}
          title="See a Tarsier!"
        />
      </View>
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