import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Container = styled.View`
  display: flex;
  position: absolute;
  bottom: 0;
  height: 56;
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  elevation: 5;
`;

const ButtonsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Button = styled.View`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.color.black};
  font-size: 12;
  text-align: center;
  font-family: 'Roboto-regular';
`;

const navBtns = [
  { key: 'home', text: 'Home', icon: 'home' },
  { key: 'categories', text: 'Categories', icon: 'apps' },
  { key: 'following', text: 'Following', icon: 'favorite' },
  { key: 'bookmarks', text: 'Bookmarks', icon: 'bookmark' },
  { key: 'search', text: 'Search', icon: 'search' }
];

const Navbar = () => {
  return (
    <Container>
      <ButtonsWrapper>
        {navBtns.map(item => (
          <Button key={item.key + 'Btn'}>
            <Icon
              name={item.icon}
              size={24}
              color={'#252525'}
              style={{ marginBottom: -5 }}
              key={item.key}
            />
            <Text>{item.text}</Text>
          </Button>
        ))}
      </ButtonsWrapper>
    </Container>
  );
};

export default Navbar;
