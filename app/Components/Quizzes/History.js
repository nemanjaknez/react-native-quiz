import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppHeader from '../AppHeader';
import QuestionView from '../Questions/QuestionView';

class Istorija extends Component {

  render() {
    return(
      <View>
        <AppHeader />
        <QuestionView category="history" />
      </View>
    )
  }
}

export default Istorija;
