/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {withAuthenticator} from 'aws-amplify-react-native';
import Router from './src/router';

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Router />
      </NavigationContainer>
    </>
  );
};

export default withAuthenticator(App);
