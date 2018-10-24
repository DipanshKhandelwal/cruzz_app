import React, {Component} from 'react';
import { View, ScrollView } from "react-native";
import CardOne from '../../Cards/CardOne'
import CardTwo from '../../Cards/CardTwo'

import { ListItem, Thumbnail, Text, Button , Left, Body, Right } from 'native-base';

class Feed extends Component {

    render() {
        return(
            <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#9ec3ff'
            }}>
                <View style={{
                    backgroundColor: 'white',

                }}>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../../../../res/load.gif')} />
                        </Left>
                        <Body>
                            <Text>Monal Shadi</Text>
                            <Text note>Hamesha Lagta H Apun Hi Bhagwaan H . .</Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>
                </View>
                <ScrollView>
                    <CardTwo/>
                    <CardOne/>
                    <CardTwo/>
                    <CardOne/>
                    <CardTwo/>
                    <CardOne/>
                </ScrollView>
            </View>
            );
    }
}

export default Feed;