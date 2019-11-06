import React, { Component } from 'react';
import styled from 'styled-components';
import PodcastPlayer from './PodcastPlayer';
import PodcastHero from './PodcastHero';
import PodcastFooter from './PodcastFooter';

export default class Podcast extends Component {
  constructor(props) {
    super(props);
    this.state = { renderPlayer: true };
    this.handlePlayerUnmount = this.handlePlayerUnmount.bind(this);
  }

  handlePlayerUnmount() {
    this.setState({ renderPlayer: false });
  }
  render() {
    const { navigation } = this.props;

    return (
      <Container>
        {this.state.renderPlayer ? (
          <PodcastPlayer
            {...navigation.getParam('podcast')}
            unmountSelf={this.handlePlayerUnmount}
          />
        ) : null}
        <ScrollViewContainer>
          <PodcastHero {...navigation.getParam('podcast')} />
          <PodcastFooter {...navigation.getParam('podcast')} />
        </ScrollViewContainer>
      </Container>
    );
  }
}

const Container = styled.View`
  width: 100%;
  height: 100%;
`;
const ScrollViewContainer = styled.ScrollView`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
