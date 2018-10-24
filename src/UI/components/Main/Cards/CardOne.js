import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardOne extends Component {
  render() {
    return (
        <Card>
        <CardItem>
            <Left>
            <Thumbnail source={require('../../../res/load.gif')} />
            <Body>
                <Text>Bla Bla Bla</Text>
                <Text note>GeekyAnts</Text>
            </Body>
            </Left>
        </CardItem>
        <CardItem cardBody>
            <Image source={require('../../../res/load.gif')} style={{height: 50, width: 50, flex: 1}}/>
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