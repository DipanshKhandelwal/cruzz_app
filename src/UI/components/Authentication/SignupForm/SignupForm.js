import React, {Component} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ScrollView } from "react-native";
import Image from 'react-native-remote-svg';
import { signUpEmailChanged, signUpUsernameChanged, signUpPasswordChanged, signUpConfirmPasswordChanged, signUpUser } from '../../../../actions';
import { connect } from 'react-redux';
import { Spinner } from 'native-base';
import { bindActionCreators } from 'redux';

class SignupForm extends Component {

    onEmailChange(text) {
        this.props.signUpEmailChanged(text);
    }

    onUsernameChange(text) {
        this.props.signUpUsernameChanged(text);
    }

    onPasswordChange(text) {
        this.props.signUpPasswordChanged(text);
    }

    onConfirmPasswordChange(text) {
        this.props.signUpConfirmPasswordChanged(text);
    }

    onSignUpButtonPress() {
        const { email, username, password, confirmPassword } = this.props;
        if(!this.props.error)
            this.props.signUpUser({ email, username, password });
    }

    renderSignUpButton() {
        if (this.props.loading) {
            return <Spinner color="blue" />;
        }

        return(
            <Button
                title="Register"
                style={{
                    color: 'blue',
                }}
                // onPress={() => this.props.navigation.navigate('Drawer')}
                onPress={() => this.onSignUpButtonPress()}
            />
        );
    }

    render() {

        if(this.props.user) {
            this.props.navigation.navigate('Drawer');
        }

        return(
            <ScrollView
                style={{
                    display: 'flex',
                    flex: 1,
                    backgroundColor: '#ebf7f9',
                    padding: 0
                }}
            >
    
            <View style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#fff',
                marginTop: 10,
                marginRight: 15,
                marginLeft: 15,
                elevation: 10
            }}>
            
                <View style={{
                    marginTop:10,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>

                    <Image style={{ marginTop: 0, marginBottom: -10 }} source={require('../../../../images/index3.svg')} />

                    <Text style={{
                        fontSize: 50,
                    }} >
                        cruzz
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
                        placeholder = 'Email'
                        style={{
                            textAlign: 'center',
                            borderColor: 'gray',
                            borderWidth: .2,
                            width: '100%',
                            height: 38,
                            color: '#3f3f3f',
                            // borderRadius: 17
                        }}
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
    
                    <TextInput
                        placeholder = 'Username'
                        style={{
                            textAlign: 'center',
                            borderColor: 'gray',
                            borderWidth: .2,
                            width: '100%',
                            height: 38,
                            margin: 10,
                            color: '#3f3f3f',
                            // borderRadius: 17
                        }}
                        onChangeText={this.onUsernameChange.bind(this)}
                        value={this.props.username}
                    />

                    <TextInput
                        placeholder = 'Password'
                        style={{
                            textAlign: 'center',
                            borderColor: 'gray',
                            borderWidth: .2,
                            width: '100%',
                            height: 38,
                            color: '#3f3f3f',
                            // borderRadius: 17
                        }}
                        secureTextEntry={true}
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}    
                    />
    
                    <TextInput
                        placeholder = 'Confirm Password'
                        style={{
                            textAlign: 'center',
                            borderColor: 'gray',
                            borderWidth: .2,
                            width: '100%',
                            height: 38,
                            margin: 10,
                            marginBottom: 0,
                            color: '#3f3f3f',
                            // borderRadius: 17
                        }}
                        secureTextEntry={true}
                        onChangeText={this.onConfirmPasswordChange.bind(this)}
                        value={this.props.confirmPassword}
                    />
    
                    <Text style={ styles.errorTextStyle }>
                        {this.props.error}
                    </Text>
    
                    <View style={{
                        margin: 10,
                        width: '100%',
                    }}>
                        {this.renderSignUpButton()}
                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} >
                        <Text>
                            Already a member? Login here 
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

const mapStatetoProps = ({ auth }) => {
    const { signUpEmail, signUpUsername, signUpPassword, signUpConfirmPassword, signUpError, user, signUpLoading } = auth;
    return{ email: signUpEmail, username: signUpUsername, password: signUpPassword, confirmPassword: signUpConfirmPassword , error: signUpError, user, loading: signUpLoading };
};

const matchDispatchToProps = ( dispatch ) => {
    return bindActionCreators({
        signUpUser: signUpUser,
        signUpEmailChanged: signUpEmailChanged,
        signUpUsernameChanged: signUpUsernameChanged,
        signUpPasswordChanged: signUpPasswordChanged,
        signUpConfirmPasswordChanged: signUpConfirmPasswordChanged
    }, dispatch);
}

export default connect(mapStatetoProps, matchDispatchToProps )(SignupForm);
