import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Splash extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Text style={styles.title}>PlaceMyBet App</Text>
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
        fontSize: 18,
        color: 'white'
    }
})