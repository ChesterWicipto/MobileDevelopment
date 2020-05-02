import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Greeting from './Greeting';
import Layout from './Layout';
import List from './List';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      greeting: 'welcome'
    }
  }
  render(){
    return(
      <View style={styles.container}>
      <List />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;