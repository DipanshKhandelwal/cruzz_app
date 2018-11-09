import React, {Component} from 'react';
import { View, Text } from "react-native";
import { Thumbnail } from 'native-base';
import { connect } from 'react-redux';

class DrawerHeader extends Component {
    render() {

        // if(!this.props.user){
        //     this.props.navigation.navigate('Login')
        // }

        return (
            <View style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#d1d1d1',
                padding: 20
            }} >

                {
                    this.props.profile ? 
                    <Thumbnail
                        source={{ uri: this.props.profile.image }}
                    />
                    : 
                    <Thumbnail source={require('../../../../../images/profile.jpg')} style={{ marginBottom: 10 }} />
                }

                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: '#383838'
                    }} >
                    Display Name
                </Text>
        
                <Text
                    style={{
                        fontSize: 16
                    }} >
                    {
                        this.props.user? this.props.user.username : "@username"
                    }
                </Text>
            </View>
          );
    }
} 

const mapStatetoProps = ({ auth }) => {
    const { user, profile } = auth;
    return{ user, profile };
};

export default connect(mapStatetoProps)(DrawerHeader);

