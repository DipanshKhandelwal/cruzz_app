import React from 'react';
import { View, Text } from "react-native";
import { Thumbnail } from 'native-base';

const drawerHeader = (props) => (
    <View style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#d1d1d1',
        padding: 20
    }} >
        <Thumbnail source={require('../../../../../images/profile.jpg')} style={{ marginBottom: 10 }} />

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
            @username
        </Text>
    </View>
  );

export default drawerHeader;
