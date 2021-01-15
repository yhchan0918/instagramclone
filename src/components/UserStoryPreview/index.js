import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProfilePicture from '../ProfilePicture';
import styles from './styles';

const Story = ({story: {user, stories}}) => {
  console.log('USER', user.imageUri);
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Story', {userId: user.id});
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <ProfilePicture uri={user.imageUri} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Story;
