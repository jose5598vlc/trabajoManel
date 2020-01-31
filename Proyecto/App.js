import React, {Component} from 'react';
import { View, Text } from "react-native";
import Register from './components/Register';
import Login from './components/login';
import Splash from './components/splash';
import Inicio from './components/inicio';

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