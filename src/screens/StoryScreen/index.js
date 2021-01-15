import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useRoute} from '@react-navigation/native';

const StoryScreen = () => {
  const route = useRoute();
  console.log(route);
  return (
    <SafeAreaView>
      <Text>Awesome story</Text>
    </SafeAreaView>
  );
};

export default StoryScreen;
