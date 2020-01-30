import React, {Component} from 'react';
import { View, Text } from "react-native";
import Register from './components/Register';
import Login from './components/Login';
import Splash from './components/Splash';
import Inicio from './components/Inicio';

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