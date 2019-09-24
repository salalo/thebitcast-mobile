import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: 1000;
  display: flex;
  opacity: 0;
  /* transform: left(-100); */
  /* transition: transform 0.3s 0s ease-in-out; */

  /* flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center; */
  background-color: ${({ theme }) => theme.color.main};
`;

const Hamburger = ({ isOpen }) => {
  return <Container isOpen={isOpen}></Container>;
};

export default Hamburger;
