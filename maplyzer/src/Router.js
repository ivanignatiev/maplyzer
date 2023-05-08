/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  NavigationContainer,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {
  EmptyScreen,
  MarkScreen,
  UIKitTestScreen,
} from './screens';

const Stack = createNativeStackNavigator();

const Router = () => {

    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animationEnabled: false,
          }}>
            <Stack.Group>
              <Stack.Screen
                name="MarkScreen"
                component={MarkScreen}
              />
              <Stack.Screen
                name="UIKitTestScreen"
                component={UIKitTestScreen}
              />
              <Stack.Screen
                name="EmptyScreen"
                component={EmptyScreen}
              />
            </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default Router;
