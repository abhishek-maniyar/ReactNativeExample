// __tests__/LoginScreen-test.js
import 'react-native';
import React from 'react';
import HomeScreen from '../Components/HomeScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <HomeScreen />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
