import React from 'react';
import {View, Text} from 'react-native';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

const Post = ({post: {user, imageUri, likesCount, caption, postedAt}}) => {
  return (
    <View>
      <Header imageUrl={user.imageUrl} name={user.name} />
      <Body imageUri={imageUri} />
      <Footer likesCount={likesCount} caption={caption} postedAt={postedAt} />
    </View>
  );
};

export default Post;
