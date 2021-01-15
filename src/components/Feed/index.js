import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';

import Post from '../Post';
import UserStoriesPreview from '../UserStoriesPreview';
import {listPosts} from '../../graphql/queries';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    try {
      const posts = await API.graphql(graphqlOperation(listPosts));

      setPosts(posts.data.listPosts.items);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <FlatList
      data={posts}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <Post post={item} />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={UserStoriesPreview}
    />
  );
};

export default Feed;
