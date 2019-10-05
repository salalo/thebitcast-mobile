import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import avatar from '../../assets/imgs/profile.png';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons';

// will be set to TouchableOpacity
const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  padding: 10px 0 10px 16px;
  elevation: 5;
  background-color: ${({ theme }) => theme.color.white};
`;
const PodcastInfo = styled.View`
  display: flex;
  flex-direction: column;
  height: 80px;
  padding-left: 10px;
  background-color: ${({ theme }) => theme.color.white};
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
const BookmarkAddBtn = styled.TouchableOpacity`
  display: flex;
  width: 130px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.color.main};
`;
const BookmarkAddBtnText = styled.Text`
  color: ${({ theme }) => theme.color.white};
  font-family: 'Roboto-regular';
  font-size: 13px;
`;

const Card = props => {
  const addToBookmarks = () => {
    console.log('added to bookmarks');
    // use redux to post the info (addtoBookmarks wil be
    // executed from another places as well)
    //
    // set podcast as bookmarked and
    // remove it => don't render podcasts with bookmarked: true
    //
    // TODO: ? only one element can be swiped at the same time
  };

  const renderBookmarkAddBtn = () => {
    return (
      <BookmarkAddBtn onPress={addToBookmarks}>
        <Icon name={'bookmark'} size={32} style={{ color: '#fff' }} />
        <BookmarkAddBtnText>Add to bookmarks</BookmarkAddBtnText>
      </BookmarkAddBtn>
    );
  };

  return (
    <Swipeable renderRightActions={renderBookmarkAddBtn}>
      <Container>
        <AuthorAvatar source={avatar} />
        <PodcastInfo style={{ width: Dimensions.get('window').width - 116 }}>
          <PodcastTitle>{props.title}</PodcastTitle>
          <PodcastAuthor>Gall Anonim</PodcastAuthor>
        </PodcastInfo>
      </Container>
    </Swipeable>
  );
};

export default Card;
