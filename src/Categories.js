import React, { Component } from 'react';
import styled from 'styled-components';

export default class Categories extends Component {
  render() {
    return (
      <StyledCategories>
        <Text>SHOPEN</Text>
      </StyledCategories>
    );
  }
}

const StyledCategories = styled.View`
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100%;
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.color.black};
  font-size: 12;
  text-align: center;
  font-family: 'Roboto-regular';
`;
