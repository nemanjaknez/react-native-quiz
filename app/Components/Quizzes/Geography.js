import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppHeader from '../AppHeader';
import QuestionView from '../Questions/QuestionView';

class Geografija extends Component {

  render() {
    return(
      <View>
        <AppHeader />
        <QuestionView category="geography" />
      </View>
    )
  }
}

export default Geografija;
