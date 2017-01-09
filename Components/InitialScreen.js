import React, { Component } from 'react';

import {
    AppRegistry,
    Navigator
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

export default class PlayTT extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="LoginScreen"
                           hideNavBar={true}
                           component={LoginScreen}
                           title="LoginScreen"
                           initial={true}
                    />

                    <Scene key="HomeScreen"
                           hideNavBar={false}
                           component={HomeScreen}
                           title="Home"
                           sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight-20}}
                    />
                </Scene>
            </Router>
        );
    }
}