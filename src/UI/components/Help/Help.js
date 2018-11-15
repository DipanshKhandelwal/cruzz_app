import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from "react-native";

class Help extends Component {
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
                    Contact Us : 
                </Text>
                <TouchableOpacity onPress={()=>Linking.openURL('mailto:201652013@iiitvadodara.ac.in')} >
                        <Text style={{fontSize: 20, color: 'blue'}} >help@vconnect.com</Text>
                </TouchableOpacity>
            </View>
            );
    }
}

export default Help;