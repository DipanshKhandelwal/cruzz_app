import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import { ListItem, Thumbnail, Body, Text, Left, Right } from 'native-base';

class FollowersList extends React.Component {
    render() {
        return(
            <View style={{
                display: 'flex',
                flex:1,
                flexDirection: 'column'
            }} >
            <View style={{
                alignItems: 'center'
            }} >
                <Text style={{
                    fontSize: 30,
                    margin: 20
                }} >{
                    this.props.navigation.state.params.type
                }</Text>
            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
            {
                this.props.navigation.state.params.list ?

                this.props.navigation.state.params.list.map((item, index)=>
                <ListItem avatar>
                    <Left>
                    {
                        item.image ? 
                        <Thumbnail
                            source={{ uri: item.image }}
                        />
                        : 
                        <Thumbnail source={require('../../../images/profile.jpg')} style={{ marginBottom: 10 }} />
                    }
                    </Left>
                    <Body>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('OtherProfile', {user: item})} >
                        <Text>
                            {
                                item.username
                            }
                        </Text>
                        </TouchableOpacity>
                        <Text note> Status . . . </Text>
                    </Body>
                    <Right>
                        <Text note>3:43 pm</Text>
                    </Right>
                </ListItem>
                )

                :

                <Text>
                    List is empty
                </Text>
            }
            </View>
            </View>
        );
    }
}

export default FollowersList;