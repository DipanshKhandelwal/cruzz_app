import _ from 'lodash';
import React, {Component} from 'react';
import { View, ScrollView, RefreshControl } from "react-native";
import CardOne from '../../Cards/CardOne'
import MyHeader from '../../MyHeader/MyHeader'
import { ListItem, Thumbnail, Text , Left, Body, Right } from 'native-base';
import Status from '../../Status/Status.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    fetchFeed,
    postReset,
    postDescriptionChanged,
    postBodyChanged,
    postTitleChanged,
    userSelected,
    postSelected
} from '../../../../../actions';

class Feed extends Component {

    componentDidMount() {
        this.props.fetchFeed(this.props.user);
        this.props.postReset();
    }

    _onRefresh = () => {
        this.props.fetchFeed(this.props.user);
        this.props.postReset();
    }
    
    render() {

        if(!this.props.user){
            this.props.navigation.navigate('Login')
        }

        return(
            <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#ebf7f9'
            }}>
                <View style={{
                    backgroundColor: 'white',
                }}>
                    <MyHeader name="Feed" click={()=>this.props.navigation.toggleDrawer()} color='#39acef'/>
                    <ListItem avatar>
                        <Left>
                        {
                            this.props.profile ? 
                            <Thumbnail
                                source={{ uri: this.props.profile.image }}
                            />
                            : 
                            <Thumbnail source={require('../../../../../images/profile.jpg')} style={{ marginBottom: 10 }} />
                        }
                        </Left>
                        <Body>
                            <Text>
                                {
                                    this.props.user ? this.props.user.username : "User Name"
                                }
                            </Text>
                            <Text note> Status . . . </Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>
                </View>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.loading}
                            onRefresh={this._onRefresh}
                        />
                    }
                >
                    <Status press={()=> this.props.navigation.navigate('Post')}/>
                    {
                        _.map(this.props.feed, (item, index)=>
                            <CardOne
                                key={index}
                                post={item}
                            />
                        )
                    }
                </ScrollView>
            </View>
            );
    }
}

const mapStatetoProps = (state) => {
    const { user, profile } = state.auth;
    const { feed, loading } = state.feed;
    const { post } = state.post;
    return{ user, profile, feed, loading };
};

const matchDispatchToProps = ( dispatch ) => {
    return bindActionCreators({
        fetchFeed: fetchFeed,
        postReset: postReset,
        postDescriptionChanged: postDescriptionChanged,
        postBodyChanged: postBodyChanged,
        postTitleChanged: postTitleChanged,
        userSelected: userSelected,
        postSelected: postSelected
    }, dispatch);
}

export default connect(mapStatetoProps, matchDispatchToProps )(Feed);
