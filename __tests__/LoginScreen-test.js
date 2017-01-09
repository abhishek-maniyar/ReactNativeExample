// __tests__/LoginScreen-test.js
import 'react-native';
import React from 'react';
import LoginScreen from '../Components/LoginScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders Login Screen correctly', () => {
    const tree = renderer.create(
        <LoginScreen />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});