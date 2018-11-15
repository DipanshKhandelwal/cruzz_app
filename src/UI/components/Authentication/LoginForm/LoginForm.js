import React, {Component} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import Image from 'react-native-remote-svg';
import { connect } from 'react-redux';
import { loginEmailChanged, loginUsernameChanged, loginPasswordChanged, loginUser } from '../../../../actions';
import { Spinner } from 'native-base';
import { bindActionCreators } from 'redux';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.loginEmailChanged(text);
    }

    onUsernameChange(text) {
        this.props.loginUsernameChanged(text);
    }

    onPasswordChange(text) {
        this.props.loginPasswordChanged(text);
    }

    onLoginButtonPress() {
        const { email, username, password } = this.props;
        this.props.loginUser({ email, username, password });
    }

    renderLoginButton() {
        if (this.props.loading) {
            return <Spinner color="blue" />;
        }

        return(
            <Button
                title="Login"
                style={{
                    color: 'blue',
                    marginBottom: 50
                }}
                onPress={() => this.onLoginButtonPress()}
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
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#fff',
                marginTop: 20,
                marginRight: 15,
                marginLeft: 15,
                elevation: 10,
                marginBottom: 30,
            }}>
            
                <View style={{
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>

                    <Image source={require('../../../../images/index-no-spin.svg')} />

                    <Text style={{
                        fontSize: 60,
                    }} >
                        Vconnect
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
                        placeholder = 'Username'
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
                            height: 35,
                            color: '#3f3f3f',
                            // borderRadius: 17
                        }}
                        type="password"
                        secureTextEntry={true}
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />

                    <Text style={ styles.errorTextStyle }>
                        {this.props.error}
                    </Text>
    
                    <View style={{
                        margin: 10,
                        marginBottom: 5,
                        width: '100%',
                    }}>
                        {this.renderLoginButton()}
                    </View>
    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')} >
                        <Text>
                            Not a user yet? Register here
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
    const { loginEmail, loginUsername, loginPassword, loginError, user, loginLoading } = auth;
    return{ email: loginEmail, username: loginUsername, password: loginPassword, error: loginError, user, loading: loginLoading };
};

const matchDispatchToProps = ( dispatch ) => {
    return bindActionCreators({
        loginUser: loginUser,
        loginEmailChanged: loginEmailChanged,
        loginUsernameChanged: loginUsernameChanged,
        loginPasswordChanged: loginPasswordChanged
    }, dispatch);
}

export default connect(mapStatetoProps, matchDispatchToProps )(LoginForm);
