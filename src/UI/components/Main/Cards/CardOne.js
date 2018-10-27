import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Image from 'react-native-remote-svg';

export default class CardOne extends Component {
  render() {
    return (
        <Card>
        <CardItem>
            <Left>
            <Thumbnail source={require('../../../../images/profile.jpg')} />
            <Body>
                <Text>Bla Bla Bla</Text>
                <Text note>GeekyAnts</Text>
            </Body>
            </Left>
        </CardItem>
        <CardItem cardBody>
            <Image source={require('../../../../images/profile.jpg')} style={{height: 50, width: 50, flex: 1}}/>
        </CardItem>
        <CardItem>
            <Left>
            <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
            </Button>
            </Left>
            <Body>
            <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
            </Button>
            </Body>
            <Right>
            <Text>11h ago</Text>
            </Right>
        </CardItem>
        </Card>
    );
  }
}