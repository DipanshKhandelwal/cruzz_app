import React from 'react';
import { View, Text } from 'react-native';
import { Textarea, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const following = (props) => {
    return(
        <View style={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 5,
            marginRight: 5,
            marginTop:5,
            borderRadius: 5,
            shadowColor: '#ffffff',
            shadowOpacity: 1,
            shadowOffset: { width: 5, height: 5 },
            elevation: 3
        }}>

            <View
                style={{ 
                    display: 'flex',
                    flexDirection: 'row',
                 }} >

                <Button
                    transparent
                    onPress={props.clickFollowers}
                    style={{
                        flex :1,
                        justifyContent: 'center',
                        flexDirection: 'column',
                        padding: 5,
                        backgroundColor: '#dededeb5',
                        borderRadius: 0,
                        borderBottomLeftRadius: 5,
                        borderRightColor: '#ffffff15',
                        borderRightWidth: .5
                    }}>
                    <Text style={{fontWeight: 'bold', color:'#1979e8c9'}} >
                        { props.followers }
                    </Text>
                    <Text style={{fontWeight: 'bold'}} >Followers</Text>
                </Button>

                <Button
                    transparent
                    onPress={props.clickFollowing}
                    style={{
                        flex :1,
                        justifyContent: 'center',
                        flexDirection: 'column',
                        padding: 5,
                        backgroundColor: '#dededeb5',
                        borderRadius: 0,
                        borderBottomRightRadius: 5,
                    }}>
                    <Text style={{fontWeight: 'bold', color:'#1979e8c9'}} >
                        { props.following }
                    </Text>
                    <Text style={{fontWeight: 'bold'}} >Following</Text>
                </Button>

            </View>
        </View>
    );
}

export default following;