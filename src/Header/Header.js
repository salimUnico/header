import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import demo1 from '../Screens/demoPages/demo1';
import demo2 from '../Screens/demoPages/demo2';
import demo3 from '../Screens/demoPages/demo3';
import { TouchableOpacity } from 'react-native';

export default class HeaderBar extends Component {
  render() {
      const navigation = this.props.navigation;
      const headerName = this.props.headerName;

      console.log('************',navigation)
    return (
    //   <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>{headerName}</Title>
          </Body>
          <Right>
          <TouchableOpacity >
          <Button transparent onPress={() => navigation.navigate('Demo1')}>
              <Icon name='save' />
            </Button>
          </TouchableOpacity>
           <TouchableOpacity >
            <Button transparent onPress={() => navigation.navigate('Demo2')}>
              <Icon name='heart' />
            </Button>
            </TouchableOpacity>
            <TouchableOpacity >
            <Button transparent onPress={() => navigation.navigate('Demo3')}>
              <Icon name='menu' />
            </Button>
            </TouchableOpacity>
          </Right>
        </Header>
    //   </Container>
    );
  }
}