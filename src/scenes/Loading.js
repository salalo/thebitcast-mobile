import React, { useState, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
`;
const Logo = styled.View`
  background-color: ${({ theme }) => theme.color.main};
  width: 100px;
  height: 100px;
`;

const Loading = () => {
  const [spinAnim] = useState(new Animated.Value(0));
  // spinValue = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(spinAnim, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear
    }).start();
  });

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <Container>
      <Animated.Logo style={{ transform: [{ rotate: spin }] }} />
    </Container>
  );
};

export default Loading;
