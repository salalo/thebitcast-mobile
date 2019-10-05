import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import userImg from '../../assets/imgs/profile.png';

const Container = styled.View`
  width: 70%;
  height: 100%;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.white};
`;

const UserInfo = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 25%;
  padding-left: 16px;
`;
const UserImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 100;
`;
const UserName = styled.Text`
  font-family: 'Roboto-medium';
  font-size: 20px;
  margin-top: 16px;
`;
const UserEmail = styled.Text`
  font-family: 'Roboto-light';
  font-size: 13px;
`;

const Separator = styled.View`
  height: 1px;
  margin: 25px 16px 15px 12px;
  opacity: 0.1;
  background-color: ${({ theme }) => theme.color.black};
`;

const FormList = styled.View`
  display: flex;
  flex-direction: column;
  height: 65%;
`;
const ListItemBtn = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  padding: 13px 0 13px 16px;
`;
const ListItemText = styled.Text`
  font-family: 'Roboto-medium';
  font-size: 14px;
  margin-left: 35px;
`;

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
      <UserInfo>
        <UserImage source={userImg} />
        <UserName>Olivia Heldens</UserName>
        <UserEmail>example@email.com</UserEmail>
      </UserInfo>
      <Separator />
      <FormList>
        {listItems.map(item => (
          <ListItemBtn
            key={'btn__' + item.key}
            style={
              item.key === 'sign_out'
                ? { position: 'absolute', bottom: 5, width: '100%' }
                : null
            }>
            <Icon
              name={item.icon}
              size={24}
              color={
                item.key === 'our_mission' || item.key === 'premium'
                  ? '#F44336'
                  : '#252525'
              }
              key={'icon__' + item.key}
            />
            <ListItemText
              key={'text__' + item.key}
              style={
                item.key === 'our_mission' || item.key === 'premium'
                  ? { color: '#F44336' }
                  : { color: '#252525' }
              }>
              {item.text}
            </ListItemText>
          </ListItemBtn>
        ))}
      </FormList>
    </Container>
  );
};

export default HamburgerForm;
