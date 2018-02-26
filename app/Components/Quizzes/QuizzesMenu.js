import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Button } from 'native-base';
import AppHeader from '../AppHeader';

class QuizzesMenu extends Component {

  constructor() {
    super();
    this.state = {
      quizzes: ['Geografija', 'Istorija', 'Sport', 'Film']
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <Container>
        <AppHeader />
        <View style={styles.mainView}>
          {
            this.state.quizzes.map((quiz, index) => {
              return(
                <Button
                  style={styles.btn}
                  key={index}
                  onPress={() => navigate(quiz, {screen: quiz})}
                >
                  <Text style={styles.btnText}>{quiz}</Text>
                </Button>
              )
            })
          }
        </View>
      </Container>
    )
  }
}

export default QuizzesMenu;

const styles = StyleSheet.create({
  mainView: {
    marginTop: 80,
  },
  btn: {
    width: 280,
    backgroundColor: '#00cc99',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 8,
    padding: 16
  },
  btnText: {
    fontSize: 24,
    color: '#fff',
  }
});
