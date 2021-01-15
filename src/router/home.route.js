import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import logo from '../assets/images/logo.png';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {Image, View} from 'react-native';
import StoryScreen from '../screens/StoryScreen';

const HomeStack = createStackNavigator();

const HomeRoutes = () => (
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
    <HomeStack.Screen name="Story" component={StoryScreen} />
  </HomeStack.Navigator>
);

export default HomeRoutes;
