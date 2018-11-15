import _ from 'lodash';
import React, {Component} from 'react';
import { ScrollView, View, Text, Image, RefreshControl } from "react-native";
import CardOne from "../../Cards/CardOne";
import { Left, Right, Body, ListItem, Thumbnail, Input, Item, Content, Textarea } from "native-base";
import MyHeader from '../../MyHeader/MyHeader';
import Status from '../../Status/Status.js';
import Following from '../../Following/Following.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
fetchFollowers,
fetchFollowing,
fetchAllPostCreated,
postReset,
postDescriptionChanged,
postBodyChanged,
postTitleChanged,
userSelected,
postSelected
} from '../../../../../actions';

class Profile extends Component {
  
    componentDidMount() {
      this.props.fetchFollowers(this.props.user);
      this.props.fetchFollowing(this.props.user);
      this.props.fetchAllPostCreated(this.props.user);
      this.props.postReset();
    }

    _onRefresh = () => {
      this.props.fetchFollowers(this.props.user);
      this.props.fetchFollowing(this.props.user);
      this.props.fetchAllPostCreated(this.props.user);
      this.props.postReset();
    }

    render() {

      if(!this.props.user){
        this.props.navigation.navigate('Login')
      }

      return(
          <ScrollView
            style={{ backgroundColor: '#ebf7f9' }}
            refreshControl={
              <RefreshControl
                refreshing={this.props.loading}
                onRefresh={this._onRefresh}
              />
            }
          >
            <MyHeader name="Profile" click={()=>this.props.navigation.toggleDrawer()} color='#ff3838' />


            <View style={{
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 5,
                shadowColor: '#ffffff',
                shadowOpacity: 1,
                shadowOffset: { width: 5, height: 5 },
                margin: 5,
                marginBottom: 0,
                elevation: 3
            }}>
              <View style={{
                background: 'transpaent',
                display: 'flex',
                flex :1,
                height: 100,
              }} >

                {
                  this.props.profile ? 
                    <Image style={{
                      display: 'flex',
                      flex :1,
                    }}
                      source={{uri: this.props.profile.cover}}
                    />
                    :
                    null
                }

              </View>

              <View style={{
                backgroundColor: '#ffffff',
                display: 'flex',
                flex :1,
                height: 90
              }} />

              <View                
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  top: 60,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }} >
                {
                    this.props.profile ? 
                    <Thumbnail
                        source={{ uri: this.props.profile.image }}
                    />
                    : 
                    <Thumbnail source={require('../../../../../images/profile.jpg')} style={{ marginBottom: 10 }} />
                }
                <Text style={{fontSize: 25, fontWeight: 'bold'}} >
                  {
                    this.props.user ? this.props.user.username : "User Name"
                  }
                </Text>
                <Text>
                  Status . . .
                </Text>
              </View>
            </View>

            <Status press={()=> this.props.navigation.navigate('Post')} />
            <Following
              clickFollowers = {()=>this.props.navigation.navigate('FollowersList', { list: this.props.followers, type:'Followers' })}
              clickFollowing = {()=>this.props.navigation.navigate('FollowersList', { list: this.props.following, type:'Following' })}
              followers={ this.props.followers ? this.props.followers.length : 0 }
              following={ this.props.following ? this.props.following.length : 0 }
            />
            {
                _.map(this.props.posts, (item, index)=>
                    <CardOne
                      refreshFeed={this._onRefresh}
                      openPost={()=>this.props.navigation.navigate('OtherPost', {post: item})}
                      openProfile={()=>{
                        if(item.author.username != this.props.username){
                            this.props.navigation.navigate('OtherProfile', {user: item.author})
                        }else{
                            this.props.navigation.navigate('Profile')
                        }
                    }}
                      key={index}
                      post={item}
                    />
                )
            }
        </ScrollView>
      );
    }
}

const mapStatetoProps = (state) => {
  const { following, followers, posts, loading } = state.profile;
  const { user, profile } = state.auth;
  const { post } = state.post;
  return{ user, profile, following, followers, posts, loading, post };
};

const matchDispatchToProps = ( dispatch ) => {
  return bindActionCreators({
    fetchFollowing: fetchFollowing,
    fetchFollowers: fetchFollowers,
    fetchAllPostCreated: fetchAllPostCreated,
    postReset: postReset,
    postDescriptionChanged: postDescriptionChanged,
    postBodyChanged: postBodyChanged,
    postTitleChanged: postTitleChanged,
    userSelected: userSelected,
    postSelected: postSelected
  }, dispatch);
}

export default connect(mapStatetoProps, matchDispatchToProps )(Profile);
