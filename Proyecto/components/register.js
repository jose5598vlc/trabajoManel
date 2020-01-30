import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';


export default class register extends React.Component {

  constructor(props){
    super(props)
    this.state={
      id: "",
      userName: "",
      email: "",
      contrasenya: "",
    }
  }


  registraUsuario() {
        fetch('http://localhost/3001/usuarios', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    idUsu: this.id,
    userName: this.userName,
    email: this.email,
    contrasenya: this.contrasenya,
  }),
})
.then((response) => response.json())
.then((responseJson) => {
   alert(responseJson)
})
.catch((error) => {
 console.error(error)
})
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

            <TouchableOpacity style={styles.button} onPress={this.registraUsuario}>
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
        borderBottomWidth: 1,
    },

    textInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottonWidth: 1,
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