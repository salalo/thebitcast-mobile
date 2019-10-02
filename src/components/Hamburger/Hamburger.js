import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  width: 70%;
  background-color: ${({ theme }) => theme.color.main};
`;

const Hamburger = ({ isOpen }) => {
  console.log(isOpen, Dimensions.get('window').width);
  return (
    <Container
      style={{
        transform: [
          { translateX: isOpen ? 0 : Dimensions.get('window').width },
        ],
        height: Dimensions.get('window').height,
      }}
      isOpen={isOpen}></Container>
  );
};

export default Hamburger;
