import React, {Component} from 'react';
import { View, Text } from "react-native";
import { Thumbnail } from 'native-base';


class Profile extends Component {

    render() {
        return(
            <View style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <Text>
                    Profile
                </Text>
                <Thumbnail large source={require('../../../../res/load.gif')} />
            </View>
            );
    }
}

export default Profile;