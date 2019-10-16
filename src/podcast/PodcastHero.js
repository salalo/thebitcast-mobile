import React from 'react';
import { Dimensions, Image, Text } from 'react-native';
import styled from 'styled-components';
import WideButton from '../buttons/WideButton';

export default PodcastHero = ({ podcastImg, title, authorName }) => {
  return (
    <Container>
      <Image
        style={{ height: 150, width: 150, marginVertical: 50 }}
        source={{ uri: podcastImg }}
      />
      <Title>
        {title} Putting some more words to lengthen the title of the podcast.
      </Title>
      <AuthorName>by {authorName}</AuthorName>
      <WideButton outline text="Channel" />
      <PodcastInfo></PodcastInfo>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-medium';
  text-align: center;
  line-height: 26px;
  padding: 0 30px;
`;
const AuthorName = styled.Text`
  font-size: 14px;
  font-family: 'Roboto-light-italic';
  margin: 10px 0 50px 0;
`;
const PodcastInfo = styled.Text``;
