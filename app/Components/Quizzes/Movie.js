import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppHeader from '../AppHeader';
import QuestionView from '../Questions/QuestionView';

class Film extends Component {

  render() {
    return(
      <View>
        <AppHeader />
        <QuestionView category="movie" />
      </View>
    )
  }
}

export default Film;
