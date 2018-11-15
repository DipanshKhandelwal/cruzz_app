import React, { Component } from 'react';
import { TouchableOpacity } from "react-native";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import Image from 'react-native-remote-svg';
import Icon from 'react-native-vector-icons/AntDesign';
const axios = require('axios');

export default class CardComment extends Component {

    state = {
        comment: null
    }

    componentDidMount() {
        this.setState({
          comment: this.props.comment
        });
    }

    // upVote = () => {
    //     // this.props.loading();
    //     const URI = 'https://cruzz.herokuapp.com/api/post/' + this.state.post.slug + '/upvote/';
    //     if(this.state.post.upvoted) {
    //       axios.delete(URI).then(res => {
    //         this.setState({
    //           post: res.data.post
    //         });
    //         // this.props.loaded();
    //       }).catch(err => {
    //         console.log(err.response);
    //         // this.props.loaded();
    //       });
    //     } else {
    //       axios.get(URI).then(res => {
    //         console.log(res.data);
    //         this.setState({
    //           post: res.data.post
    //         });
    //         if(this.state.post.downvoted) {
    //           this.downVote();
    //         }
    //       }).catch(err => {
    //         console.log(err.response);
    //       });
    //     //   this.props.loaded();
    //     }
    //     this.props.refreshFeed();
    // }
    
    // downVote = () => {
    //     const URI = 'https://cruzz.herokuapp.com/api/post/' + this.state.post.slug + '/downvote/';
    //     if(this.state.post.downvoted) {
    //       axios.delete(URI).then(res => {
    //         this.setState({
    //           post: res.data.post
    //         });
    //         // this.props.loaded();
    //       }).catch(err => {
    //         console.log(err.response);
    //         // this.props.loaded();
    //       });
    //     } else {
    //       axios.get(URI).then(res => {
    //         this.setState({
    //           post: res.data.post
    //         });
    //         if(this.state.post.upvoted) {
    //           this.upVote();
    //         }
    //       }).catch(err => {
    //         console.log(err.response);
    //       });
    //     }
    //     this.props.refreshFeed();
    // }

    // favoritePost = () => {
    //     const URI = 'https://cruzz.herokuapp.com/api/post/' + this.state.post.slug + '/favorite/';
    //     if(this.state.post.favorited) {
    //       axios.delete(URI).then(res => {
    //         this.setState({
    //           post: res.data.post
    //         });
    //       }).catch(err => {
    //         console.log(err.response);
    //       });
    //     } else {
    //       axios.get(URI).then(res => {
    //         console.log(res.data);
    //         this.setState({
    //           post: res.data.post
    //         });
    //       }).catch(err => {
    //         console.log(err.response);
    //       });
    //     }
    //     this.props.refreshFeed();
    // }

    handleDateTime = (date) => {
        const dateLocal = new Date(date);
        return (String(dateLocal.toDateString()));
    }

  render() {

    if(this.state.comment == null) return null;

    return (
        <Card>
        <CardItem>
            <Left>
            <TouchableOpacity onPress={this.props.openProfile}>
            {/* <TouchableOpacity> */}
            {
                this.state.comment.author ?
                    this.state.comment.author.image?
                        <Thumbnail
                            source={{ uri: this.state.comment.author.image }}
                        />
                        :
                        <Thumbnail source={require('../../../../images/profile.jpg')} style={{ marginBottom: 10 }} />
                    :
                    null
            }
            </TouchableOpacity>
            <Body>
                <TouchableOpacity  onPress={this.props.openProfile} >
                    <Text>
                    {this.state.comment.author.first_name + " " + this.state.comment.author.last_name}
                    </Text>
                </TouchableOpacity>
                <Text note>@{this.state.comment.author.username}</Text>
            </Body>
            </Left>
        </CardItem>
        <CardItem>
            <TouchableOpacity>
            <Text style={{ marginLeft: 30 }} >
                { this.state.comment.body }
            </Text>
            </TouchableOpacity>
        </CardItem>
        <CardItem>
            {/* <Left>
                <TouchableOpacity onPress={this.upVote} >
                    <Icon name={this.state.post.upvoted?'like1':'like2'} size={25} color='#1979e8c9'/>
                </TouchableOpacity>
                <Text style={{marginRight: 20}}>
                    {this.state.post.upvotesCount}
                </Text>
                <TouchableOpacity onPress={this.downVote} >
                    <Icon name={this.state.post.downvoted?'dislike1':'dislike2'} size={25} color='#ff3838'/>
                </TouchableOpacity>
                <Text style={{marginRight: 20}}>
                    {this.state.post.downvotesCount}
                </Text>
                <TouchableOpacity onPress={this.favoritePost} >
                    <Icon name={this.state.post.favorited?'heart':'hearto'} size={25} color='#ff3399'/>
                </TouchableOpacity>
                <Text style={{marginRight: 20}}>
                    {this.state.post.favoritesCount}
                </Text>
                <TouchableOpacity onPress={this.props.openPost} >
                    <Icon name={'wechat'} size={25} color='#78c257'/>
                </TouchableOpacity>
                <Text style={{marginRight: 20}}>
                    {this.state.post.commentsCount}
                </Text>
            </Left> */}
            <Right style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Text style={{ color: '#ccc', fontSize:13, paddingRight: 0, marginRight: 0, float: 'right' }} >{ this.handleDateTime(this.state.comment.createdAt) }</Text>
            </Right>
        </CardItem>
        </Card>
    );
  }
}