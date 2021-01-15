import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';

import {listStorys} from '../../graphql/queries';
import styles from './styles';
import UserStoryPreview from '../UserStoryPreview';

const Stories = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    fetchStories();
  }, []);
  const fetchStories = async () => {
    try {
      const stories = await API.graphql(graphqlOperation(listStorys));

      setStories(stories.data.listStorys.items);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <FlatList
      data={stories}
      keyExtractor={({id}) => id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      renderItem={({item}) => <UserStoryPreview story={item} />}
    />
  );
};

export default Stories;
