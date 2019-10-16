import React, { Component } from 'react';
import styled from 'styled-components';
import PodcastHero from './PodcastHero';

export default class Podcast extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <PodcastHero {...navigation.getParam('podcast')} />
      </Container>
    );
  }
}

const Container = styled.View`
  width: 100%;
  height: 100%;
`;
