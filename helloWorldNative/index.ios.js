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
  View,
  TouchableHighlight
} from 'react-native';

const AVAILABLE_PLATFORM = {
  ANDROID: 'Android',
  IOS: 'iOS',
  WINDOWS: 'Windows',
  UBUNTU: 'Ubuntu',
};

export default class helloWorldNative extends Component {

  constructor() {
    super();
    this._changePlatform = this._changePlatform.bind(this);
    this.state = {
      currentPlatform: 'iOS'
    }
  }

  _changePlatform(platformName) {
    const p = platformName || AVAILABLE_PLATFORM.IOS
    this.state = {
      currentPlatform: platformName,
    };
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this._changePlatform}
      >
        <Text>
          Click
        </Text>
      </TouchableHighlight>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('helloWorldNative', () => helloWorldNative);
