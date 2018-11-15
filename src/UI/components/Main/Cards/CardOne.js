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

    upVote = () => {
        const URI = 'https://cruzz.herokuapp.com/api/post/' + this.state.post.slug + '/upvote/';
        if(this.state.post.upvoted) {
          axios.delete(URI).then(res => {
            this.setState({
              post: res.data.post
            });
          }).catch(err => {
            console.log(err.response);
          });
        } else {
          axios.get(URI).then(res => {
            console.log(res.data);
            this.setState({
              post: res.data.post
            });
            if(this.state.post.downvoted) {
              this.downVote();
            }
          }).catch(err => {
            console.log(err.response);
          });
        }
        this.props.refreshFeed();
    }
    
    downVote = () => {
        const URI = 'https://cruzz.herokuapp.com/api/post/' + this.state.post.slug + '/downvote/';
        if(this.state.post.downvoted) {
          axios.delete(URI).then(res => {
            this.setState({
              post: res.data.post
            });
          }).catch(err => {
            console.log(err.response);
          });
        } else {
          axios.get(URI).then(res => {
            this.setState({
              post: res.data.post
            });
            if(this.state.post.upvoted) {
              this.upVote();
            }
          }).catch(err => {
            console.log(err.response);
          });
        }
        this.props.refreshFeed();
    }

    favoritePost = () => {
        const URI = 'https://cruzz.herokuapp.com/api/post/' + this.state.post.slug + '/favorite/';
        if(this.state.post.favorited) {
          axios.delete(URI).then(res => {
            this.setState({
              post: res.data.post
            });
          }).catch(err => {
            console.log(err.response);
          });
        } else {
          axios.get(URI).then(res => {
            console.log(res.data);
            this.setState({
              post: res.data.post
            });
          }).catch(err => {
            console.log(err.response);
          });
        }
        this.props.refreshFeed();
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