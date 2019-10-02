import React, { useState } from 'react';
import styled from 'styled-components';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Hamburger from './Hamburger/Hamburger';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${(Platform.OS === 'android' ? 24 : 0) ||
    (Platform.OS === 'ios' ? 18 : 0)};
  height: 56;
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  elevation: 5;
`;

const Heading = styled.Text`
  color: ${({ theme }) => theme.color.black};
  font-size: 20;
  font-family: 'Roboto-medium';
  text-align: center;
`;

const Topbar = props => {
  const [isHamburgerOpen, setHamburgerState] = useState(false);
  const toggleHamburgerMenu = () => setHamburgerState(!isHamburgerOpen);

  return (
    <Container>
      <Icon
        name={isHamburgerOpen ? 'arrow-back' : 'menu'}
        size={24}
        color={'#252525'}
        style={{ margin: 0, padding: 16 }}
        onPress={toggleHamburgerMenu}
      />
      <Heading>{props.heading}</Heading>
      <Hamburger isOpen={isHamburgerOpen} />
    </Container>
  );
};

export default Topbar;
