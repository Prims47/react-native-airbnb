import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

export default class CityInput extends Component {
    constructor(props) {
        super(props);

        this.state = {city: ''};

        //@todo: add google place api for search any place autocomplete.
    }

    render() {
        return (
            <View>
                <TextInput
                    value={this.state.city}
                    onChange={(city) => this.setState({city})}
                    placeholder="Ville"
                    style={styles.input}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 40,
        borderColor: '#eaeaea',
        borderWidth: 1
    }
});
