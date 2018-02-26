import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppHeader from '../AppHeader';
import QuestionView from '../Questions/QuestionView';

class Sport extends Component {

  render() {
    return(
      <View>
        <AppHeader />
        <QuestionView category="sport" />
      </View>
    )
  }
}

export default Sport;
