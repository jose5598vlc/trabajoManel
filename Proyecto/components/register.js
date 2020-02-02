//Este componente en teoría es correcto, pero da fallos y no sabemos porque

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';


export default class Register extends React.Component {

  constructor(props){
    super(props)
    this.state={
      id: 23,
      userName: "",
      email: "",
      contrasenya: "",
    }
  }


  registraUsuario() {
        fetch('http://localhost:3001/usuarios/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: '',
    userName: this.userName,
    email: this.email,
    contrasenya: this.contrasenya,
  }),
})

    }

// si los parametros userName y contrasenya son iguales a los state, esperamos a asynstorage y le pasamos metodos registra usuario
register = async() => {
    if(userInfo.userName === this.state.userName && userInfo.contrasenya === this.state.contrasenya) {
      await AsyncStorage.setItem(this.registraUsuario);
      alert('Usuario Registrado'); // aqui mostramos alert de usuario registrado
      this.props.navigation.navigate('Login'); // y llamamos a navegation para ir a login
    } else {
      alert('Error');
    }
  }
  


    render() {
        return (
            <View style={styles.register}>


            <Text style={styles.header}>Registro</Text>

            <TextInput style={styles.textInput} placeholder="Nombre" 
            underlineColorAndroid={'transparent'} onChangeText={(text) => this.setState({userName: text})}>
            </TextInput>

            <TextInput style={styles.textInput} placeholder="Email" 
            underlineColorAndroid={'transparent'} onChangeText={(text) => this.setState({email: text})}>
            </TextInput>

            <TextInput style={styles.textInput} placeholder="Contraseña" 
           secureTextEntry={true} underlineColorAndroid={'transparent'} onChangeText={(text) => this.setState({contrasenya: text})}>
            </TextInput>

            <TouchableOpacity style={styles.button} onPress={this.registraUsuario} onPress={()=>this.props.navegation.navegate("Login")}>
                <Text style={styles.buttontext}>Registrarse</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    register: {
        alignSelf: 'stretch',
    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
    },

    textInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: 'black',
        borderBottomColor: '#f8f8f8',
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 3,
    },
    buttontext: {
        color: '#fff',
        fontWeight: 'bold',
        
    }
})