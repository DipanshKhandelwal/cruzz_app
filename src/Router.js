import React from 'react';
import { createStackNavigator, createMaterialTopTabNavigator, createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Image from 'react-native-remote-svg';
import {Thumbnail, View} from 'native-base';

import LoginForm from './UI/components/Authentication/LoginForm/LoginForm';
import SignupForm from './UI/components/Authentication/SignupForm/SignupForm';
import SplashScreen from './UI/components/SplashScreen/SplashScreen';
import Settings from './UI/components/Settings/Settings';
import Post from './UI/components/Main/Post/Post';
import OtherPost from './UI/components/Main/Post/OtherPost';
import Help from './UI/components/Help/Help';
import FollowersList from './UI/components/FollowersList/FollowersList';
import CustomDrawerContentComponent from './UI/components/Main/Drawer/CustomDrawerContentComponent/CustomDrawerContentComponent';
import Feed from './UI/components/Main/Tabs/Feed/Feed'
import Profile from './UI/components/Main/Tabs/Profile/Profile'
import OtherProfile from './UI/components/OtherProfile/OtherProfile'
import Explore from './UI/components/Main/Tabs/Explore/Explore'
import Web from './UI/components/Web/Web'
import ConfirmEmail from './UI/components/ConfirmEmail/ConfirmEmail'

const RootStack = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen},
    Login: { screen: LoginForm},
    SignUp: { screen: SignupForm},
    Settings: { screen: Settings},
    Help: { screen: Help},
    FollowersList: { screen: FollowersList},
    Post: { screen: Post},
    OtherPost: { screen: OtherPost},
    OtherProfile: { screen: OtherProfile },
    ConfirmEmail: { screen: ConfirmEmail },
    Web: { screen: Web },
    Drawer: {
      screen:  createDrawerNavigator(
      {
        Main: {
          screen:  createMaterialTopTabNavigator(
        {
          Feed:
          { screen: Feed,
            navigationOptions: {
              tabBarLabel:"Feeds Page",
              tabBarIcon: ({ tintColor }) => (
                <Icon name="feed" size={20} color="#39acef" />
              )
            },
          },
          Profile:
          {screen: Profile,
            navigationOptions: {
              tabBarLabel:"Profile Page",
              tabBarIcon: ({ tintColor }) => (
                <Icon name="user" size={20} color="#ff3838" />
              ),
            }
          },
          Explore:
          {screen: Explore,
            navigationOptions: {
              tabBarLabel:"Explore Page",
              tabBarIcon: ({ tintColor }) => (
                <Icon name="search" size={20} color="#3e37ff" />
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
          pressColor: '#39acef',
          style:{
            backgroundColor: '#ffffff',
            borderTopWidth:1,
            borderTopColor:'#D3D3D3'
          },
          indicatorStyle: {
            backgroundColor: "#39acef",
          }
          },
        }),
          navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (
              <View>
                <Icon name="home" size={25} color="#39acef" />
              </View>
            ),
          }
        },
        Feed:
        { screen: Feed,
          navigationOptions: {
            tabBarLabel:"Feeds Page",
            tabBarIcon: ({ tintColor }) => (
              <Icon name="feed" size={20} color="#39acef" />
            )
          },
        },
        Profile:
        {screen: Profile,
          navigationOptions: {
            tabBarLabel:"Profile Page",
            tabBarIcon: ({ tintColor }) => (
              <Icon name="user" size={20} color="#ff3838" />
            ),
          }
        },
        Explore:
        {screen: Explore,
          navigationOptions: {
            tabBarLabel:"Explore Page",
            tabBarIcon: ({ tintColor }) => (
              <Icon name="search" size={20} color="#3e37ff" />
            ),
          }
        },
        Web:
        { screen: Web,
          navigationOptions: {
            drawerLabel: 'Webview',
            drawerIcon: ({ tintColor }) => (
              <View>
                <Icon name="globe" size={25} color="#78c257" />
              </View>
            ),
          },
        }
     },
     {
      initialRouteName: 'Main',
      backBehavior: "initialRoute",
      contentComponent: CustomDrawerContentComponent,
     }),
    },
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      header: null
    }
  },
);

export default RootStack;
