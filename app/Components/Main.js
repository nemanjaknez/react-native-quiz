import React, { Component } from 'react';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import { Container, Button } from 'native-base';
import AppHeader from './AppHeader';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      menuOptions: [
        {
          value: 'Play',
          text: 'Igraj',
        },
        {
          value: 'Settings',
          text: 'Podešavanja',
        },
        {
          value: 'About',
          text: 'O igrici',
        },
      ]
    }
  }

  exit() {
    BackHandler.exitApp();
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <Container>
        <AppHeader />
        <View style={styles.mainView}>
          {
            this.state.menuOptions.map((option, index) => {
              return(
                <Button
                  style={styles.btn}
                  key={index}
                  onPress={() => navigate(option.value, {screen: option.value})}
                >
                  <Text style={styles.btnText}>{option.text}</Text>
                </Button>
              )
            })
          }
          <Button
            style={styles.btn}
            onPress={this.exit}>
              <Text style={styles.btnText}>Exit</Text>
            </Button>
        </View>
      </Container>
    )
  }
}

export default Main;

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
