import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from "react-native";

class ConfirmEmail extends Component {
    render() {
        return(
            <View style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }} >
                <Text style={{ fontSize: 20 }} >
                    Please confirm your email !!
                </Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')} >
                        <Text style={{fontSize: 20, color: 'blue'}} >Login here</Text>
                </TouchableOpacity>
            </View>
            );
    }
}

export default ConfirmEmail;