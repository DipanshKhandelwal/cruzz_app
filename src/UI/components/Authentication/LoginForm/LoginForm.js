import React, {Component} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import Image from 'react-native-remote-svg';
import { connect } from 'react-redux';
import { loginEmailChanged, loginPasswordChanged, loginUser } from '../../../../actions';
import { Spinner } from 'native-base';
import { bindActionCreators } from 'redux';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.loginEmailChanged(text);
    }

    onPasswordChange(text) {
        this.props.loginPasswordChanged(text);
    }

    onLoginButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
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
                }}
                // onPress={() => this.props.navigation.navigate('Drawer')}
                onPress={() => this.onLoginButtonPress()}
            />
        );
    }

    render() {
        return(
            <View
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
                marginTop: 20,
                marginRight: 15,
                marginLeft: 15,
                elevation: 10
            }}>
            
                <View style={{
                    marginTop:50,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>

                    <Image source={require('../../../../images/index3.svg')} />

                    <Text style={{
                        fontSize: 80,
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
                            height: 43,
                            color: '#3f3f3f',
                            // borderRadius: 17
                        }}
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
    
                    <TextInput
                        placeholder = 'Password'
                        style={{
                            textAlign: 'center',
                            borderColor: 'gray',
                            borderWidth: .2,
                            width: '100%',
                            height: 43,
                            margin: 10,
                            color: '#3f3f3f',
                            // borderRadius: 17
                        }}
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />

                    <Text style={ styles.errorTextStyle }>
                        {this.props.error}
                    </Text>
    
                    <View style={{
                        margin: 10,
                        width: '100%',
                    }}>
                        {this.renderLoginButton()}
                    </View>
    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')} >
                        <Text>
                            Not a user yet?
                        </Text>
                    </TouchableOpacity>
    
                </View>
            </View>
            </View>
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
    const { loginEmail, loginPassword, loginError, user, loginLoading } = auth;
    return{ email: loginEmail, password: loginPassword, error: loginError, user, loading: loginLoading };
};

const matchDispatchToProps = ( dispatch ) => {
    return bindActionCreators({
        loginUser: loginUser,
        loginEmailChanged: loginEmailChanged,
        loginPasswordChanged: loginPasswordChanged
    }, dispatch);
}

export default connect(mapStatetoProps, matchDispatchToProps )(LoginForm);
