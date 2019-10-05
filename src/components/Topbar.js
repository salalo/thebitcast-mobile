import React, { useState } from 'react';
import styled from 'styled-components';
import { View, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Hamburger from './Hamburger/Hamburger';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 56;
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  elevation: 5;
  z-index: -2;
  margin-top: ${(Platform.OS === 'android' ? 24 : 0) ||
    (Platform.OS === 'ios' ? 18 : 0)};
`;

const Heading = styled.Text`
  color: ${({ theme }) => theme.color.black};
  font-size: 20;
  font-family: 'Roboto-medium';
  text-align: center;
`;

const Topbar = () => {
  const [isHamburgerOpen, setHamburgerState] = useState(false);
  const toggleHamburgerMenu = () => setHamburgerState(!isHamburgerOpen);

  return (
    <View>
      <Container>
        <Icon
          name={'menu'}
          size={24}
          color={'#252525'}
          style={{ margin: 0, padding: 16 }}
          onPress={isHamburgerOpen ? null : toggleHamburgerMenu}
        />
        <Heading>Home</Heading>
      </Container>
      <Hamburger
        toggleHamburger={toggleHamburgerMenu}
        isOpen={isHamburgerOpen}
      />
    </View>
  );
};

export default Topbar;
