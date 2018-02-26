import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header, Body, Title, Left, Right, Button, Icon } from 'native-base';

class AppHeader extends Component {

  render() {
    return(
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>React Quiz</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}

export default AppHeader;
