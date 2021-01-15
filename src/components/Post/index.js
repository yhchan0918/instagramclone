import React from 'react';
import {View, Text} from 'react-native';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

const Post = ({post: {user, image, likes, caption, createdAt}}) => {
  console.log('USER', user);
  return (
    <View>
      <Header imageUrl={user.image} name={user.name} />
      <Body imageUri={image} />
      <Footer likesCount={likes} caption={caption} postedAt={createdAt} />
    </View>
  );
};

export default Post;
