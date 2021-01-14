/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {Image, StatusBar, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import DiscoveryScreen from './src/screens/DiscoveryScreen';
import CreatePostScreen from './src/screens/CreatePostScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import Foundation from 'react-native-vector-icons/Foundation';
import ADIcon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import logo from './src/assets/images/logo.png';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeft: () => (
            <View>
              <Feather name="camera" size={25} color={'#000'} />
            </View>
          ),
          headerTitle: () => (
            <Image source={logo} style={{width: 125, resizeMode: 'contain'}} />
          ),
          headerRight: () => (
            <IoniconsIcon
              name="paper-plane-outline"
              size={25}
              color={'#545454'}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                return <Foundation name="home" size={size} color={color} />;
              }
              if (route.name === 'Discovery') {
                return <Feather name="search" size={size} color={color} />;
              }
              if (route.name === 'Post') {
                return <Feather name="plus-square" size={size} color={color} />;
              }
              if (route.name === 'Notifications') {
                return <ADIcon name="hearto" size={size} color={color} />;
              }
              if (route.name === 'Profile') {
                return (
                  <IoniconsIcon
                    name="person-outline"
                    size={size}
                    color={color}
                  />
                );
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: '#000',
            inactiveTintColor: 'gray',
            showLabel: false,
          }}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Discovery" component={DiscoveryScreen} />
          <Tab.Screen name="Post" component={CreatePostScreen} />
          <Tab.Screen name="Notifications" component={NotificationsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
