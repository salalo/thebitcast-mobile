import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Container = styled.View`
  width: 70%;
  height: 100%;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.white};
`;

const UserInfo = styled.View``;
const FormList = styled.View``;
const ListItemBtn = styled.TouchableOpacity``;
const ListItemText = styled.Text``;

const listItems = [
  { key: 'upload', text: 'Upload', icon: 'cloud-upload', scene: 'Upload' },
  { key: 'downloads', text: 'Downloads', icon: 'beenhere', scene: 'Downloads' },
  {
    key: 'stats-panel',
    text: 'Statistics panel',
    icon: 'insert-chart',
    scene: 'Stats',
  },
  {
    key: 'our_mission',
    text: 'Our mission',
    icon: 'whatshot',
    scene: 'Mission',
  },
  { key: 'premium', text: 'Premium', icon: 'star', scene: 'Premium' },
  { key: 'settings', text: 'Settings', icon: 'settings', scene: 'Settings' },
  { key: 'us', text: 'Us', icon: 'help', scene: 'Us' },
  { key: 'sign_out', text: 'Sign out', icon: 'keyboard-tab', scene: 'NONE' },
];

const HamburgerForm = () => {
  return (
    <Container>
      <UserInfo></UserInfo>
      <FormList>
        {listItems.map(item => (
          <ListItemBtn key={'btn__' + item.key}>
            <Icon
              name={item.icon}
              size={24}
              color={'#252525'}
              key={'icon__' + item.key}
            />
            <ListItemText key={'text__' + item.key}>{item.text}</ListItemText>
          </ListItemBtn>
        ))}
      </FormList>
    </Container>
  );
};

export default HamburgerForm;
