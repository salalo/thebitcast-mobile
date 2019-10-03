import React, { Component } from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar/Navbar';

const StyledCategories = styled.View`
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.color.black};
  font-size: 12;
  text-align: center;
  font-family: 'Roboto-regular';
`;

class Categories extends Component {
  render() {
    return (
      <StyledCategories>
        <Topbar heading="Categories" />
        <Text>SHOPEN</Text>
        <Navbar navigation={this.props.navigation} />
      </StyledCategories>
    );
  }
}

export default Categories;
