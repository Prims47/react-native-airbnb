import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main from './src/components/main';

class reactNativeAirbnb extends Component {
    render() {
        return (
            <View>
                <Main />
            </View>
        );
    }
}

AppRegistry.registerComponent('reactNativeAirbnb', () => reactNativeAirbnb);
