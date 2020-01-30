import React, {Component} from 'react';
import { View, Text } from "react-native";
import Register from './components/Register';
import Login from './components/Login';
import Splash from './components/Splash';
import Inicio from './components/Inicio';
import "'react-native-gesture-handler’"; 

export default class App extends Component {

  render(){
    return(
      <View>
        <Text> Benvingut!!!</Text>
        <Login></Login>
      </View>
    )
  }
}


// navegacion

export const cambioPag = createStackNavegator({
  Splash: {screen: Splash},
  Login: {screen: Login},
  Registro: {screen: Registro},
  Inicio: {screen: Inicio},
},
{initialRouteName: 'Login'},

);

const AppContainer = createAppContainer(cambioPag);