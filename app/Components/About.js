import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppHeader from './AppHeader';

class About extends Component {

  render() {
    return(
      <View>
        <AppHeader />
        <Text>O aplikaciji</Text>
      </View>
    )
  }
}

export default About;
