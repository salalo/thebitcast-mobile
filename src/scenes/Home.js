import React, { Component } from 'react';
import styled from 'styled-components';
import CardList from '../components/Card/CardList';

const Container = styled.View`
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100%;
`;

class Home extends Component {
  render() {
    const DATA = [
      {
        id: '9',
        title: 'The world wide best sample title ever made.'
      },
      {
        id: '8',
        title: 'Medium length title'
      },
      {
        id: '7',
        title: 'The world wide best sample title ever made.'
      },
      {
        id: '6',
        title: 'First Item'
      },
      {
        id: '5',
        title: 'Medium length title'
      },
      {
        id: '4',
        title: 'The world wide best sample title ever made.'
      },
      {
        id: '3',
        title: 'Medium length title'
      },
      {
        id: '2',
        title: 'Third Item'
      },
      {
        id: '1',
        title: 'The world wide best sample title ever made.'
      },
      {
        id: '0',
        title: 'Third Item'
      }
    ];

    return (
      <Container>
        <CardList data={DATA} navigation={this.props.navigation} />
      </Container>
    );
  }
}

export default Home;
