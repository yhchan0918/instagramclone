import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProfilePicture from '../ProfilePicture';
import styles from './styles';

const Story = ({story: {user}}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Story', {userId: user.id});
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <ProfilePicture uri={user.image} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Story;
