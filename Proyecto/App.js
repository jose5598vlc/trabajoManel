

import React, {Component} from 'react';
import { View, Text } from "react-native";
import Register from './components/register';

export default class App extends Component {

  render(){
    return(
      <View>
        <Text> Benvingut!!!</Text>
        <Register></Register>
      </View>
    )
  }
}