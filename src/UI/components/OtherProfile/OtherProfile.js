import _ from 'lodash';
import React, {Component} from 'react';
import { ScrollView, View, Text, Image, RefreshControl } from "react-native";
import CardOne from "../Main/Cards/CardOne";
import { Thumbnail, Button } from "native-base";
import Following from '../Main/Following/Following.js';
const axios = require('axios');
import { connect } from 'react-redux';

class OtherProfile extends Component {

    state={
      followers: null,
      following: null,
    }

    follow = () => {
      axios.defaults.headers.common['Authorization'] = 'Token '+this.props.user.token;
      axios.post(
          `https://cruzz.herokuapp.com/api/profile/${this.props.navigation.state.params.user.username}/follow`,
      )
      .then((response)=>{
        this.props.navigation.navigate('OtherProfile', { user: {...this.props.navigation.state.params.user, following: true} })
      })
    }

    unfollow = () => {
      axios.defaults.headers.common['Authorization'] = 'Token '+this.props.user.token;
      axios.delete(
          `https://cruzz.herokuapp.com/api/profile/${this.props.navigation.state.params.user.username}/follow`,
      )
      .then((response)=>{
        this.props.navigation.navigate('OtherProfile', { user: {...this.props.navigation.state.params.user, following: false} })
      })
    }

    renderFollowButton = () => {
      return(
        <Button full style={{ backgroundColor: '#1979e8c9', margin: 10}} onPress={()=>{
          if(this.props.navigation.state.params.user.following) {
            //unfollow
            this.unfollow()
          }else{
            // follow
            this.follow()
          }
        }} >
          <Text style={{ color: 'white' }} >
            {
              this.props.navigation.state.params.user.following ? "Unfollow" : "Follow"
            }
          </Text>
        </Button>
      );
    }
  
    componentDidMount() {
      this.fetchFollowers();
      this.fetchFollowing();
    }

    fetchFollowing = () => {
      axios.defaults.headers.common['Authorization'] = 'Token '+this.props.user.token;
      axios.get(
          `https://cruzz.herokuapp.com/api/profile/following/?user=${this.props.navigation.state.params.user.username}&limit=100&offset=0`,
      )
      .then((response)=>{
        this.setState({
          following: response.data.profiles
        })
      })
    }

    fetchFollowers = () => {
      axios.get(
        `https://cruzz.herokuapp.com/api/profile/followers/?user=${this.props.navigation.state.params.user.username}&limit=100&offset=0`,
    )
    .then((response)=>{
      this.setState({
        followers: response.data.profiles
      })
    })
    }

    _onRefresh = () => {
      this.fetchFollowers();
      this.fetchFollowing();
    }

    render() {
      if(this.props.user.username == this.props.navigation.state.params.user.username){
        this.props.navigation.navigate('Profile')
      }

      return(
          <ScrollView
            style={{ backgroundColor: '#ebf7f9' }}
            refreshControl={
              <RefreshControl
                onRefresh={this._onRefresh}
              />
            }
          >
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
                  this.props.navigation.state.params.user ? 
                    <Image style={{
                      display: 'flex',
                      flex :1,
                    }}
                      source={{uri: this.props.navigation.state.params.user.cover}}
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
                    this.props.navigation.state.params.user ? 
                    <Thumbnail
                        source={{ uri: this.props.navigation.state.params.user.image }}
                    />
                    : 
                    <Thumbnail source={require('../../../images/profile.jpg')} style={{ marginBottom: 10 }} />
                }
                <Text style={{fontSize: 25, fontWeight: 'bold'}} >
                  {
                    this.props.navigation.state.params.user ? this.props.navigation.state.params.user.username : "User Name"
                  }
                </Text>
                <Text>
                  Status . . .
                </Text>
              </View>
            </View>

            {/* <Status press={()=> this.props.navigation.navigate('Post')} /> */}
            <Following
              clickFollowers = {()=>this.props.navigation.navigate('FollowersList', { list: this.state.followers, type:'Followers' })}
              clickFollowing = {()=>this.props.navigation.navigate('FollowersList', { list: this.state.following, type:'Following' })}
              followers={ this.state.followers ? this.state.followers.length : 0 }
              following={ this.state.following ? this.state.following.length : 0 }
            />
            {
              this.renderFollowButton()
            }
            {
                _.map(this.props.posts, (item, index)=>
                    <CardOne
                        key={index}
                        post={item}
                        details={() => {
                          this.props.postSelected(item.post)
                          this.props.navigation.navigate('Post');
                        }}
                        profile={() => {
                            this.props.userSelected(item.author)
                            this.props.navigation.navigate('OtherProfile');
                        }}
                    />
                )
            }
        </ScrollView>
      );
    }
}

const mapStatetoProps = (state) => {
  const { user, profile } = state.auth;
  const { following, followers } = state.profile;
  return{ user, profile, followers, following}
};

// export default OtherProfile;
export default connect(mapStatetoProps, {} )(OtherProfile);
