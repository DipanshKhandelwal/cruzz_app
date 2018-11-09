import React, {Component} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ScrollView } from "react-native";
import Image from 'react-native-remote-svg';
import { connect } from 'react-redux';
import { postDescriptionChanged, postBodyChanged, postTitleChanged, createPost, postReset } from '../../../../actions';
import { Spinner } from 'native-base';
import { bindActionCreators } from 'redux';

class Post extends Component {

    onTitleChange(text) {
        this.props.postTitleChanged(text);
    }

    onBodyChange(text) {
        this.props.postBodyChanged(text);
    }

    onDescriptionChange(text) {
        this.props.postDescriptionChanged(text);
    }

    onCreatePostPress() {
        const { description, title, body, user } = this.props;
        this.props.createPost({ description, title, body, user });
    }

    renderPostButton() {
        if (this.props.loading) {
            return <Spinner color="blue" />;
        }

        return(
            <Button
                title="Post"
                style={{
                    color: 'blue',
                    marginBottom: 50
                }}
                // onPress={() => this.props.navigation.navigate('Drawer')}
                onPress={() => this.onCreatePostPress()}
            />
        );
    }

    render() {

        if(this.props.post) {
            this.props.postReset()
            this.props.navigation.navigate('Drawer');
        }

        return(
            <ScrollView
                style={{
                    display: 'flex',
                    flex: 1,
                    backgroundColor: '#ebf7f9',
                    padding: 0,
                    margin: 0
                }}
            >
    
            <View style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#fff',
                marginTop: 20,
                marginRight: 15,
                marginLeft: 15,
                elevation: 10,
                marginBottom: 30
            }}>
            
                <View style={{
                    marginTop:50,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>

                    <Image source={require('../../../../images/index-no-spin.svg')} />

                    <Text style={{
                        fontSize: 60,
                    }} >
                        Post
                    </Text>
    
                
                </View>
    
                <View style={{
                    margin: 10,
                    width: '100%',
                    alignItems: 'center',
                    padding: '5%',
                    marginBottom: 20
                    }}>
    
                    <TextInput
                        placeholder = 'Title'
                        style={{
                            textAlign: 'center',
                            borderColor: 'gray',
                            borderWidth: .2,
                            width: '100%',
                            height: 35,
                            color: '#3f3f3f',
                            // borderRadius: 17
                        }}
                        onChangeText={this.onTitleChange.bind(this)}
                        value={this.props.title}
                    />

                    <TextInput
                        placeholder = 'Body'
                        style={{
                            textAlign: 'center',
                            borderColor: 'gray',
                            borderWidth: .2,
                            width: '100%',
                            height: 35,
                            margin: 10,
                            color: '#3f3f3f',
                            // borderRadius: 17
                        }}
                        onChangeText={this.onBodyChange.bind(this)}
                        value={this.props.body}
                    />
    
                    <TextInput
                        placeholder = 'Description'
                        style={{
                            textAlign: 'center',
                            borderColor: 'gray',
                            borderWidth: .2,
                            width: '100%',
                            height: 35,
                            color: '#3f3f3f',
                            // borderRadius: 17
                        }}
                        type="password"
                        onChangeText={this.onDescriptionChange.bind(this)}
                        value={this.props.description}
                    />

                    <Text style={ styles.errorTextStyle }>
                        {this.props.error}
                    </Text>
    
                    <View style={{
                        margin: 10,
                        marginBottom: 5,
                        width: '100%',
                    }}>
                        {this.renderPostButton()}
                    </View>
    
                    <TouchableOpacity onPress={() => {
                        this.props.postReset();
                        this.props.navigation.navigate('Drawer')}
                    }>
                        <Text>
                            Discard !!
                        </Text>
                    </TouchableOpacity>
    
                </View>
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
    const { description, title, body, loading, post } = state.post;
    const { user } = state.auth;
    return{ description, title, body, user, loading, post };
};

const matchDispatchToProps = ( dispatch ) => {
    return bindActionCreators({
        postDescriptionChanged: postDescriptionChanged,
        postBodyChanged: postBodyChanged,
        postTitleChanged: postTitleChanged,
        createPost: createPost,
        postReset: postReset
    }, dispatch);
}

export default connect(mapStatetoProps, matchDispatchToProps )(Post);
