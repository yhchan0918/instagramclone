import React from 'react';
import {FlatList} from 'react-native';
import styles from './styles';
import Story from '../Story';

const data = [
  {
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'John',
  },
  {
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlP4HLuTjGwgPOJO2j85GEOgq__zHHJttpwA&usqp=CAU',
    name: 'Lukas',
  },
  {
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHpln8mQK6f_Ov26yf0CFycenoQxJWG5mXA&usqp=CAU',
    name: 'Ben',
  },
  {
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHmLQOHTgLSKQxq-zWXVNxdEV9J9YKQ_Jdg&usqp=CAU',
    name: 'DiaoGe',
  },
];

const Stories = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({name}) => name}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      renderItem={({item}) => (
        <Story imageUrl={item.imageUrl} name={item.name} />
      )}
    />
  );
};

export default Stories;
