import React, { Component } from 'react';
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import { Button } from 'react-native';

const Container = styled.View`
  /* flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center; */
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <Topbar />
        <Navbar navigation={this.props.navigation} />
      </Container>
    );
  }
}

export default Home;
