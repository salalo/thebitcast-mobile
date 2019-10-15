import React, { Component } from 'react';
import { Animated, Easing, View, Image } from 'react-native';
import styled from 'styled-components';
import logoImg from '../assets/imgs/logo/LOGO_RED_128_PNG.png';

export default class Loading extends Component {
  constructor() {
    super();
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }
  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.inOut(Easing.quad)
    }).start(() => this.spin());
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <Container>
        <Animated.Image
          source={logoImg}
          style={{ width: 100, height: 100, transform: [{ rotate: spin }] }}
        />
      </Container>
    );
  }
}

const Container = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
