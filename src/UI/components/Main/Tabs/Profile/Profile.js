import React, {Component} from 'react';
import { ScrollView, View, Text } from "react-native";
import CardOne from "../../Cards/CardOne";
import CardTwo from "../../Cards/CardTwo";
import { Left, Right, Body, ListItem, Thumbnail, Input, Item, Content, Textarea } from "native-base";
import MyHeader from '../../MyHeader/MyHeader';
import Status from '../../Status/Status.js';


class Profile extends Component {

    render() {
        return(
            <ScrollView>
              <MyHeader name="Profile" click={()=>this.props.navigation.toggleDrawer()} color='#ff3838' />


              <View style={{
                  backgroundColor: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 5,
                  shadowColor: '#ffffff',
                  shadowOpacity: 1,
                  shadowOffset: { width: 5, height: 5 },
                  margin: 5,
                  marginBottom: 0,
                  elevation: 3
              }}>
                <View style={{
                  backgroundColor: '#3f3f3f',
                  display: 'flex',
                  flex :1,
                  height: 100
                }} />

                <View style={{
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  flex :1,
                  height: 90
                }} />

                <View                
                  style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    top: 60,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }} >
                  <Thumbnail
                    source={require('../../../../../images/profile.jpg')}
                  />
                  <Text style={{fontSize: 25, fontWeight: 'bold'}} >Monal Shadi</Text>
                  <Text>Daddu ka status</Text>
                </View>
              </View>

              <Status />

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