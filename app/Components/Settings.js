import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppHeader from './AppHeader';

class Settings extends Component {

  render() {
    return(
      <View>
        <AppHeader />
        <Text>Podešavanja</Text>
      </View>
    )
  }
}

export default Settings;
