import React from 'react';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';


import LoginForm from './UI/components/Authentication/LoginForm/LoginForm';
import SignupForm from './UI/components/Authentication/SignupForm/SignupForm';
import Feed from './UI/components/Main/Tabs/Feed/Feed'
import Profile from './UI/components/Main/Tabs/Profile/Profile'
import Explore from './UI/components/Main/Tabs/Explore/Explore'

const RootStack = createStackNavigator(
  {
    Login: { screen: LoginForm},
    SignUp: { screen: SignupForm},
    Main: {
      screen:  createMaterialTopTabNavigator(
      {
      Feed:
      { screen: Feed,
        navigationOptions: {
          tabBarLabel:"Feeds Page",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="newspaper-o" size={20} color="#131313" />
          )
        }
      },
      Profile:
      {screen: Profile,
        navigationOptions: {
          tabBarLabel:"Profile Page",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="user-o" size={20} color="#131313" />
          ),
        }
      },
      Explore:
      {screen: Explore,
        navigationOptions: {
          tabBarLabel:"Explore Page",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="handshake-o" size={20} color="#131313" />
          ),
        }
       }
     },
     {
      tabBarPosition: 'bottom',
      initialRouteName: 'Feed',
      animationEnabled: true,
      tabBarOptions: { 
        showIcon: true,
        showLabel: false,
        activeTintColor: '#ffb642',
        inactiveTintColor: '#c42929',
        style:{
          backgroundColor: '#5a90e8',
          borderTopWidth:1,
          borderTopColor:'#D3D3D3'
        },
        indicatorStyle: {
          backgroundColor: "#081428",
        }
      },
     }),
    }
  },
  {
    initialRouteName: 'Main',
    navigationOptions : {
      header: null
    }
  },
);

export default RootStack;
