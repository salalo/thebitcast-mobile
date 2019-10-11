import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';
import logoImg from '../assets/imgs/logo/LOGO_RED_128_PNG.png';

export default Splash = () => {
  return (
    <Container>
      <Image source={logoImg} style={{ width: 100, height: 100 }} />
    </Container>
  );
};

const Container = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
