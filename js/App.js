
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Container, Content, Text, View } from 'native-base';

import AppNavigator from './AppNavigator';

import theme from './themes/base-theme';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {

    return <AppNavigator />;
  }
}

export default App;
