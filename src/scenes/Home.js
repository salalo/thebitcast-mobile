import React, { Component } from 'react';
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar/Navbar';
import Card from '../components/Card/Card';

const Container = styled.View`
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
        <Topbar heading="Home" />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Navbar navigation={this.props.navigation} />
      </Container>
    );
  }
}

export default Home;
