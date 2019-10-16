import React, { Component } from 'react';
import styled from 'styled-components';
import PodcastHero from './PodcastHero';
import PodcastFooter from './PodcastFooter';

export default class Podcast extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <PodcastHero {...navigation.getParam('podcast')} />
        <PodcastFooter {...navigation.getParam('podcast')} />
      </Container>
    );
  }
}

const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
