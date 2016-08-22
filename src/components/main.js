import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import CityInput from './cityInput';

export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContent}>
                    <Text style={styles.title}>Où ?</Text>
                </View>
                <View style={styles.formContent}>
                    <CityInput />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#eaeaea',
        flexDirection: 'column',
    },
    titleContent: {
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#4f4f4f',
    },
    formContent: {
        marginTop: 20,
        backgroundColor: '#FFF',
        height: 302,
        padding: 15
    }
});
