import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class splash extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Text style={styles.title}>Manel App</Text>
            </View>
        )
    }
}


const styes = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        color: 'white'
    }
})