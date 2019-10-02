import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  width: 70%;
  height: 100%;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.white};
`;

const HamburgerForm = () => {
  return <Container></Container>;
};

export default HamburgerForm;
