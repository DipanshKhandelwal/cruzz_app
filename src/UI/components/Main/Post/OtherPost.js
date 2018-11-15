import React, {Component} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ScrollView, Dimensions} from "react-native";
import Image from 'react-native-remote-svg';
import { connect } from 'react-redux';
import { Spinner, Right, Thumbnail, CardItem, Left } from 'native-base';
import OtherProfile from '../../OtherProfile/OtherProfile';
import Icon from 'react-native-vector-icons/AntDesign';
import { bindActionCreators } from 'redux';
const axios = require('axios');
import _ from 'lodash';
import CardComments from '../Cards/CardComments';

import {
    fetchFeed,
} from '../../../../actions';

class OtherPost extends Component {

    handleDateTime = (date) => {
        const dateLocal = new Date(date);
        return (String(dateLocal.toDateString()));
    }

    state = {
        post: null,
        comments: null
    }

    componentDidMount() {
        this.setState({
          post: this.props.navigation.state.params.post
        });

        axios.defaults.headers.common['Authorization'] = 'Token '+this.props.user.token;
        axios.get(
            `https://cruzz.herokuapp.com/api/post/view/${this.props.navigation.state.params.post.slug}`,
        )
        .then((response)=>{
          this.setState({
              post: response.data.post
          })

          axios.defaults.headers.common['Authorization'] = 'Token '+this.props.user.token;
          axios.get(
            `https://cruzz.herokuapp.com/api/post/${this.props.navigation.state.params.post.slug}/comments/view?limit=100&offset=0`,
            )
            .then((response)=>{
                this.setState({
                    comments: response.data.comments
                })
            })
        })
    }

    render() {

        if(this.state.post == null) return null;

        return(
            <ScrollView
                style={{
                    display: 'flex',
                    height: Dimensions.get('window').height,
                    flex: 1,
                    backgroundColor: '#ebf7f9',
                    padding: 10,
                    margin: 0
                }}
            >
    
            <View style={{
                display: 'flex',
                flex:1,
                height: Dimensions.get('window').height*0.9,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                marginRight: 15,
                marginLeft: 15,
                elevation: 10,
                marginBottom: 10,
            }}>
            
                <View style={{
                    marginTop:10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                
                <TouchableOpacity  onPress={()=>{
                    this.props.navigation.navigate('OtherProfile', {user: this.state.post.author});
                }}
                >
                    <Thumbnail
                        size={5}
                        source={{ uri: this.state.post.author.image }}
                    />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('OtherProfile', {user: this.state.post.author});
                }}>
                <Text style={{
                    marginTop: 10,
                    fontSize: 20,
                    fontWeight: '300'
                }} >
                    {this.state.post.author.first_name + " " + this.state.post.author.last_name}
                </Text>
                </TouchableOpacity>

                <Text style={{
                    marginBottom: 10,
                }} >
                    @{
                        this.state.post.author.username
                    }
                </Text>
                    <Text style={{
                        fontSize: 36,
                        marginLeft: 10
                    }} >
                        {this.state.post.title}
                    </Text>
    
                
                </View>
    
                <View style={{
                    margin: 10,
                    width: '100%',
                    padding: '5%',
                    marginBottom: 20
                    }}>
    
                    <Text style={{
                        fontSize: 25,
                    }} >
                    {this.state.post.body}
                    </Text>
                    {
                        this.state.post.description?
                        <View>
                        <Text style={{
                            fontSize: 20,
                            color: '#3f3f3f',
                            paddingTop: 15,
                            fontWeight: '600'
                        }}  >
                            Description
                        </Text>
                        <Text style={{
                            fontSize: 25,
                        }} >
                            {this.state.post.description}
                        </Text>
                        </View>
                        :
                        null
                    }
    
                </View>
                <CardItem style={{alignSelf: 'flex-end'}} >
                    <Left>
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
                    <TouchableOpacity >
                        <Icon name={'wechat'} size={25} color='#78c257'/>
                    </TouchableOpacity>
                    <Text style={{marginRight: 20}}>
                        {this.state.post.commentsCount}
                    </Text>
                    </Left>
                    <Right style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Text style={{ color: '#ccc', fontSize:13, paddingRight: 0, marginRight: 0, float: 'right' }} >{ this.handleDateTime(this.state.post.createdAt) }</Text>
                    </Right>
                </CardItem>
            </View>

            <View style={{marginBottom: 20}} >
                {
                    this.state.comments ?
                        _.map(this.state.comments, (item, index)=>
                            <CardComments 
                                comment={item}
                                openProfile={()=>{
                                    if(item.author.username != this.props.username){
                                        this.props.navigation.navigate('OtherProfile', {user: item.author})
                                    }else{
                                        this.props.navigation.navigate('Profile')
                                    }
                                }}
                            />   
                        )
                        :
                        null
                }
                
            </View>

            </ScrollView>
            );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStatetoProps = (state) => {
    const { user } = state.auth;
    return{ user };
};

const matchDispatchToProps = ( dispatch ) => {
    return bindActionCreators({
        fetchFeed: fetchFeed,
    }, dispatch);
}

export default connect(mapStatetoProps, matchDispatchToProps )(OtherPost);