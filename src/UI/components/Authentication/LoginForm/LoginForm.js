import React, {Component} from 'react';
import { View, Text, TextInput, Image, Button, ScrollView } from "react-native";

class loginForm extends Component {
    render() {
        return(
            <ScrollView
                style={{
                    height: '100%',
                    backgroundColor: '#84aff4',
                }}
            >
    
            <View style={{
                height: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#9ec3ff',
                marginTop: 20,
                marginRight: 15,
                marginLeft: 15
            }}>
            
                <View style={{
                    marginTop:50,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 80,
                    }} >
                        cruzz
                    </Text>
    
                    <Image source={require('../../../res/load.gif')} />
                
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
                            height: 43,
                            backgroundColor: '#84aff4',
                            color: '#3f3f3f',
                            borderRadius: 17
                    }}/>
    
                    <TextInput
                        placeholder = 'Password'
                        style={{
                            textAlign: 'center',
                            borderColor: 'gray',
                            borderWidth: .2,
                            width: '100%',
                            height: 43,
                            backgroundColor: '#84aff4',
                            margin: 10,
                            color: '#3f3f3f',
                            borderRadius: 17
                        }}
                        // onChangeText={(text) => this.setState({text})}
                        // value={this.state.text}
                    />
    
                    <View style={{
                        margin: 10,
                        width: '100%',
                    }}>
                        <Button
                            title="Login"
                            style={{
                                color: 'blue',
                            }}
                            onPress={() => this.props.navigation.navigate('SignUp')}
                            // onChangeText={(text) => this.setState({text})}
                            // value={this.state.text}
                        />
                    </View>
    
    
                    <Text>
                        Forgot Password ?
                    </Text>
    
    
                </View>
            </View>
            </ScrollView>
            );
    }
}

export default loginForm;