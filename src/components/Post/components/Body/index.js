import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Body = ({imageUri}) => {
  return <Image source={{uri: imageUri}} style={styles.image} />;
};

export default Body;
