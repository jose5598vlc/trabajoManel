import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';


export default class register extends React.Component {
    render() {
        return (
            <View style={styles.register}>


                <Text style={styles.header}>Registro</Text>

            <TextInput style={styles.textInput} placeholder="Nombre" 
            underlineColorAndroid={'transparent'}>
            </TextInput>

            <TextInput style={styles.textInput} placeholder="Email" 
            underlineColorAndroid={'transparent'}>
            </TextInput>

            <TextInput style={styles.textInput} placeholder="Email" 
           secureTextEntry={true} underlineColorAndroid={'transparent'}>
            </TextInput>

            <TouchableOpacity style={styles.button}>
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