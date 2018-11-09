import React, { Component } from 'react';
import { TouchableOpacity } from "react-native";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Image from 'react-native-remote-svg';

export default class CardOne extends Component {

    handleDateTime = (date) => {
        const dateLocal = new Date(date);
        return (String(dateLocal.toDateString()));
    }

  render() {
    return (
        <Card>
        <CardItem>
            <Left>
            <TouchableOpacity>
            {
                this.props.post.author ? 
                <Thumbnail
                    source={{ uri: this.props.post.author.image }}
                />
                : 
                <Thumbnail source={require('../../../../images/profile.jpg')} style={{ marginBottom: 10 }} />
            }
            </TouchableOpacity>
            <Body>
                <TouchableOpacity>
                    <Text>
                        { this.props.post.title }
                    </Text>
                </TouchableOpacity>
                <Text note>{this.props.post.author.first_name + " " + this.props.post.author.last_name} ( @{this.props.post.author.username} )</Text>
            </Body>
            </Left>
        </CardItem>
        <CardItem cardBody>
            <Text style={{ marginLeft: 30 }} >
                { this.props.post.body }
            </Text>
        </CardItem>
        <CardItem>
            <Right style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Text style={{ color: '#ccc', fontSize:13, paddingRight: 0, marginRight: 0, float: 'right' }} >{ this.handleDateTime(this.props.post.createdAt) }</Text>
            </Right>
        </CardItem>
        </Card>
    );
  }
}