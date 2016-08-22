import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Main from './src/components/main';

class reactNativeAirbnb extends Component {
    render() {
        return (
            <Main />
        );
    }
}

AppRegistry.registerComponent('reactNativeAirbnb', () => reactNativeAirbnb);
