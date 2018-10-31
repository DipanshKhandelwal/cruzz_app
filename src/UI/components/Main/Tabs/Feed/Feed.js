import React, {Component} from 'react';
import { View, ScrollView } from "react-native";
import CardOne from '../../Cards/CardOne'
import CardTwo from '../../Cards/CardTwo'
import MyHeader from '../../MyHeader/MyHeader'
import { ListItem, Thumbnail, Text , Left, Body, Right } from 'native-base';
import Status from '../../Status/Status.js';

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
                    <MyHeader name="Feed" click={()=>this.props.navigation.toggleDrawer()} color='#39acef'/>
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
                <Status />
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