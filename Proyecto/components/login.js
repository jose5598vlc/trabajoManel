import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback,  
TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

export default class login extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.logoContainer}>
                <View style={styles.logoContainer}>
                
                <Text style={styles.title}>Datos de la cuenta</Text>
                </View>
                <View style={styles.infoContainer}>

                <TextInput style={styles.input}
                placeholder="Introduce E-mail"
                placeholderTextColor='rgba(255,255,255,0.8)'
                keyboardType='email-address'
                autoCorrect={false}>
                </TextInput>

                <TextInput style={styles.input}
                placeholder="Introduce contraseña"
                placeholderTextColor='rgba(255,255,255,0.8)'
                returnKeyType='go'
                secureTextEntry
                autoCorrect={false}>
                </TextInput>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
                </TouchableOpacity>
                 <br>
                </br>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>REGISTRARSE</Text>
                </TouchableOpacity>

                </View>
            </View>

            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.8
    },
    logo: {
        width: 128,
        height: 56,
    },
    title: {
        color: '#f7c744',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        /*
        backgroundColor: 'red'
        */
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        paddingHorizontal: 10,
        marginBottom: 20
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: 'rgb(32,53,70)',
        fontWeight: 'bold',
        fontSize: 18
    }

})