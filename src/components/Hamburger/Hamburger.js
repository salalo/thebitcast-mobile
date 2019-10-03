import React from 'react';
import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components';
import HamburgerForm from './HamburgerForm';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  elevation: 5;
  margin-top: ${(Platform.OS === 'android' ? 24 : 0) ||
    (Platform.OS === 'ios' ? 18 : 0)};
`;

const RightInner = styled.TouchableOpacity`
  width: 30%;
  height: 100%;
  opacity: 0.24;
  background-color: #000000;
`;

const Hamburger = ({ isOpen, toggleHamburger }) => {
  console.log(isOpen, Dimensions.get('window').width);

  return (
    <Container
      isOpen={isOpen}
      style={{
        transform: [
          { translateX: isOpen ? 0 : Dimensions.get('window').width },
        ],
        height: Dimensions.get('window').height,
      }}>
      <HamburgerForm />
      <RightInner onPress={toggleHamburger}></RightInner>
    </Container>
  );
};

export default Hamburger;
