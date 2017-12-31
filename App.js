import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
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
    let pic = {
      uri: "https://media1.britannica.com/eb-media/28/148328-004-6AFF751A.jpg"
    };
    return (
      <View style={styles.container}>
        <Text>Hello World!!</Text>
        <Text>{this.state.location}</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Look, an image!</Text>
        <Image source={pic} style={{width: 100, height: 100}} />

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
