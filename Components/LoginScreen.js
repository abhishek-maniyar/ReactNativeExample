import React, { Component } from 'react';

import {
    Button,
    TextInput,
    View,
    Text,
    StyleSheet,
    Platform,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const dismissKeyboard = require('dismissKeyboard');

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {userName:''};
    }


    render() {

        return (
            <View
                style={styles.container} >
                <Text
                    style={styles.welcome} >
                    Enter you name to continue...
                </Text>
                <TextInput
                    style={styles.userNameTextField}
                    placeholder="Name"
                    onChangeText={(userName) => this.setState({userName})}
                />
                <Button
                    onPress={(e) => this.signIn(e)}
                    title="Sign In"
                    color="blue"
                    accessibilityLabel="Sign in to continue..."
                    autoCorrect='false'
                />
            </View>
        );
    }

    signIn() {
        Actions.HomeScreen({user: this.state.userName});
        dismissKeyboard();
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        ...Platform.select({
            ios: {
                backgroundColor: '#fff714',
            },
            android: {
                backgroundColor: '#0ee2ff',
            }
        }),
    },
    welcome: {
        fontSize: 20,
        marginTop:100,
        marginBottom:10,
        textAlign:'center'
    },
    userNameTextField: {
        height: 40,
        marginTop:10,
        marginBottom:10,
        textAlign:'center'
    }
});