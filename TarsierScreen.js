import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class TarsierScreen extends React.Component {

  render() {
    let pic = {
      uri: "https://media1.britannica.com/eb-media/28/148328-004-6AFF751A.jpg"
    };
    return (
      <View style={styles.container}>
        <Text>Look it's a Tarsier!</Text>
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
