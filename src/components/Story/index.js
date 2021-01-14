import React from 'react';
import {View, Text} from 'react-native';
import ProfilePicture from '../ProfilePicture';
import styles from '../Story/styles';

const Story = ({imageUrl, name}) => {
  return (
    <View>
      <ProfilePicture uri={imageUrl} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Story;
