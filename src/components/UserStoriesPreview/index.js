import React from 'react';
import {FlatList} from 'react-native';
import storiesData from '../../data/stories';
import styles from './styles';
import UserStoryPreview from '../UserStoryPreview';

const Stories = () => {
  return (
    <FlatList
      data={storiesData}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      renderItem={({item}) => <UserStoryPreview story={item} />}
    />
  );
};

export default Stories;
