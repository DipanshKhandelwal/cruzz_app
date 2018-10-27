import React, {Component} from 'react';
import { ScrollView, View, Text } from "react-native";
import CardOne from "../../Cards/CardOne";
import CardTwo from "../../Cards/CardTwo";
import { Left, Right, Body, ListItem, Thumbnail } from "native-base";
import MyHeader from '../../MyHeader/MyHeader';


class Profile extends Component {

    render() {
        return(
            <ScrollView>
              <MyHeader name="Profile" click={()=>this.props.navigation.toggleDrawer()} color='#ff3838' />
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
              <CardTwo/>
              <CardOne/>
              <CardTwo/>
              <CardOne/>
              <CardTwo/>
              <CardOne/>
          </ScrollView>
        );
    }
}

export default Profile;