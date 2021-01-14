import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import ProfilePicture from '../../../ProfilePicture';
import styles from './styles';

const Header = ({imageUrl, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ProfilePicture uri={imageUrl} size={40} />
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.right}>
        <Icon name="dots-three-vertical" size={16}></Icon>
      </View>
    </View>
  );
};

export default Header;
