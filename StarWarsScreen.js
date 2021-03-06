import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class StarWarsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { swapiResponse: null };
  }

  searchStarWars() {
    fetch(`https://swapi.co/api/people/?search=${this.state.text}`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({ swapiResponse: responseJson });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    let results = [];
    if (this.state.swapiResponse) {
      if (this.state.swapiResponse.results) {
        results.push(<Text key="header">{this.state.swapiResponse.results.length} Results:</Text>);
        this.state.swapiResponse.results.forEach((result) => {
          results.push(<Text key={result.name}>{result.name}</Text>);
        });
      }
    }
    return (
      <View style={styles.container}>
        {results}
        <TextInput
          style={{height: 40, width: 300}}
          placeholder="Enter a Star Wars character"
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={() => this.searchStarWars()}
        />
        <Button
          onPress={() => this.searchStarWars()}
          title='Search'
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
