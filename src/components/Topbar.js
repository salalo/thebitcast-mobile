import React from 'react';
import styled from 'styled-components';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${(Platform.OS === 'android' ? 24 : 0) ||
    (Platform.OS === 'ios' ? 18 : 0)};
  height: 56;
  width: 100%;
  font-weight: 500;
  background-color: blue;
`;

const Heading = styled.Text`
  color: red;
  font-size: 20;
  font-weight: bold;
  text-align: center;
`;

const Topbar = () => {
  return (
    <Container>
      <Icon
        name="menu"
        size={24}
        color={'#000'}
        backgroundColor="#3b5998"
        style={{ margin: 0, padding: 16 }}
      />
      <Heading>Home</Heading>
    </Container>
  );
};

export default Topbar;
