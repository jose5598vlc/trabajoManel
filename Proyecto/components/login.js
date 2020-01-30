import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';


export default class Login extends React.Component {


    render() {
        return (
            <View style={styles.register}>


             <Text style={styles.title}>Datos de la cuenta</Text>

            <TextInput style={styles.textInput} placeholder="Usuario" 
            underlineColorAndroid={'transparent'} onChangeText={(text) => this.setState({userName: text})}>
            </TextInput>


            <TextInput style={styles.textInput} placeholder="Contraseña" 
           secureTextEntry={true} underlineColorAndroid={'transparent'} onChangeText={(text) => this.setState({contrasenya: text})}>
            </TextInput>

            <TouchableOpacity style={styles.button} onPress={this.registraUsuario}>
                <Text style={styles.buttontext}>Iniciar Sesión</Text>
            </TouchableOpacity>

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

    title: {
      fontSize: 28,
      fontFamily: 'bold'
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