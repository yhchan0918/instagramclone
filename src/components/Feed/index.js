import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Post from '../Post';
import Stories from '../Stories';

const data = [
  {
    user: {
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHmLQOHTgLSKQxq-zWXVNxdEV9J9YKQ_Jdg&usqp=CAU',
      name: 'Diaoge',
    },
    imageUri:
      'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    caption: 'Beautiful city lol',
    likesCount: 11,
    postedAt: '6 minutes ago',
  },
  {
    user: {
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHmLQOHTgLSKQxq-zWXVNxdEV9J9YKQ_Jdg&usqp=CAU',
      name: 'Diaoge',
    },
    imageUri:
      'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    caption: 'Beautiful city lol',
    likesCount: 11,
    postedAt: '6 minutes ago',
  },
];

const Feed = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <Post post={item} />}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feed;
