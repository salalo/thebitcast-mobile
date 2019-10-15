import React, { Component } from 'react';
import styled from 'styled-components';
import CardList from '../card/CardList';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <CardList navigation={this.props.navigation} />
      </Container>
    );
  }
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100%;
`;
