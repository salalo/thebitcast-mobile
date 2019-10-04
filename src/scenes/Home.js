import React, { Component } from 'react';
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar/Navbar';
import Card from '../components/Card/Card';
import CardList from '../components/Card/CardList'

const Container = styled.View`
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

class Home extends Component {
  render() {
    const DATA = [
      {
        id: '9',
        title: 'First Item',
      },
      {
        id: '8',
        title: 'First Item',
      },
      {
        id: '7',
        title: 'First Item',
      },
      {
        id: '6',
        title: 'First Item',
      },
      {
        id: '5',
        title: 'Second Item',
      },
      {
        id: '4',
        title: 'Third Item',
      },
      {
        id: '3',
        title: 'Third Item',
      },
      {
        id: '2',
        title: 'Third Item',
      },
      {
        id: '1',
        title: 'Third Item',
      },
      {
        id: '0',
        title: 'Third Item',
      },
    ];

    return (
      <Container>
        <Topbar heading="Home" />
        <CardList data={DATA}/>
        <Navbar navigation={this.props.navigation} />
      </Container>
    );
  }
}

export default Home;
