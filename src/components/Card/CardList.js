import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';
import Card from './Card';

const CardList = props => {
  return (
    <FlatList
      style={{
        zIndex: -2,
      }}
      data={props.data}
      renderItem={({ item }) => <Card title={item.title} />}
      keyExtractor={item => item.id}
    />
  );
};

export default CardList;
