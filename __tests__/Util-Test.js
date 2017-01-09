// __tests__/LoginScreen-test.js
import 'react-native';
import React from 'react';

import { expect } from 'chai';

import { getWelcomeString } from '../Utils/Util';

it('should return proper welcome message when logged in', () => {

    welcomeString = getWelcomeString("Abhishek");
    expect(welcomeString).equal('Welcome Abhishek! Enjoy all features of application.');

});

it('should return proper welcome message when not logged in', () => {

    welcomeString = getWelcomeString();
    expect(welcomeString).equal('Welcome, Guest! Please Sign-in to use all features of this application.');

});