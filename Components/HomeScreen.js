import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import styles from '../Styles/styles'

import {
    getWelcomeString
} from '../Utils/Util'

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {getWelcomeString(this.props.user)}
                </Text>
            </View>
        );
    }
}
