import React, { Component } from 'react';
import { TouchableOpacity } from "react-native";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import Image from 'react-native-remote-svg';
import Icon from 'react-native-vector-icons/AntDesign';
const axios = require('axios');

export default class CardOne extends Component {

    state = {
        post: null
    }

    componentDidMount() {
        this.setState({
          post: this.props.post
        });
    }

    handleDateTime = (date) => {
        const dateLocal = new Date(date);
        return (String(dateLocal.toDateString()));
    }

  render() {

    if(this.state.post == null) return null;

    return (
        <Card>
        <CardItem>
            <Left>
            <TouchableOpacity onPress={this.props.openProfile}>
            {
                this.state.post.author ?
                    this.state.post.author.image?
                        <Thumbnail
                            source={{ uri: this.state.post.author.image }}
                        />
                        :
                        <Thumbnail source={require('../../../../images/profile.jpg')} style={{ marginBottom: 10 }} />
                    :
                    null
            }
            </TouchableOpacity>
            <Body>
                <TouchableOpacity onPress={this.props.openPost} >
                    <Text>
                        { this.state.post.title }
                    </Text>
                </TouchableOpacity>
                <Text note>{this.state.post.author.first_name + " " + this.state.post.author.last_name} ( @{this.state.post.author.username} )</Text>
            </Body>
            </Left>
        </CardItem>
        <CardItem>
            <TouchableOpacity onPress={this.props.openPost} >
            <Text style={{ marginLeft: 30 }} >
                { this.state.post.body }
            </Text>
            </TouchableOpacity>
        </CardItem>
        <CardItem>
            <Right style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Text style={{ color: '#ccc', fontSize:13, paddingRight: 0, marginRight: 0, float: 'right' }} >{ this.handleDateTime(this.state.post.createdAt) }</Text>
            </Right>
        </CardItem>
        </Card>
    );
  }
}