import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import avatar from '../../assets/imgs/profile.png';

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  padding: 10px 0 10px 16px;
`;
const PodcastInfo = styled.View`
  display: flex;
  flex-direction: column;
  height: 80px;
  margin-left: 10px;
`;
const AuthorAvatar = styled.Image`
  height: 80px;
  width: 80px;
`;
const PodcastTitle = styled.Text`
  font-family: 'Roboto-regular'
  font-size: 16px;
  margin: -4px 0 4px 0;
`;
const PodcastAuthor = styled.Text`
  font-family: 'Roboto-light'
  font-size: 14px;
`;

const Card = props => {
  return (
    <Container>
      <AuthorAvatar source={avatar} />
      <PodcastInfo style={{ width: Dimensions.get('window').width - 116 }}>
        <PodcastTitle>{props.title}</PodcastTitle>
        <PodcastAuthor>Gall Anonim</PodcastAuthor>
      </PodcastInfo>
    </Container>
  );
};

export default Card;
