import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { H2, H3, Content } from 'native-base';

class Result extends Component {

  message() {
    var points = this.props.score;
    var percents = points/15*100;
    if(percents < 30) {
      return 'Slabo!'
    } else if (percents >= 30 && percents < 50) {
      return 'Možeš ti bolje!'
    } else if (percents >= 50 && percents < 65) {
      return 'Nije loše!'
    } else if (percents >= 65 && percents < 80) {
      return 'Vrlo dobro!'
    } else if (percents >= 80) {
      return 'Svaka čast!'
    }
  }

  render() {
    return(
      <View elevation={3} style={styles.result}>
        <Text style={styles.txt}>Vaš rezultat: {this.props.score/15*100 | 0}%</Text>
        <Text style={styles.txt}>{this.message()}</Text>
      </View>
    )
  }
}

export default Result;

const styles = StyleSheet.create({
  result: {
    width: 280,
    height: 200,
    backgroundColor: '#ffa64d',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 15,
    padding: 16,
    borderRadius: 2,
    borderBottomWidth: 0,
  },
  txt: {
    fontSize: 26,
    color: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
