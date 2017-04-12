/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Camera from './Component/Camera/Camera';
import TabBarController from './Component/Meituan/tabBarController'
import TestLinkIOS from './Component/LinkIOS/TestLinkIOS'


AppRegistry.registerComponent('TestComponent', () => TestLinkIOS);
