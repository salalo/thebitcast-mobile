import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import img from '../assets/imgs/loginScreenImg.png';

const ButtonsList = [
  { name: 'Google', icon: 'google', color: '#FF3E30' },
  { name: 'Facebook', icon: 'facebook', color: '#3B5998' },
  { name: 'Twitter', icon: 'twitter', color: '#38A1F3' }
];

export default Login = () => {
  return (
    <Container>
      <Hero>
        <HeroText>Login to explore the best podcasts in the world. </HeroText>
      </Hero>
      <SignBtnsHolder>
        {ButtonsList.map(item => (
          <SignBtn
            key={'btn__' + item.name}
            style={{ backgroundColor: item.color }}
          >
            <Icon name={item.icon} size={24} style={{ color: '#fff' }} />
            <SignBtnText>Sign up using {item.name}</SignBtnText>
          </SignBtn>
        ))}
      </SignBtnsHolder>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
`;

const Hero = styled.View`
  background-color: ${({ theme }) => theme.color.main};
  width: 100%;
  height: 60%;
  margin-bottom: auto;
`;
const HeroText = styled.Text`
  top: 50%;
  left: 32px;
  font-size: 24px;
  width: 50%;
  font-family: 'Roboto-medium';
  color: ${({ theme }) => theme.color.white};
`;

const SignBtnsHolder = styled.View`
  width: 100%;
  height: 40%;
  align-items: center;
  justify-content: space-evenly;
`;

const SignBtn = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 90%;
  background-color: ${({ theme }) => theme.color.black};
  padding: 32px;
  elevation: 5;
  border-radius: 2px;
`;
const SignBtnText = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-medium';
  color: ${({ theme }) => theme.color.white};
  margin-left: 20px;
`;
