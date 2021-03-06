import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Image} from 'react-native';
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
      <Text style={{fontSize:20,fontWeight:'bold'}}>Data Covid-19 & Indonesia</Text>
      <Image source={require('./covid.jpg')}
      style={{ width: 200, height: 100 }} />
      <Layout />
      <Text style={{fontSize:50,fontWeight:'bold'}}>Indonesia</Text>
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