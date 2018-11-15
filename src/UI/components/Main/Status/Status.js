import React from 'react';
import { View, Text } from 'react-native';
import { Textarea, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const status = (props) => {
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
                    onPress={props.press}
                    transparent
                    style={{
                        flex :1,
                        justifyContent: 'center',
                        flexDirection: 'row',
                        padding: 5,
                        backgroundColor: '#dededeb5',
                        borderRadius: 0,
                        borderBottomLeftRadius: 5,
                        borderRightColor: '#ffffff15',
                        borderRightWidth: .5
                    }}>
                    <Icon name='pencil' size={25} style={{marginRight: 25}} color='#1979e8c9'/>
                    <Text style={{fontWeight: 'bold'}} >Post</Text>
                </Button>

            </View>
        </View>
    );
}

export default status;