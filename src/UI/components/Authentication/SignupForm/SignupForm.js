import React, {Component} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import Image from 'react-native-remote-svg'

class signupForm extends Component {

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
                        fontSize: 60,
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
                    }}/>
    
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
                        // onChangeText={(text) => this.setState({text})}
                        // value={this.state.text}
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
                    }}/>
    
                    <TextInput
                        placeholder = 'Confirm Password'
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
                        // onChangeText={(text) => this.setState({text})}
                        // value={this.state.text}
                    />
    
                    <View style={{
                        margin: 10,
                        width: '100%',
                    }}>
                        <Button
                            title="Register"
                            style={{
                                color: 'blue',
                            }}
                            // onPress={() => this.props.navigation.navigate('SignUp')}
                            // onChangeText={(text) => this.setState({text})}
                            // value={this.state.text}
                        />
                    </View>
    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} >
                        <Text>
                            Already a member? Login here 
                        </Text>
                    </TouchableOpacity>
    
                </View>
            </View>
            </View>
            );
    }
}

export default signupForm;
